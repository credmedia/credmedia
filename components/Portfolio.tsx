
import React from 'react';

const verticalVideos = [
  { id: '0CCwOuHeOQE', title: 'Viral Strategy' },
  { id: 'biGJK6v9ew0', title: 'High-Conversion Edit' },
  { id: 'WmBOh60CsPo', title: 'Brand Storytelling' },
  { id: 'RmTEmdb18cI', title: 'Social Commerce' },
  { id: '0LBDGwjUTaM', title: 'Elite Production' },
  { id: 'UP7_Xdvlp1k', title: 'Dynamic Motion' }
];

// Corrected embed URLs for YouTube to ensure playback
const horizontalVideos = [
  { 
    url: 'https://player.vimeo.com/video/1146026375?h=2866e1e07c', 
    title: 'Visual Storytelling',
    type: 'vimeo'
  },
  { 
    url: 'https://player.vimeo.com/video/1104809218?h=b36739a0bd', 
    title: 'Brand Showcase',
    type: 'vimeo'
  },
  { 
    // Fixed: Converted from youtu.be/WVGZJP_464w to embed format with parameters
    url: 'https://www.youtube.com/embed/WVGZJP_464w?enablejsapi=1&origin=' + window.location.origin, 
    title: 'Content Strategy Mastery',
    type: 'youtube'
  },
  { 
    // Fixed: Added parameters for better embed compatibility
    url: 'https://www.youtube.com/embed/pQuk4Hdd84s?enablejsapi=1&origin=' + window.location.origin, 
    title: 'I Built A $6M App With Lovable',
    type: 'youtube'
  }
];

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
                  <div className="mt-4 flex items-center gap-2 opacity-0 group-hover/item:opacity-100 transition-opacity delay-100">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Watch Case Study</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Horizontal Grid - Large Box Size */}
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-black tracking-widest uppercase text-white/30 border-l-4 border-brand-blue pl-4 mb-12">LONG FORM EXPERT</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {horizontalVideos.map((video, idx) => (
            <div 
              key={idx} 
              className="group relative bg-[#0A0514] rounded-3xl overflow-hidden aspect-video border border-white/5 hover:border-brand-blue/40 transition-all duration-500 shadow-2xl scale-100"
            >
              <iframe 
                className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                src={video.url} 
                title={video.title}
                frameBorder="0"
                allow={video.type === 'vimeo' 
                  ? "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                }
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              
              <div className="absolute bottom-6 right-6 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity">
                 <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                   <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    {video.type === 'vimeo' ? (
                      <path d="M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.323 19.161 12.935 21 11.022 21c-1.181 0-2.18-.54-2.997-2.973-.545-2.206-1.09-4.412-1.635-6.618-.621-2.427-1.288-3.64-2.002-3.64-.155 0-.693.323-1.613.97L2 7.574c1.024-.897 2.037-1.79 3.039-2.68 1.365-1.144 2.396-1.748 3.093-1.812 1.636-.151 2.651.983 3.047 3.402.434 2.627.734 4.256.902 4.89.444 2.007.93 3.01 1.458 3.01.414 0 1.056-.647 1.926-1.94 1.157-1.742 1.765-3.056 1.822-3.942.094-1.353-.393-2.03-1.462-2.03-.507 0-1.033.118-1.579.352 1.04-3.4 3.033-5.068 5.978-5.011 2.167.042 3.197 1.488 3.09 4.337z"/>
                    ) : (
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    )}
                   </svg>
                   <span className="text-[11px] font-black tracking-tighter text-white uppercase">{video.type} Premium</span>
                 </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white font-black text-2xl tracking-tight">{video.title}</h4>
                <p className="text-white/50 text-sm font-bold uppercase tracking-widest mt-2">Full Production Suite</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="absolute top-1/2 left-[-10%] w-[30%] h-[50%] bg-brand-blue/10 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
};

export default Portfolio;
