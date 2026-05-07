import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

export async function POST(req) {
  try {
    const { text } = await req.json();

    if (!text || text.trim().length === 0) {
      return Response.json({ error: "No bill text provided" }, { status: 400 });
    }

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: `You are a plain-English translator for Nebraska citizens who want to understand their state legislature. When given a bill, legislative text, or description of a bill:

1. Summarize it in 2-3 sentences a high school student could understand
2. Explain WHO it helps and WHO it might hurt (be honest and balanced)
3. Note any red flags — vague language, unusual provisions, or signs of outside interest group influence
4. End with one sentence: "Bottom line for everyday Nebraskans: ..."

Be direct, honest, and non-partisan. Use plain language. No jargon.`,
      messages: [
        {
          role: "user",
          content: `Translate this Nebraska legislative item for everyday citizens:\n\n${text}`,
        },
      ],
    });

    const translation = message.content[0].text;
    return Response.json({ translation });
  } catch (error) {
    console.error("Translation error:", error);
    return Response.json(
      { error: "Failed to translate bill" },
      { status: 500 }
    );
  }
}
