import React from 'react';
import { 
  ExternalLink,
  Sparkles,
  Share2
} from 'lucide-react';

const GetStarted: React.FC = () => {
  return (
    <section id="get-started" className="py-24 px-4 relative bg-transparent">
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink text-xs font-black uppercase tracking-[0.2em] inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Launch Program
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-none">
            Ready to scale your <span className="text-gradient">Brand Authority?</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto font-medium">
            Contact us below to see how we build high-retention luxury assets. Let's make your content become the obvious choice in your market.
          </p>
        </div>

        {/* Premium Centered CTA Card */}
        <div className="bg-glass border border-white/5 p-8 md:p-12 rounded-[2rem] relative overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-[60px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-pink/5 blur-[60px] rounded-full pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side: Premium Benefits */}
            <div className="space-y-6 text-left">
              <h3 className="text-lg md:text-xl font-black text-white tracking-tight uppercase">Why Partner with CRED</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-brand-pink"></div>
                  </div>
                  <span className="text-white/80 text-xs md:text-sm font-semibold">1-on-1 private Slack channel workflow.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                  </div>
                  <span className="text-white/80 text-xs md:text-sm font-semibold">24-hour delivery on initial drafting previews.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                  </div>
                  <span className="text-white/80 text-xs md:text-sm font-semibold">A dedicated creative strategist for your brand.</span>
                </div>
              </div>
            </div>

            {/* Right side: Quick Direct Bookings */}
            <div className="space-y-4 bg-white/[0.01] border border-white/5 p-6 rounded-2xl text-left">
              <p className="text-white/60 text-xs font-semibold leading-relaxed">
                Ready to lock in a slot? Book a strategic discovery call directly with our team or start a direct message on Discord.
              </p>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://calendly.com/ayushvisions/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 bg-gradient-to-r from-brand-accent to-brand-pink text-brand-dark rounded-xl text-center text-xs font-black tracking-tight hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  Book 30-Min Call <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://discord.com/users/1263203451605745850" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 bg-glass border border-white/10 hover:border-white/20 text-white rounded-xl text-center text-xs font-black hover:bg-white/5 transition duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  Discord Chat <Share2 className="w-3.5 h-3.5 text-[#5865F2]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Small Trust footer logos under dual column */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-3.5 bg-white/[0.01] border border-white/5 rounded-full backdrop-blur-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border border-brand-dark bg-white/10 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=q${i}`} alt="user" className="w-full h-full object-cover grayscale" />
                </div>
              ))}
            </div>
            <p className="text-white/30 text-[8px] font-black uppercase tracking-[0.5em] flex items-center gap-2">
              <span>Trusted by</span>
              <span className="px-1.5 py-0.5 bg-brand-accent text-brand-dark rounded-sm font-black">25+</span>
              <span>Global Creator Brands</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
