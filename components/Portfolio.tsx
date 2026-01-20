
import React from 'react';

const verticalVideos = [
  { id: 'LwMn2XmdRbg', title: 'Viral Strategy' },
  { id: '5niHPSTvSxY', title: 'High-Conversion Edit' },
  { id: 'hprOw902GuM', title: 'Brand Storytelling' },
  { id: '5niHPSTvSxY', title: 'Social Commerce' },
  { id: 'ZogS2Xyin_8', title: 'Elite Production' },
  { id: '4kHYSegwA78', title: 'Dynamic Motion' }
];

const horizontalVideos = [
  { 
    url: 'https://www.youtube.com/embed/8ahN_fRwKKw?enablejsapi=1&origin=' + window.location.origin, 
    title: 'Visual Storytelling',
    type: 'youtube'
  },
  { 
    url: 'https://www.youtube.com/embed/Scso9MHDpNk?enablejsapi=1&origin=' + window.location.origin, 
    title: 'Brand Showcase',
    type: 'youtube'
  },
  { 
    url: 'https://www.youtube.com/embed/XiKs4J2u5Ok?enablejsapi=1&origin=' + window.location.origin, 
    title: 'KIM STARK',
    type: 'youtube'
  },
  { 
    url: 'https://www.youtube.com/embed/WVGZJP_464w?enablejsapi=1&origin=' + window.location.origin, 
    title: 'Content Strategy Mastery',
    type: 'youtube'
  },
  { 
    url: 'https://www.youtube.com/embed/pQuk4Hdd84s?enablejsapi=1&origin=' + window.location.origin, 
    title: 'I Built A $6M App With Lovable',
    type: 'youtube'
  },
  { 
    url: 'https://www.youtube.com/embed/5p3VFGnMClg?si=XvDiOc4fcy4mOp7l&enablejsapi=1&origin=' + window.location.origin, 
    title: 'Product Design Deep Dive',
    type: 'youtube'
  }
];

// Split the horizontal videos into two rows for the two-line marquee layout
const row1Videos = horizontalVideos.slice(0, 3);
const row2Videos = horizontalVideos.slice(3, 6);

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            Our <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-white/50 font-bold max-w-md uppercase tracking-widest text-sm mx-auto">
            RECENT WORKS THAT DELIVERED RESULTS
          </p>
        </div>
      </div>

      {/* 1. Vertical/Portrait Scrolling Marquee */}
      <div className="mb-32">
        <div className="max-w-7xl mx-auto px-6 mb-8">
           <h3 className="text-xl font-black tracking-widest uppercase text-white/30 border-l-4 border-brand-pink pl-4">Short Form Mastery</h3>
        </div>
        <div className="relative flex overflow-hidden group">
          <div className="flex animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] gap-6 px-3">
            {[...verticalVideos, ...verticalVideos].map((video, index) => (
              <div 
                key={`${video.id}-${index}`} 
                className="relative flex-shrink-0 w-[280px] md:w-[320px] aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 group/item card-hover"
              >
                <iframe 
                  className="w-full h-full object-cover scale-[1.02]"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=0&mute=1&controls=0&loop=1&playlist=${video.id}&modestbranding=1&enablejsapi=1`} 
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60 group-hover/item:opacity-90 transition-opacity"></div>
                
                <div className="absolute bottom-8 left-8 right-8 transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500">
                  <span className="text-brand-pink text-[10px] font-black uppercase tracking-widest mb-2 block">High Conversion</span>
                  <h3 className="text-white text-xl font-black tracking-tight">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Horizontal Scrolling Marquee (Long Form) - TWO LINES */}
      <div className="mb-24">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <h3 className="text-xl font-black tracking-widest uppercase text-white/30 border-l-4 border-brand-blue pl-4">LONG FORM EXPERT</h3>
        </div>
        
        <div className="flex flex-col gap-8">
          {/* Row 1 - Left to Right */}
          <div className="relative flex overflow-hidden group">
            <div className="flex animate-[marquee_50s_linear_infinite] group-hover:[animation-play-state:paused] gap-8 px-4">
              {[...row1Videos, ...row1Videos].map((video, idx) => (
                <div 
                  key={`r1-${idx}`} 
                  className="group relative flex-shrink-0 w-[500px] md:w-[650px] bg-[#0A0514] rounded-3xl overflow-hidden aspect-video border border-white/5 hover:border-brand-blue/40 transition-all duration-500 shadow-2xl card-hover"
                >
                  <iframe 
                    className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                    src={video.url} 
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  
                  <div className="absolute bottom-6 right-6 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <span className="text-[11px] font-black tracking-tighter text-white uppercase">Premium Content</span>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-white font-black text-2xl tracking-tight">{video.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="relative flex overflow-hidden group">
            <div className="flex animate-[marquee-reverse_50s_linear_infinite] group-hover:[animation-play-state:paused] gap-8 px-4">
              {[...row2Videos, ...row2Videos].map((video, idx) => (
                <div 
                  key={`r2-${idx}`} 
                  className="group relative flex-shrink-0 w-[500px] md:w-[650px] bg-[#0A0514] rounded-3xl overflow-hidden aspect-video border border-white/5 hover:border-brand-blue/40 transition-all duration-500 shadow-2xl card-hover"
                >
                  <iframe 
                    className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                    src={video.url} 
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  
                  <div className="absolute bottom-6 right-6 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <span className="text-[11px] font-black tracking-tighter text-white uppercase">Expert Editing</span>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-white font-black text-2xl tracking-tight">{video.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="absolute top-1/2 left-[-10%] w-[30%] h-[50%] bg-brand-blue/10 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
};

export default Portfolio;
