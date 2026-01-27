
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import SuccessEnd from './components/SuccessEnd';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-pink selection:text-brand-dark bg-brand-dark relative">
      <Navbar scrolled={scrolled} />
      
      {/* Global Persistent Side Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Left Side Orange Glow */}
        <div className="absolute top-1/2 left-[-15%] -translate-y-1/2 w-[50%] h-[70%] bg-brand-accent/15 blur-[180px] rounded-full animate-pulse-slow"></div>
        {/* Right Side Blue Glow */}
        <div className="absolute top-1/2 right-[-15%] -translate-y-1/2 w-[50%] h-[70%] bg-brand-blue/15 blur-[180px] rounded-full animate-pulse-slow delay-1000"></div>
        
        {/* Subtle Middle Pink Gradient for blending */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-brand-pink/5 blur-[150px] rounded-full"></div>
      </div>

      <main className="relative z-10 overflow-hidden">
        <Hero />
        <About />
        <Portfolio />
        <WhyUs />
        <Process />
        
        <GetStarted />
        
        <Testimonials />
        <FAQ />
        
        <SuccessEnd />
      </main>

      <Footer />
      <FloatingCTA />

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: translateY(-50%) scale(1); }
          50% { opacity: 1; transform: translateY(-52%) scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
