import React, { useEffect, useRef } from 'react';

// Local YouTube Player to handle muted autoplay, looping, and subtitle disabling programmatically
const YouTubePlayer: React.FC<{ videoId: string; title: string }> = ({ videoId, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
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

      if (checkInterval) clearInterval(checkInterval);

      const uniqueId = `yt-player-about-${videoId}-${Math.random().toString(36).substring(2, 9)}`;
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
            try {
              event.target.unloadModule('captions');
              event.target.unloadModule('cc');
            } catch (e) {}
          },
          onStateChange: (event: any) => {
            if (event.data === (window as any).YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
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
    <div ref={containerRef} className="w-full h-full object-cover pointer-events-none" />
  );
};

const About: React.FC = () => {
  return (
    <section id="solution" className="py-24 px-6 relative overflow-hidden bg-transparent">
      
      {/* Deep Violet Ambient Glow on top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-96 bg-brand-pink/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            What is <span className="text-gradient">CRED MEDIA?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            We help creators, founders, and brands become the obvious choice in their market.
          </p>
        </div>

        {/* 3-Column Content Layout (Stats - Phone - Features) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px_1fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Vertical Stats stack with border separators */}
          <div className="flex flex-col justify-center space-y-8 lg:space-y-12">
            {[
              { value: '8+', label: 'Team Members' },
              { value: '500+', label: 'Videos Edited for Clients' },
              { value: '0 Videos', label: 'Delivered Late' }
            ].map((stat, i) => (
              <div key={i} className="border-b border-white/5 pb-8 last:border-b-0 last:pb-0">
                <div className="text-5xl md:text-6xl font-black text-white tracking-tight">{stat.value}</div>
                <div className="text-sm md:text-base text-white/50 font-bold mt-2 leading-tight uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Center Column: Interactive Bezel-less Smartphone Video Player */}
          <div className="relative mx-auto w-[280px] md:w-[320px] aspect-[9/16] rounded-[2.5rem] p-2 bg-neutral-950 border-[6px] border-white/10 shadow-[0_0_80px_rgba(242,169,235,0.15)] flex items-center justify-center overflow-hidden">
            {/* Top Dynamic Island Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 absolute right-4"></div>
            </div>

            {/* Glossy Reflective Glare effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none z-10" />

            {/* Vertical Video inside Mockup Frame */}
            <div className="rounded-[2rem] overflow-hidden w-full h-full relative">
              <YouTubePlayer videoId="LwMn2XmdRbg" title="CRED MEDIA Showreel" />
            </div>
          </div>

          {/* Right Column: Key Core Values Stacked with Arrow bullets */}
          <div className="flex flex-col justify-center space-y-8 lg:space-y-12">
            {[
              {
                title: 'Revisions',
                desc: "Not happy? We'll fix it. Every project comes with multiple revision rounds.",
              },
              {
                title: '24/7 Support',
                desc: "Questions don't wait, and neither do we. Our team is always just a message away.",
              },
              {
                title: 'Fast Delivery',
                desc: 'Zero compromise on speed. Your content, delivered on time, every time.',
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-white/5 pb-8 last:border-b-0 last:pb-0">
                <div className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                  <span className="text-white/40 text-lg transition-transform hover:translate-x-1 duration-300">▶</span>
                  {item.title}
                </div>
                <p className="text-sm md:text-base text-white/50 font-medium leading-relaxed mt-2 pl-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Navigation Link Button */}
        <div className="flex justify-center mt-16">
          <a 
            href="#testimonials" 
            className="inline-flex items-center justify-center px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-bold tracking-wider text-white transition-all duration-300 backdrop-blur-md"
          >
            Testimonials
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
