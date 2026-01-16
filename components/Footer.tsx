
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [activeLegal, setActiveLegal] = useState<string | null>(null);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLegal = (e: React.MouseEvent, type: string) => {
    e.preventDefault();
    setActiveLegal(type);
    document.body.style.overflow = 'hidden';
  };

  const closeLegal = () => {
    setActiveLegal(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-brand-dark relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F48D2E" />
                    <stop offset="50%" stopColor="#F2A9EB" />
                    <stop offset="100%" stopColor="#4964EE" />
                  </linearGradient>
                </defs>
                <path 
                  d="M20,20 L50,80 L80,20 M50,45 L35,20 M50,45 L65,20" 
                  fill="none" 
                  stroke="url(#footer-logo-grad)" 
                  strokeWidth="12" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-bold text-2xl tracking-tighter uppercase cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              CRED<span className="text-brand-pink">MEDIA</span>
            </span>
          </div>
          <p className="text-white/40 font-medium leading-relaxed max-sm">
            Discover the power of exceptional video storytelling with us. Elevating brands from impressions to deep impact through precision craftsmanship.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map(social => (
              <a key={social} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all duration-300">
                <span className="sr-only">{social}</span>
                <div className="text-sm font-black">{social[0]}</div>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-black text-sm uppercase tracking-widest text-white/20 mb-6">Explore</h4>
          <ul className="space-y-4 font-bold text-white/60">
            <li><a href="#solution" onClick={(e) => scrollToSection(e, 'solution')} className="hover:text-brand-pink transition-colors cursor-pointer">Solutions</a></li>
            <li><a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="hover:text-brand-pink transition-colors cursor-pointer">Portfolio</a></li>
            <li><a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="hover:text-brand-pink transition-colors cursor-pointer">Our Process</a></li>
            <li><a href="#get-started" onClick={(e) => scrollToSection(e, 'get-started')} className="hover:text-brand-pink transition-colors cursor-pointer">Pricing & Booking</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-sm uppercase tracking-widest text-white/20 mb-6">Legal</h4>
          <ul className="space-y-4 font-bold text-white/60">
            <li><a href="#" onClick={(e) => openLegal(e, 'Terms of Service')} className="hover:text-brand-pink transition-colors cursor-pointer block">Terms of Service</a></li>
            <li><a href="#" onClick={(e) => openLegal(e, 'Privacy Policy')} className="hover:text-brand-pink transition-colors cursor-pointer block">Privacy Policy</a></li>
            <li><a href="#" onClick={(e) => openLegal(e, 'Cookies')} className="hover:text-brand-pink transition-colors cursor-pointer block">Cookies</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-white/20 text-xs font-black uppercase tracking-widest">
        <div>© 2024 CRED MEDIA Agency. All Rights Reserved.</div>
        <div className="flex items-center gap-2">
          Design by <span className="text-white/60">CRED MEDIA Studio</span>
        </div>
      </div>

      {/* Legal Modal Overlay */}
      {activeLegal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-dark/80 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl bg-brand-dark border border-white/10 rounded-[2.5rem] p-10 shadow-[0_0_100px_rgba(242,169,235,0.15)] max-h-[80vh] overflow-y-auto no-scrollbar">
            <button 
              onClick={closeLegal}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-3xl font-black tracking-tighter mb-8 text-gradient">{activeLegal}</h2>
            
            <div className="space-y-6 text-white/60 font-medium leading-relaxed">
              <p>Last updated: June 2024</p>
              <p>
                Welcome to CRED MEDIA. By accessing our services, you agree to follow the standards of excellence we maintain for our clients and partners.
              </p>
              <h3 className="text-white font-bold text-xl">1. Our Commitment</h3>
              <p>
                At CRED MEDIA, we prioritize high-conversion storytelling and absolute brand integrity. All content produced is subject to our rigorous quality control processes.
              </p>
              <h3 className="text-white font-bold text-xl">2. Service Usage</h3>
              <p>
                Our "Stress-Free" partnership model is designed for established creators. Eligibility for revenue-based free management is determined upon initial audit.
              </p>
              <p>
                This is a placeholder for the full {activeLegal.toLowerCase()} documentation. For actual legal inquiries, please reach out to us via our primary contact channels.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <button 
                onClick={closeLegal}
                className="w-full bg-white/5 border border-white/10 py-4 rounded-2xl font-black tracking-widest hover:bg-white hover:text-brand-dark transition-all"
              >
                CLOSE DOCUMENT
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
