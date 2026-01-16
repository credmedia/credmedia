
import React from 'react';

const About: React.FC = () => {
  const scrollToGetStarted = () => {
    const element = document.getElementById('get-started');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solution" className="py-24 px-6 bg-brand-dark/50">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 relative">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-transparent rounded-full blur-3xl"></div>
            <img 
              src="https://assets-global.website-files.com/65ba81a50d3c3786415cd151/65ba81a50d3c3786415cd21b_about-section-image.webp" 
              alt="Globe Asset"
              className="w-full h-full object-contain animate-float drop-shadow-[0_0_50px_rgba(242,169,235,0.2)]"
            />
          </div>
        </div>

        <div className="flex-1 space-y-8">
          <div className="space-y-6">
            {/* Partnership Offer Tagline - ENHANCED & CLICKABLE */}
            <div 
              onClick={scrollToGetStarted}
              className="inline-block group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700 relative"
            >
              {/* Animated Border Beam Effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]"></div>
              
              <div className="relative px-5 py-3 bg-white/5 border border-white/10 rounded-2xl flex flex-col md:flex-row md:items-center gap-2 md:gap-4 overflow-hidden transition-all duration-300 group-hover:bg-white/[0.08] group-hover:shadow-[0_0_30px_rgba(255,215,0,0.1)] group-hover:-translate-y-1 group-active:scale-95">
                {/* Background Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-center gap-2">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold whitespace-nowrap">Exclusive Offer</span>
                </div>
                
                <p className="text-xs md:text-sm font-bold text-white/90 leading-tight">
                  I will edit and manage your channel for free if revenue is over $500/month — 
                  <span className="text-brand-pink font-black ml-1 tracking-tight group-hover:text-white transition-colors duration-300">
                    STRESS FREE WORK
                  </span>
                </p>

                {/* Animated Arrow that appears on hover */}
                <div className="hidden md:flex items-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              What is <span className="text-gradient">CRED MEDIA?</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-accent to-brand-pink rounded-full"></div>
          </div>
          
          <div className="space-y-6 text-lg text-white/70 leading-relaxed font-medium">
            <p>
              CRED MEDIA is a creative agency with a proud team of 25 specialists. Our aim is to help business owners and content creators build an online presence without any resistance, so they can focus on what they love.
            </p>
            <p>
              Our team of video editors, script writers, content experts will help you make your content standout from the market and help you build an irreplaceable brand.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'TEAM MEMBERS', value: '8+' },
              { label: 'VIDEOS EDITED', value: '500+' },
              { label: 'CLIENT REVENUE GENERATED', value: '$100K+' },
              { label: 'CLIENT RETENTION RATE', value: '95%' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-brand-accent/30 transition-all duration-300 group">
                <div className="text-3xl font-black text-brand-accent group-hover:scale-105 transition-transform origin-left">{stat.value}</div>
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
