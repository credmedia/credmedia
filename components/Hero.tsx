
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-44 pb-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          Get Your First <br />
          <span className="text-gradient">Video Edited Free</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 font-medium max-w-2xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
          We build your brand and manage your channel for <span className="text-brand-gold font-bold">$0 upfront</span>. If you don't make money, we don't get paid.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <a 
            href="#get-started" 
            className="w-full sm:w-auto bg-gradient-to-r from-brand-gold via-brand-pink to-brand-accent p-[2px] rounded-2xl group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] block"
          >
            <div className="bg-brand-dark px-10 py-5 rounded-[14px] font-black text-lg transition-colors group-hover:bg-transparent group-hover:text-brand-dark text-center">
              CLAIM FREE EDIT
            </div>
          </a>
          <a 
            href="https://discord.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all duration-300 text-center"
          >
            DISCORD COMMUNITY
          </a>
        </div>

        {/* Video Showcase Frame */}
        <div className="relative group animate-in zoom-in-95 duration-1000 delay-700">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-brand-pink to-brand-accent rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
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

      <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-gold opacity-10 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-blue opacity-10 blur-[120px] animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;
