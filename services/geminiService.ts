
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateLabIdea = async (userPrompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an innovation scout at Polymath Labs. A user has an idea for a new AI experiment: "${userPrompt}". 
      Respond as a visionary labs engineer. Summarize the idea, give it a cool "Polymath" project name, and explain how it could push the boundaries of AI in 2-3 concise paragraphs. Use a professional yet experimental tone.`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });

    return response.text || "I'm sorry, I couldn't process that lab idea right now. Let's try another one!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error communicating with the Polymath brain. Please try again later.";
  }
};
