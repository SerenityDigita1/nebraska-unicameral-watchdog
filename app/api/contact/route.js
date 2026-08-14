export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send Discord notification
    if (process.env.DISCORD_FORMS_WEBHOOK_URL) {
      try {
        await fetch(process.env.DISCORD_FORMS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: '📬 **New Nebraska Watchdog Contact Form Submission**',
            embeds: [
              {
                color: 13107759, // Red (#C8102E)
                fields: [
                  { name: 'Name', value: name, inline: true },
                  { name: 'Email', value: email, inline: true },
                  { name: 'Client', value: 'Nebraska Watchdog', inline: true },
                  { name: 'Page', value: '/contact', inline: true },
                  { name: 'Message', value: message.substring(0, 1024), inline: false },
                ],
                timestamp: new Date().toISOString(),
              },
            ],
          }),
        })
      } catch (discordError) {
        console.error('Discord notification failed:', discordError)
      }
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { error: 'Form submission failed' },
      { status: 500 }
    )
  }
}
