
import React, { useEffect, useRef } from 'react';

const verticalVideos = [
  { id: 'LwMn2XmdRbg', title: 'Viral Strategy' },
  { id: '5niHPSTvSxY', title: 'High-Conversion Edit' },
  { id: 'hprOw902GuM', title: 'Brand Storytelling' },
  { id: 'ZogS2Xyin_8', title: 'Elite Production' },
  { id: '4kHYSegwA78', title: 'Dynamic Motion' }
];

const Logos = [
  // 1. SharkAlgo
  () => (
    <div className="flex items-center justify-center shrink-0">
      <div className="flex items-center gap-3.5 text-white/80 hover:text-white transition-colors duration-300">
        <svg className="h-11 w-auto fill-current" viewBox="0 0 32 32">
          <path d="M6 6l10 8L6 22V6zm10 0l10 8-10 8V6z" />
        </svg>
        <span className="text-lg md:text-xl font-black tracking-tight uppercase">SharkAlgo</span>
      </div>
    </div>
  ),
  // 2. HTC
  () => (
    <div className="flex items-center justify-center shrink-0">
      <div className="flex items-center gap-3.5 text-white/80 hover:text-white transition-colors duration-300">
        <svg className="h-11 w-11 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8M12 8v8" />
        </svg>
        <span className="text-base md:text-lg font-black tracking-widest uppercase">HTC</span>
      </div>
    </div>
  ),
  // 3. Stylized Loop / Infinity
  () => (
    <div className="flex items-center justify-center shrink-0">
      <svg className="h-10 w-auto text-white/80 hover:text-white transition-colors duration-300 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 100 40">
        <path d="M30 20c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm20 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z" />
      </svg>
    </div>
  ),
  // 4. TA THE ARCHOS
  () => (
    <div className="flex items-center justify-center shrink-0">
      <div className="flex items-center gap-3.5 text-white/80 hover:text-white transition-colors duration-300">
        <svg className="h-9 w-auto fill-current" viewBox="0 0 120 30">
          <path d="M10 5h22v4H21v16h-5V9H10V5zm16 20l6-18h4l6 18h-4.5l-1.2-4.5h-5.6l-1.2 4.5H26zm6.8-8.5h3.6L34.5 8l-1.7 8.5z" />
          <text x="50" y="21" className="font-sans font-black tracking-[0.2em] text-[11px] fill-current">THE ARCHOS</text>
        </svg>
      </div>
    </div>
  ),
  // 5. KYRUS AGENCY
  () => (
    <div className="flex items-center justify-center shrink-0">
      <div className="flex items-center gap-3.5 text-white/80 hover:text-white transition-colors duration-300">
        <svg className="h-10 w-auto fill-current" viewBox="0 0 32 32">
          <rect x="4" y="4" width="5" height="24" rx="1" />
          <path d="M12 16l9-10h-6l-9 8v4z" />
          <path d="M12 16l10 12h-6l-10-10v-2z" />
        </svg>
        <div className="flex flex-col items-start leading-none">
          <span className="text-sm md:text-base font-black tracking-wider">KYRUS</span>
          <span className="text-[8px] md:text-[9px] font-bold tracking-[0.25em] opacity-60">AGENCY</span>
        </div>
      </div>
    </div>
  ),
  // 6. ClipLaunch
  () => (
    <div className="flex items-center justify-center shrink-0">
      <div className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors duration-300">
        <span className="text-base md:text-lg font-black tracking-tight">ClipLaunch</span>
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 2s.5 3 2.5 5 5 2.5 5 2.5-3 .5-5 2.5-2.5 5-2.5 5-.5-3-2.5-5-5-2.5-5-2.5 3-.5 5-2.5 2.5-5 2.5-5z" />
        </svg>
      </div>
    </div>
  ),
  // 7. SERVICE VAULT
  () => (
    <div className="flex items-center justify-center shrink-0 text-white/80 hover:text-white transition-colors duration-300">
      <div className="flex flex-col items-start leading-none italic font-black">
        <span className="text-xs tracking-wider">SERVICE</span>
        <span className="text-sm md:text-base tracking-widest ml-1.5 opacity-80">VAULT</span>
      </div>
    </div>
  ),
  // 8. THE CLARUS COMPANY
  () => (
    <div className="flex items-center justify-center shrink-0 text-white/80 hover:text-white transition-colors duration-300">
      <div className="flex items-center justify-center p-2 border border-current w-14 h-14">
        <div className="text-center flex flex-col justify-center leading-[0.8] h-full">
          <span className="text-[6px] font-bold tracking-[0.1em] opacity-60">THE</span>
          <span className="text-[9px] font-black tracking-[0.15em] my-0.5">CLARUS</span>
          <span className="text-[5px] font-medium tracking-[0.05em] opacity-60">COMPANY</span>
        </div>
      </div>
    </div>
  )
];

