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

  if (!res.ok) return Response.json({ error: "Subscription failed" }, { status: 500 });

  return Response.json({ ok: true });
}
