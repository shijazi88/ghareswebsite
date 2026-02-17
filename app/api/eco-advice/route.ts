import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });
    const modelId = "gemini-2.0-flash";

    const response = await ai.models.generateContent({
      model: modelId,
      contents: query,
      config: {
        systemInstruction: `You are "Ghares AI", an intelligent assistant for an environmental platform called Ghares (The Planter).
        Your goal is to encourage planting and sustainability.
        Context:
        - "Initiators" pay for planting.
        - "Planters" are workers who plant trees.
        - We operate in arid and semi-arid regions (Middle East context).

        If a user asks about what to plant, suggest drought-resistant trees suitable for desert climates (e.g., Acacia, Ghaf, Olive).
        Keep answers concise, encouraging, and helpful.`,
      },
    });

    return NextResponse.json({
      text: response.text || "I'm sorry, I couldn't generate a response at this time.",
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { text: "Our eco-systems are currently busy. Please try again later." },
      { status: 500 }
    );
  }
}
