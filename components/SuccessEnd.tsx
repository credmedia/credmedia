
import React, { useEffect, useState, useRef } from 'react';

const SuccessEnd: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="py-40 bg-brand-dark overflow-hidden relative flex flex-col items-center justify-center">
      {/* Background Triple Glow Effect - Matching the image gradient feel */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-4xl h-64 flex justify-center">
          {/* Left Orange/Red Glow */}
          <div className="absolute left-[15%] md:left-[25%] w-[40%] h-full bg-[#F48D2E]/20 blur-[120px] rounded-full animate-pulse"></div>
          {/* Center Purple/Magenta Glow */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[40%] h-full bg-[#F2A9EB]/20 blur-[100px] rounded-full animate-pulse delay-500"></div>
          {/* Right Blue Glow */}
          <div className="absolute right-[15%] md:right-[25%] w-[40%] h-full bg-[#4964EE]/20 blur-[120px] rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className={`relative z-10 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        {/* Floating Fine Particles */}
        {isVisible && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-[2px] h-[2px] rounded-full bg-white/60 animate-twinkle"
                style={{
                  left: `${Math.random() * 140 - 20}%`,
                  top: `${Math.random() * 140 - 20}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        )}

        {/* Main Logo Branding - Updated to Logo Colors */}
        <div className="mb-4 relative group">
          <h2 className="text-6xl md:text-8xl font-serif italic bg-gradient-to-r from-[#F48D2E] via-[#F2A9EB] to-[#4964EE] bg-clip-text text-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-1000 tracking-tight select-none">
            Cred Media
          </h2>
          {/* Subtle reflection/glow under text */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-gradient-to-r from-transparent via-brand-pink/10 to-transparent blur-md"></div>
        </div>
        
        {/* Tagline */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-10 px-6">
          <span className="text-xl md:text-2xl font-black tracking-[0.4em] uppercase text-white/40">
            THE STANDARD OF
          </span>
          <span className="text-xl md:text-2xl font-black tracking-[0.4em] uppercase text-brand-pink drop-shadow-[0_0_15px_rgba(242,169,235,0.4)]">
            EXCELLENCE
          </span>
        </div>
        
        {/* Minimalist Divider */}
        <div className="flex justify-center items-center gap-6 opacity-30 mt-12">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="w-2 h-2 rounded-full border border-white/80 flex items-center justify-center">
            <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
          </div>
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8) translateY(0); }
          50% { opacity: 0.8; transform: scale(1.2) translateY(-10px); }
        }

        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SuccessEnd;
