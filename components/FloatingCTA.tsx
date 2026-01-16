
import React, { useState, useEffect } from 'react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-brand-dark/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-3 pl-5 flex items-center justify-between gap-4 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
        
        {/* Left Side: Icon & Text */}
        <div className="flex items-center gap-4">
          <div className="relative flex-shrink-0">
             <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#F48D2E] to-[#F2A9EB] flex items-center justify-center font-black text-brand-dark shadow-[0_0_15px_rgba(244,141,46,0.3)]">
                !
             </div>
             {/* Red Notification Dot */}
             <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#8E2222] rounded-full border-2 border-brand-dark"></div>
          </div>
          <p className="text-[13px] md:text-sm font-bold leading-tight text-white tracking-tight hidden xs:block">
            Start educating and converting <br /><span className="text-white/60">more users today.</span>
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <a 
            href="https://calendly.com/ayushvisions/30min" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-5 py-3 rounded-2xl font-black text-[11px] tracking-widest uppercase border border-white/10 hover:bg-white/5 transition-all"
          >
            BOOK A CALL
          </a>
          <a 
            href="https://discord.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-pink text-white px-6 py-3.5 rounded-[1.2rem] font-black text-xs md:text-sm hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-[0_4px_15px_rgba(242,169,235,0.3)] whitespace-nowrap uppercase"
          >
            MESSAGE ON DISCORD
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
