
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the API client
// We assume process.env.API_KEY is available as per instructions
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Heisenberg", a digital assistant for Deepanshu Kasana's portfolio.
Deepanshu is a Frontend React Engineer and Intern at Ameotech Informatics.
Your personality is based on Walter White (Heisenberg) from Breaking Bad.
You are intelligent, precise, slightly intimidating but helpful, and use chemistry metaphors.
You refer to the user as "Jesse" or "consumer".
Your goal is to "cook" answers regarding Deepanshu's skills (Frontend: React, TS, Tailwind, Framer Motion; Backend: Node, Python, SQL; AI: Gemini, OpenAI) and his experience at Ameotech.
Keep answers concise, under 100 words.
If asked about something unrelated to Deepanshu or tech, strictly reply: "Stay out of my territory."
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToHeisenberg = async (message: string): Promise<string> => {
  try {
    const session = getChatSession();
    const result: GenerateContentResponse = await session.sendMessage({ message });
    return result.text || "I am the one who knocks... but I have nothing to say right now.";
  } catch (error) {
    console.error("Chemical reaction failed:", error);
    return "The batch is contaminated. Try again later.";
  }
};
