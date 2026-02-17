import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getEcoAdvice = async (userQuery: string): Promise<string> => {
  try {
    const modelId = 'gemini-3-flash-preview';
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: userQuery,
      config: {
        systemInstruction: `You are "Ghares AI", an intelligent assistant for an environmental platform called Ghares (The Planter). 
        Your goal is to encourage planting and sustainability.
        Context:
        - "Initiators" pay for planting.
        - "Planters" are workers who plant trees.
        - We operate in arid and semi-arid regions (Middle East context).
        
        If a user asks about what to plant, suggest drought-resistant trees suitable for desert climates (e.g., Acacia, Ghaf, Olive).
        Keep answers concise, encouraging, and helpful.`,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our eco-systems are currently busy. Please try again later.";
  }
};