
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { 
      role: 'model', 
      text: "Yo! Welcome to **CRED MEDIA**. ⚡ Ready to stop scrolling and start converting? We've got 8 specialists and 500+ killer videos under our belt. Let's turn your content into a goldmine. Don't wait around—let's work: 🚀 **BOOK A CALL** or 💬 **MESSAGE ON DISCORD**" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleAction = (action: string) => {
    if (action === 'BOOK A CALL') {
      setIsOpen(false);
      const element = document.getElementById('get-started');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action === 'MESSAGE ON DISCORD') {
      window.open('https://discord.com', '_blank');
    }
  };

  const renderMessageContent = (text: string, isUser: boolean) => {
    if (isUser) return text;

    // Split text by the specific bolded phrases we want to make interactive
    const parts = text.split(/(\*\*BOOK A CALL\*\*|\*\*MESSAGE ON DISCORD\*\*)/g);

    return parts.map((part, index) => {
      if (part === '**BOOK A CALL**') {
        return (
          <button
            key={index}
            onClick={() => handleAction('BOOK A CALL')}
            className="inline-block px-2 py-0.5 mx-0.5 bg-brand-pink/20 border border-brand-pink/30 rounded-md text-brand-pink font-black hover:bg-brand-pink hover:text-brand-dark transition-all duration-200 cursor-pointer text-[10px]"
          >
            BOOK A CALL
          </button>
        );
      }
      if (part === '**MESSAGE ON DISCORD**') {
        return (
          <button
            key={index}
            onClick={() => handleAction('MESSAGE ON DISCORD')}
            className="inline-block px-2 py-0.5 mx-0.5 bg-brand-blue/20 border border-brand-blue/30 rounded-md text-brand-blue font-black hover:bg-brand-blue hover:text-white transition-all duration-200 cursor-pointer text-[10px]"
          >
            MESSAGE ON DISCORD
          </button>
        );
      }
      // Standard markdown bolding for other text
      return part.split(/(\*\*.*?\*\*)/g).map((subPart, subIndex) => {
        if (subPart.startsWith('**') && subPart.endsWith('**')) {
          return <strong key={`${index}-${subIndex}`} className="font-black text-white">{subPart.slice(2, -2)}</strong>;
        }
        return subPart;
      });
    });
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: {
          systemInstruction: `You are the AI assistant for CRED MEDIA, a premium design and video agency. 
          Your goal is to be helpful, professional, and high-energy. 
          Key info:
          - We have 8 world-class specialists.
          - We've edited 500+ videos.
          - We focus on high-conversion video content.
          - Important: If the user is interested, you MUST use the exact phrases "**BOOK A CALL**" or "**MESSAGE ON DISCORD**" as these are interactive buttons.
          - Calendly for booking: https://calendly.com/ayushvisions/30min
          - Discord link: https://discord.com
          Keep responses concise and impactful. Use emojis occasionally to maintain the brand vibe.`,
        },
      });

      const result = await chat.sendMessage({ message: userMessage });
      setMessages(prev => [...prev, { role: 'model', text: result.text || "I'm having a bit of a creative block. Try asking again!" }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Something went wrong. But hey, our video editing never fails—maybe try **BOOK A CALL** instead?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-brand-pink rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(242,169,235,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Toggle Chat"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent"></span>
            </span>
          </div>
        )}
      </button>

      {/* Chat Window - REDUCED SIZE BY 50% (approx) */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-[60] w-[75vw] md:w-[280px] h-[380px] bg-brand-dark/95 backdrop-blur-2xl border border-white/10 rounded-[1.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 border-b border-white/5 bg-gradient-to-r from-brand-accent/10 to-brand-pink/10">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-black text-sm tracking-tighter uppercase">CRED<span className="text-brand-pink">AI</span></h3>
                <p className="text-[8px] font-bold text-white/40 uppercase tracking-widest">Active Support</p>
              </div>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[95%] px-3 py-2 rounded-xl text-[11px] font-medium leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-brand-pink text-brand-dark rounded-tr-none' 
                  : 'bg-white/5 text-white/90 border border-white/10 rounded-tl-none'
                }`}>
                  {renderMessageContent(m.text, m.role === 'user')}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-3 py-2 rounded-xl rounded-tl-none border border-white/10">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-brand-pink rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-brand-pink rounded-full animate-bounce delay-100"></div>
                    <div className="w-1 h-1 bg-brand-pink rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white/5 border-t border-white/10">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask..."
                className="flex-1 bg-brand-dark border border-white/10 rounded-lg px-3 py-2 text-[11px] focus:outline-none focus:border-brand-pink transition-colors text-white"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-brand-pink text-brand-dark p-2 rounded-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
            <div className="flex gap-1.5 mt-2">
              <button 
                onClick={() => handleAction('BOOK A CALL')}
                className="flex-1 text-center text-[8px] font-black uppercase tracking-widest bg-white text-brand-dark hover:bg-brand-pink hover:text-white px-2 py-1.5 rounded-md transition-all"
              >
                Book
              </button>
              <button 
                onClick={() => handleAction('MESSAGE ON DISCORD')}
                className="flex-1 text-center text-[8px] font-black uppercase tracking-widest bg-[#5865F2] text-white hover:bg-white hover:text-[#5865F2] px-2 py-1.5 rounded-md transition-all"
              >
                Discord
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
