
import React from 'react';

const GetStarted: React.FC = () => {
  return (
    <section id="get-started" className="py-20 px-4 bg-brand-dark">
      {/* Reduced container max-width and vertical padding */}
      <div className="max-w-[1000px] mx-auto">
        {/* Matte Black Wide Rectangular Container with Brand Themed Glows */}
        <div className="relative group overflow-hidden bg-[#080808] border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:py-20 text-center shadow-[0_30px_80px_rgba(0,0,0,1)] transition-all duration-700 hover:border-brand-pink/20">
          
          {/* Brand Themed Technical Glows (Pink to Blue) */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none"></div>
          
          {/* Glow layers updated to brand-pink and brand-blue */}
          <div className="absolute -top-20 left-1/3 w-[30%] h-[30%] bg-brand-pink/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="absolute -bottom-20 right-1/3 w-[30%] h-[30%] bg-brand-blue/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          {/* Main Content Layout */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-[64px] font-black tracking-tight leading-[1.05] text-white max-w-[800px] mx-auto">
                Ready to scale your <br className="hidden md:block" /> 
                brand to <span className="italic font-serif bg-gradient-to-r from-brand-accent via-brand-pink to-brand-blue bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(242,169,235,0.3)] inline-block pb-1">new heights?</span>
              </h2>

              {/* 14-Day Money-Back Guarantee - Positioned Near Heading */}
              <div className="max-w-xl mx-auto">
                <div className="relative group/guarantee bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-brand-accent/40">
                  <div className="flex items-start gap-4 text-left">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-brand-accent fill-current" viewBox="0 0 24 24">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-white font-black text-base uppercase tracking-wider">14-Day Money-Back Guarantee</p>
                      <p className="text-white/60 text-xs md:text-sm font-medium leading-relaxed">
                        Not satisfied with our editing quality, communication, or turnaround within 14 days? Request a <span className="text-white font-bold">100% refund.</span>
                      </p>
                      <p className="text-brand-accent/60 text-[10px] font-black uppercase tracking-widest pt-1">
                        We guarantee quality — not platform performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-white/40 text-base md:text-xl font-semibold tracking-tight uppercase">
                Ready to discuss what actually needed
              </p>
            </div>

            {/* Action Buttons Group */}
            <div className="flex flex-col items-center gap-8 pt-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Primary Call Action - Brand Gradient (Orange to Blue) with Animated Border */}
                <a 
                  href="https://calendly.com/ayushvisions/30min" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block relative group/btn"
                >
                  {/* Subtle Border Beam Animation Container */}
                  <div className="absolute -inset-[2px] rounded-xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-accent via-brand-pink to-brand-blue animate-[spin_4s_linear_infinite] opacity-40 group-hover/btn:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-[2px] bg-brand-dark rounded-xl"></div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-brand-accent via-brand-pink to-brand-blue rounded-xl blur-lg opacity-10 group-hover/btn:opacity-40 transition-all duration-500"></div>
                  
                  <div className="relative bg-gradient-to-r from-brand-accent via-brand-pink to-brand-blue text-[#05010D] px-10 py-4 rounded-xl font-black text-base tracking-tight hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-[0_10px_30px_rgba(242,169,235,0.2)] flex items-center gap-3">
                    <span>Book a call</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>

                {/* Secondary Discord Action */}
                <a 
                  href="https://discord.com/users/1263203451605745850" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group/discord"
                >
                  <div className="absolute inset-0 bg-[#5865F2] rounded-xl blur-2xl opacity-0 group-hover/discord:opacity-30 transition-all duration-500 scale-110"></div>
                  
                  <div className="relative bg-white/[0.03] border border-white/5 text-white px-8 py-4 rounded-xl font-black text-base tracking-tight transition-all duration-300 flex items-center gap-3 hover:bg-[#5865F2] hover:border-[#5865F2] hover:shadow-[0_0_40px_rgba(88,101,242,0.5)] hover:scale-105 active:scale-95">
                    <span className="transition-colors">Message on Discord</span>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="absolute top-6 left-6 md:top-8 md:left-8 w-16 h-16 border-t border-l border-white/5 rounded-tl-[1.5rem] pointer-events-none group-hover:border-brand-pink/10 transition-colors duration-1000"></div>
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-16 h-16 border-b border-r border-white/5 rounded-br-[1.5rem] pointer-events-none group-hover:border-brand-pink/10 transition-colors duration-1000"></div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-3 bg-white/[0.01] border border-white/5 rounded-full backdrop-blur-sm">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border border-brand-dark bg-white/10 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?u=v${i}`} alt="user" className="w-full h-full object-cover grayscale" />
                </div>
              ))}
            </div>
            <p className="text-white/20 text-[8px] font-black uppercase tracking-[0.5em]">
              Trusted by <span className="text-brand-pink/60">50+</span> Global Partners
            </p>
          </div>
        </div>
      </div>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900&display=swap');
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </section>
  );
};

export default GetStarted;
