
import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
  const [activeSection, setActiveSection] = useState<'home' | 'solution' | 'portfolio' | 'process' | 'booking' | 'testimonials' | 'faq'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (window.scrollY < 250) {
        setActiveSection('home');
        return;
      }

      const sections = [
        { id: 'solution', key: 'solution' },
        { id: 'portfolio', key: 'portfolio' },
        { id: 'process', key: 'process' },
        { id: 'get-started', key: 'booking' },
        { id: 'testimonials', key: 'testimonials' },
        { id: 'faqs', key: 'faq' }
      ];

      const scrollPosition = window.scrollY + 350;
      let currentSection: any = 'home';

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section.key;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSEOMetadata = () => {
    switch (activeSection) {
      case 'solution':
        return {
          title: "Our Video Solutions | CRED MEDIA Agency",
          description: "Discover how CRED MEDIA builds brand credibility and trust through high-retention corporate storytelling, visual assets, and high-conversion assets."
        };
      case 'portfolio':
        return {
          title: "Our Premium Work Portfolio | CRED MEDIA",
          description: "Explore our recent high-end video design projects, corporate commercials, engaging podcasts, and short-form viral highlights."
        };
      case 'process':
        return {
          title: "Our Production Process | CRED MEDIA Agency",
          description: "From discovery call and premium copywriting to post-production and assets delivery—our simple, streamlined process guarantees top tier visuals."
        };
      case 'booking':
        return {
          title: "Book a Discovery Call | CRED MEDIA video design",
          description: "Ready to scale your business? Reserve a 30-minute high-end visual strategy consultation session with our expert design team."
        };
      case 'testimonials':
        return {
          title: "Client Testimonials & Stories | CRED MEDIA",
          description: "See why premium makers, brand builders, and established creators partner with Ethan and the CRED MEDIA group for authority content."
        };
      case 'faq':
        return {
          title: "Frequently Asked Questions | CRED MEDIA support",
          description: "Got questions about our video assets design timelines, revisions, source files, pricing, or contract options? Find answers here."
        };
      case 'home':
      default:
        return {
          title: "CRED MEDIA | Premium Video Design & Editing Agency for High-Growth Brands",
          description: "CRED MEDIA crafts premium video design, storytelling, and professional post-production that scale brands, build audience trust, and accelerate conversions."
        };
    }
  };

  const { title, description } = getSEOMetadata();
  const sectionHashFallback = activeSection !== 'home' ? `/#${activeSection === 'faq' ? 'faqs' : activeSection === 'booking' ? 'get-started' : activeSection}` : '';

  return (
    <HelmetProvider>
      <div className="min-h-screen selection:bg-brand-pink selection:text-brand-dark bg-gradient-to-b from-[#120826] via-[#0E061E] to-[#06030D] relative">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={`https://credmedia.in${sectionHashFallback}`} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={`https://credmedia.in${sectionHashFallback}`} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
        </Helmet>

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
    </HelmetProvider>
  );
};

export default App;
