
import React, { useEffect, useState, useRef } from 'react';

const steps = [
  {
    title: 'Content Framework',
    desc: 'We start by sending you over 100+ unique content hooks and frameworks winning in your niche.',
    icon: '🌍',
    gradient: 'from-[#F48D2E]'
  },
  {
    title: 'Scripting',
    desc: 'Our seasoned scriptwriters craft tailored frameworks, ensuring your message resonates powerfully.',
    icon: '✍️',
    gradient: 'from-[#F2A9EB]'
  },
  {
    title: 'Shoot & Edit',
    desc: 'You shoot the raw footage, we transform it into high-engaging videos that catch attention.',
    icon: '🎥',
    gradient: 'from-[#4964EE]'
  },
  {
    title: 'Distribution',
    desc: 'Strategically distribute your content across IG, TikTok, LinkedIn and YouTube for max visibility.',
    icon: '🚀',
    gradient: 'from-[#00FF85]'
  }
];

const Process: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the section has passed the middle of the screen
      const start = rect.top - viewportHeight / 2;
      const progress = Math.max(0, Math.min(1, -start / (sectionHeight - viewportHeight / 2)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-32 px-6 relative bg-brand-dark">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Central Vertical Line (Background) */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2"></div>
          
          {/* Progress Line (Foreground) */}
          <div 
            className="absolute left-[24px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-brand-accent via-brand-pink to-brand-blue -translate-x-1/2 transition-all duration-300 ease-out z-0"
            style={{ height: `${scrollProgress * 100}%` }}
          >
            {/* Glowing Tip on the active progress stick */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_5px_#fff]"></div>
          </div>
          
          <div className="space-y-48">
            {steps.map((step, index) => {
              const stepThreshold = index / (steps.length - 1);
              const isActive = scrollProgress >= stepThreshold;

              return (
                <div 
                  key={step.title} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Content */}
                  <div className={`flex-1 w-full pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-20' : 'md:text-left md:pl-20'}`}>
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} to-transparent p-[1px] mb-6 shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-700 ${isActive ? 'scale-110' : 'grayscale opacity-50'}`}>
                      <div className="w-full h-full bg-[#0A0514] rounded-[15px] flex items-center justify-center text-2xl">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className={`text-2xl font-black tracking-tight mb-3 transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/30'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-base leading-relaxed font-medium max-w-sm transition-colors duration-500 ${isActive ? 'text-white/50' : 'text-white/20'} ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Central Node - No Numbers, Glow Effect */}
                  <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 z-10">
                    <div className={`relative w-8 h-8 rounded-full bg-[#0A0514] border-2 transition-all duration-700 ${
                      isActive 
                        ? 'border-brand-pink shadow-[0_0_20px_rgba(242,169,235,0.4)] scale-110' 
                        : 'border-white/10 scale-100'
                    }`}>
                      {/* Inner Glow Dot */}
                      <div className={`absolute inset-0 m-auto w-2 h-2 rounded-full transition-all duration-500 ${
                        isActive ? 'bg-brand-pink' : 'bg-white/5'
                      }`}></div>
                      
                      {/* Pulse effect for active node */}
                      {isActive && (
                        <div className="absolute -inset-1 rounded-full border border-brand-pink/50 animate-ping opacity-20"></div>
                      )}
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-pink/5 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
};

export default Process;
