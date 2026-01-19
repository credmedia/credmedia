
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
             <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-brand-dark"></div>
          </div>
          <p className="text-[13px] md:text-sm font-bold leading-tight text-white tracking-tight hidden xs:block">
            Scale your brand <br /><span className="text-white/60">with elite video systems.</span>
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
            href="https://discord.com/users/1263203451605745850" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group/discordc bg-[#5865F2] text-white px-6 py-3.5 rounded-[1.2rem] font-black text-xs md:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(88,101,242,0.3)] hover:shadow-[0_0_40px_rgba(88,101,242,0.7)] hover:scale-105 active:scale-95 whitespace-nowrap uppercase flex items-center gap-2"
          >
            <span>MESSAGE ON DISCORD</span>
            <div className="absolute inset-0 rounded-[1.2rem] bg-white opacity-0 group-hover/discordc:opacity-10 transition-opacity"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
