
import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ChatBot from './components/ChatBot';

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
    <div className="min-h-screen selection:bg-brand-pink selection:text-brand-dark">
      <Navbar scrolled={scrolled} />
      
      <main className="relative overflow-hidden">
        {/* Background Gradients */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-blue opacity-[0.05] blur-[150px] rounded-full" />
          <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-brand-pink opacity-[0.05] blur-[120px] rounded-full" />
        </div>

        <Hero />
        <About />
        <Portfolio />
        <WhyUs />
        <Process />
        
        {/* Placeholder for missing sections to ensure links work */}
        <div id="testimonials" className="scroll-mt-32"></div>
        <div id="faqs" className="scroll-mt-32"></div>
        
        <GetStarted />
      </main>

      <Footer />
      <FloatingCTA />
      <ChatBot />
    </div>
  );
};

export default App;
