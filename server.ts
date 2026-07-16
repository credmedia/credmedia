import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server" });
      }

      const ai = new GoogleGenAI({ 
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const chat = ai.chats.create({
        model: "gemini-3.5-flash",
        config: {
          systemInstruction: `You are the AI assistant for CRED MEDIA, a premium design and video agency. 
          Your goal is to be helpful, professional, and high-energy. 
          Key info:
          - We have 8 world-class specialists.
          - We've edited 500+ videos.
          - We focus on high-conversion video content.
          - Important: If the user is interested, you MUST use the exact phrases "**BOOK A CALL**" or "**MESSAGE ON DISCORD**" as these are interactive buttons.
          - Direct Calendly for booking: https://calendly.com/ayushvisions/30min
          - Direct Discord connection link: https://discord.com/users/1263203451605745850
          Always output the raw URLs whenever describing how to book or chat so that the app's advanced visual HTML link parser can render them into clickable anchor tags natively, bypassing potential browser frame blocks. Keep responses concise and impactful. Use emojis occasionally to maintain the brand vibe.`,
        },
        history: history || []
      });

      const result = await chat.sendMessage({ message });
      res.json({ text: result.text || "I'm having a bit of a creative block. Try asking again!" });
    } catch (error: any) {
      console.error("Server Gemini Error:", error);
      res.status(500).json({ error: error.message || "An error occurred with Gemini service" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