const YouTubePlayer: React.FC<{ videoId: string; title: string }> = ({ videoId, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Inject YouTube Iframe Player API script if it's not present yet
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
    }

    let checkInterval: any;
    let player: any;

    const initPlayer = () => {
      const YT = (window as any).YT;
      if (!YT || !YT.Player || !containerRef.current) return;

      // Clean up previous interval if running
      if (checkInterval) clearInterval(checkInterval);

      const uniqueId = `yt-player-${videoId}-${Math.random().toString(36).substring(2, 9)}`;
      const placeholder = document.createElement('div');
      placeholder.id = uniqueId;
      placeholder.style.width = '100%';
      placeholder.style.height = '100%';
      containerRef.current.appendChild(placeholder);

      player = new YT.Player(uniqueId, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          playsinline: 1,
          controls: 0,
          loop: 1,
          playlist: videoId,
          modestbranding: 1,
          cc_load_policy: 0,
          iv_load_policy: 3,
          rel: 0,
        },
        events: {
          onReady: (event: any) => {
            event.target.mute();
            event.target.playVideo();
            // Programmatically disable/unload closed captions and subtitles
            try {
              event.target.unloadModule('captions');
              event.target.unloadModule('cc');
            } catch (e) {
              console.warn('Captions module unload not supported or already removed:', e);
            }
          },
          onStateChange: (event: any) => {
            if (event.data === (window as any).YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
            // Consistently keep captions off across state changes
            try {
              event.target.unloadModule('captions');
              event.target.unloadModule('cc');
            } catch (e) {}
          },
        },
      });

      playerRef.current = player;
    };

    const YT = (window as any).YT;
    if (YT && YT.Player) {
      initPlayer();
    } else {
      // Poll periodically to check if YT global became available
      checkInterval = setInterval(() => {
        const currentYT = (window as any).YT;
        if (currentYT && currentYT.Player) {
          clearInterval(checkInterval);
          initPlayer();
        }
      }, 100);

      const previousReady = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        if (previousReady) previousReady();
        const currentYT = (window as any).YT;
        if (currentYT && currentYT.Player) {
          initPlayer();
        }
      };
    }

    return () => {
      if (checkInterval) clearInterval(checkInterval);
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch (e) {}
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [videoId]);

  return (
    <div ref={containerRef} className="w-full h-full object-cover scale-[1.02] pointer-events-none" />
  );
};

const Hero: React.FC = () => {
  return (
    <section className="pt-44 pb-12 px-6 relative overflow-hidden bg-transparent">
      
      {/* Deep Violet Ambient Glow on top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-96 bg-brand-pink/5 blur-[120px] rounded-full pointer-events-none"></div>

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

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
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
            href="https://discord.com/users/1263203451605745850" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto relative group/discord"
          >
            <div className="absolute inset-0 bg-[#5865F2] rounded-2xl blur-2xl opacity-0 group-hover/discord:opacity-40 transition-all duration-500 scale-110"></div>
            <div className="relative w-full px-10 py-5 rounded-2xl bg-white/5 border border-white/10 font-bold text-white transition-all duration-300 text-center hover:bg-[#5865F2] hover:border-[#5865F2] hover:shadow-[0_0_40px_rgba(88,101,242,0.6)] hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
              MESSAGE ON DISCORD
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"/>
              </svg>
            </div>
          </a>
        </div>

      </div>

      {/* Dynamic Vertical/Short Form Scrolling Marquee */}
      <div className="mt-12 relative z-10 w-full overflow-hidden animate-in zoom-in-95 duration-1000 delay-500">
        <div className="relative flex overflow-hidden group">
          <div className="flex animate-[marquee_36s_linear_infinite] group-hover:[animation-play-state:paused] gap-6 px-3">
            {[...verticalVideos, ...verticalVideos].map((video, index) => (
              <div 
                key={`${video.id}-${index}`} 
                className="relative flex-shrink-0 w-[240px] md:w-[280px] aspect-[9/16] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 group/item transition-all duration-300 hover:border-brand-pink/50 hover:shadow-[0_0_30px_rgba(242,169,235,0.15)]"
              >
                <YouTubePlayer videoId={video.id} title={video.title} />
                
                {/* Clickable Overlay Link to open YouTube Shorts video in new tab */}
                <a 
                  href={`https://youtube.com/shorts/${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 bg-gradient-to-t from-brand-dark/95 via-brand-dark/30 to-transparent opacity-70 group-hover/item:opacity-95 transition-all duration-300 flex flex-col justify-end p-6 text-left cursor-pointer"
                >
                  <span className="text-brand-pink text-[9px] font-black uppercase tracking-widest mb-1 block">High Conversion</span>
                  <h3 className="text-white text-base font-black tracking-tight mb-2">{video.title}</h3>
                  <div className="text-[10px] text-brand-pink font-black uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover/item:opacity-100 transform translate-y-2 group-hover/item:translate-y-0 transition-all duration-300">
                    Watch Short ↗
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Scrolling Brand Logo Marquee - Directly Below Shorts */}
      <div className="mt-24 w-full py-12 relative overflow-hidden z-10 bg-transparent">
        {/* Left and Right blur fading effects inside the transparent container */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#120826] via-[#120826]/75 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#120826] via-[#120826]/75 to-transparent z-20 pointer-events-none"></div>

        <div className="relative flex overflow-hidden w-full">
          <div className="flex animate-[logoMarquee_32s_linear_infinite] shrink-0 min-w-full justify-around items-center gap-20 pr-20">
            {Logos.map((LogoComp, i) => (
              <LogoComp key={`logo-1-${i}`} />
            ))}
          </div>
          <div className="flex animate-[logoMarquee_32s_linear_infinite] shrink-0 min-w-full justify-around items-center gap-20 pr-20" aria-hidden="true">
            {Logos.map((LogoComp, i) => (
              <LogoComp key={`logo-2-${i}`} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes logoMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
