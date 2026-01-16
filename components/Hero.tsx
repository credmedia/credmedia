
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
            href="https://discord.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all duration-300 text-center"
          >
            MESSAGE ON DISCORD
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
              title="vimeo-player" 
              src="https://player.vimeo.com/video/1108597453?h=e67e73cd85" 
              className="w-full h-full"
              frameBorder="0" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
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
