
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-44 pb-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 flex flex-wrap justify-center items-center gap-x-[0.1em]">
          <span>Crafting C</span>
          <span className="relative inline-flex items-center justify-center w-[0.8em] h-[0.8em] mx-[-0.02em] align-middle">
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#4964EE] via-[#F2A9EB] to-[#F48D2E] animate-spin duration-[4000ms] linear opacity-90 shadow-[0_0_20px_rgba(242,169,235,0.5)]"></span>
            <span className="relative z-10 w-0 h-0 border-l-[0.15em] border-l-transparent border-r-[0.15em] border-r-transparent border-t-[0.22em] border-t-brand-dark mt-[0.05em]"></span>
          </span>
          <span>ntent</span>
          <br className="hidden md:block w-full" />
          <span className="w-full mt-2">That <span className="text-gradient">Makes You Money</span></span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 font-medium max-w-2xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
          Expert video craftsmanship that turns impressions into loyal audiences and real results.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <a 
            href="https://calendly.com/ayushvisions/30min" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-brand-accent via-brand-pink to-brand-blue p-[2px] rounded-2xl group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(242,169,235,0.3)] block"
          >
            <div className="bg-brand-dark px-10 py-5 rounded-[14px] font-black text-lg transition-colors group-hover:bg-transparent group-hover:text-brand-dark text-center">
              BOOK A CALL
            </div>
          </a>
          
          <a 
            href="https://discord.com/users/1263203451605745850" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto relative group/discord"
          >
            {/* Intensive Glow Layer */}
            <div className="absolute inset-0 bg-[#5865F2] rounded-2xl blur-2xl opacity-0 group-hover/discord:opacity-40 transition-all duration-500 scale-110"></div>
            <div className="relative w-full px-10 py-5 rounded-2xl bg-white/5 border border-white/10 font-bold text-white transition-all duration-300 text-center hover:bg-[#5865F2] hover:border-[#5865F2] hover:shadow-[0_0_40px_rgba(88,101,242,0.6)] hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
              MESSAGE ON DISCORD
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"/>
              </svg>
            </div>
          </a>
        </div>

        {/* Free Edit Tagline Badge */}
        <div className="flex justify-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500">
          <div className="relative group cursor-default">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent via-brand-pink to-brand-blue rounded-full blur-[4px] opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative px-6 py-2.5 bg-brand-dark/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              <span className="text-sm font-black uppercase tracking-[0.15em] text-white/90">
                We will edit your <span className="text-brand-accent">first video for free</span>
              </span>
            </div>
          </div>
        </div>

        {/* Video Showcase Frame */}
        <div className="relative group animate-in zoom-in-95 duration-1000 delay-700">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-accent rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-brand-dark rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl">
            <iframe 
              title="youtube-player" 
              src="https://www.youtube.com/embed/RWgTYbeYSP0?si=pX_9o9t3A-T5kR6m&autoplay=0&rel=0&modestbranding=1" 
              className="w-full h-full"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-accent opacity-10 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-blue opacity-10 blur-[120px] animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;
