
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="solution" className="py-24 px-6 bg-brand-dark/50 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Smooth Rotating Dotted Globe */}
        <div className="flex-1 relative flex justify-center items-center">
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            
            {/* Soft Ambient Glows behind the globe */}
            <div className="absolute inset-0 rounded-full bg-brand-pink/10 blur-[100px] animate-pulse"></div>
            
            {/* The Globe Container */}
            <div className="relative w-full h-full rounded-full border border-white/5 bg-brand-dark/40 flex items-center justify-center overflow-hidden shadow-[inset_0_0_80px_rgba(242,169,235,0.05)]">
              
              {/* Dotted Globe with Smooth Continuous Rotation */}
              <div className="absolute inset-0 opacity-60 mix-blend-screen animate-[spin-slow_30s_linear_infinite]">
                <svg viewBox="0 0 200 200" className="w-full h-full stroke-brand-pink/40 fill-none" style={{ filter: 'drop-shadow(0 0 2px rgba(242,169,235,0.3))' }}>
                  <defs>
                    <radialGradient id="sphereGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                    </radialGradient>
                  </defs>
                  
                  {[20, 40, 60, 80, 100, 120, 140, 160, 180].map((y, i) => {
                    const radius = Math.sqrt(Math.pow(80, 2) - Math.pow(y - 100, 2)) || 0;
                    return radius > 0 ? (
                      <ellipse 
                        key={`lat-${i}`} 
                        cx="100" cy={y} 
                        rx={radius} ry={radius * 0.25} 
                        strokeDasharray="1 6" 
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    ) : null;
                  })}
                  
                  {[0, 30, 60, 90, 120, 150].map((angle, i) => (
                    <ellipse 
                      key={`long-${i}`} 
                      cx="100" cy="100" 
                      rx={80 * Math.cos(angle * Math.PI / 180)} ry="80" 
                      strokeDasharray="1 8" 
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  ))}
                </svg>
              </div>

              <div className="relative z-20 w-24 h-24 bg-[#121212]/90 backdrop-blur-2xl border border-white/10 rounded-3xl flex items-center justify-center shadow-[0_0_60px_rgba(0,0,0,0.8),0_0_20px_rgba(242,169,235,0.2)] animate-float">
                <svg className="w-12 h-12 text-brand-pink drop-shadow-[0_0_8px_rgba(242,169,235,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.691.419 3.285 1.157 4.685L2.05 21.114a.75.75 0 00.936.936l4.429-1.107A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.554 0-3.013-.434-4.263-1.187a.75.75 0 00-.638-.06l-3.02.755.755-3.02a.75.75 0 00-.06-.638A8.455 8.455 0 013.5 12c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5z"/>
                </svg>
              </div>

              <div className="absolute inset-0 z-10">
                <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
                  <g className="opacity-80">
                    <path d="M180,120 Q220,50 250,250" stroke="#F48D2E" strokeWidth="2" fill="none" strokeDasharray="200" strokeDashoffset="200" className="animate-[dash_3s_ease-in-out_infinite_alternate]" />
                    <circle cx="180" cy="120" r="4" fill="#F48D2E" className="animate-pulse" />
                    <path d="M160,180 Q200,150 250,250" stroke="#F2A9EB" strokeWidth="2" fill="none" strokeDasharray="200" strokeDashoffset="200" className="animate-[dash_4s_ease-in-out_infinite_alternate_1s]" />
                    <circle cx="160" cy="180" r="4" fill="#F2A9EB" className="animate-pulse" />
                    <path d="M100,250 Q180,260 250,250" stroke="#4964EE" strokeWidth="2" fill="none" strokeDasharray="200" strokeDashoffset="200" className="animate-[dash_5s_ease-in-out_infinite_alternate]" />
                    <circle cx="100" cy="250" r="4" fill="#4964EE" className="animate-pulse" />
                    <path d="M330,130 Q300,180 250,250" stroke="#00FF85" strokeWidth="2" fill="none" strokeDasharray="200" strokeDashoffset="200" className="animate-[dash_3s_ease-in-out_infinite_alternate_0.5s]" />
                    <circle cx="330" cy="130" r="4" fill="#00FF85" className="animate-pulse" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-6">
            <div className="relative group max-w-xl">
              <div className="absolute -inset-[2px] bg-gradient-to-r from-brand-accent to-brand-pink rounded-[1.25rem] blur-[8px] opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative flex items-center gap-4 bg-[#0A0A0A] border border-brand-accent/30 rounded-[1.25rem] p-5 shadow-2xl">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-2.5 h-6 bg-brand-accent rounded-full mb-2 animate-pulse"></div>
                  <span className="text-[14px] font-black uppercase tracking-[0.15em] text-brand-accent whitespace-nowrap leading-none">
                    EXCLUSIVE<br/>OFFER
                  </span>
                </div>
                <div className="w-[1px] h-12 bg-white/10 mx-2 hidden sm:block"></div>
                <p className="text-sm md:text-base font-bold text-white/95 leading-tight tracking-tight">
                  I will edit and manage your channel for free if revenue is over <span className="text-brand-accent">$500/month</span> — <span className="text-brand-pink underline decoration-2 underline-offset-4 font-black">STRESS FREE WORK</span>
                </p>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              What is <span className="text-gradient">CRED MEDIA?</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-accent to-brand-pink rounded-full"></div>
          </div>
          
          <div className="space-y-6 text-lg text-white/70 leading-relaxed font-medium">
            <p>
              CRED MEDIA is a creative agency with a proud team of 8 specialists. Our aim is to help business owners and content creators build an online presence without any resistance, so they can focus on what they love.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Team Members', value: '8+' },
              { label: 'Videos Edited', value: '500+' },
              { label: 'Client Revenue Generated', value: '$100K+' },
              { label: 'Client Retention Rate', value: '80%+' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-brand-pink/30 transition-all duration-300 group">
                <div className="text-3xl font-black text-white group-hover:text-brand-pink transition-colors">{stat.value}</div>
                <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mt-2 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
