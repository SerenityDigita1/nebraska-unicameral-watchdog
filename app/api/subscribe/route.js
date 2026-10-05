async function pingDiscord(email, ok) {
  const url = process.env.DISCORD_FORMS_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: ok
          ? "📬 **Nebraska Watchdog** · newsletter signup"
          : "🚨 **Nebraska Watchdog** · newsletter signup FAILED at Beehiiv",
        allowed_mentions: { parse: [] },
        embeds: [
          {
            color: ok ? 3978097 : 15158332,
            fields: [
              { name: "Email", value: String(email).slice(0, 200), inline: true },
              { name: "Form", value: "Newsletter signup", inline: true },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });
  } catch {}
}

export async function POST(req) {
  const { email } = await req.json();
  if (!email) {
    return Response.json({ error: "Email required" }, { status: 400 });
  }

  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUB_ID}/subscriptions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
      },
      body: JSON.stringify({ email, reactivate_existing: true }),
    }
  );

  await pingDiscord(email, res.ok);

  if (!res.ok) return Response.json({ error: "Subscription failed" }, { status: 500 });

  return Response.json({ ok: true });
}
