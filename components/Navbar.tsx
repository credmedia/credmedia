
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const navLinks = [
    { name: 'Solution', href: 'solution' },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Process', href: 'process' },
    { name: 'Booking', href: 'get-started' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-8 py-6 ${
        scrolled ? 'mt-4' : 'mt-2'
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto rounded-[2rem] flex items-center justify-between px-10 py-5 transition-all duration-500 ${
          scrolled ? 'bg-brand-dark/85 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'bg-transparent'
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[15deg]">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_12px_rgba(242,169,235,0.5)]">
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F48D2E" />
                  <stop offset="50%" stopColor="#F2A9EB" />
                  <stop offset="100%" stopColor="#4964EE" />
                </linearGradient>
              </defs>
              <path 
                d="M20,20 L50,80 L80,20 M50,45 L35,20 M50,45 L65,20" 
                fill="none" 
                stroke="url(#logo-grad)" 
                strokeWidth="12" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute inset-0 bg-brand-pink/20 blur-2xl rounded-full scale-75 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span className="font-black text-3xl tracking-tighter uppercase transition-colors duration-300 group-hover:text-white">
            CRED<span className="text-brand-pink">MEDIA</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-10 text-lg font-bold text-white/70">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className="hover:text-white transition-colors duration-200 relative group tracking-tight"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-brand-pink transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="flex items-center gap-5">
          <a 
            href="https://discord.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:block bg-white/5 border border-white/10 px-6 py-3.5 rounded-2xl text-[12px] font-black tracking-widest hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            MESSAGE ON DISCORD
          </a>
          <a 
            href="#get-started"
            onClick={(e) => scrollToSection(e, 'get-started')}
            className="bg-brand-pink text-brand-dark px-8 py-3.5 rounded-2xl text-[13px] font-black hover:bg-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(242,169,235,0.3)]"
          >
            BOOK A CALL
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
