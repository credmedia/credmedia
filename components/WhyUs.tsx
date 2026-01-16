
import React from 'react';

const WhyUs: React.FC = () => {
  const cards = [
    {
      title: 'No more guessing',
      desc: 'We don’t just edit your videos. We’ll give you 100+ tested hooks, brainstorm ideas, and the best ways to post them.',
      img: 'https://assets-global.website-files.com/659602a8a781e80b03a8096b/659e89dc4b095f92b92189f5_card-solution_image-1-a.webp',
      color: 'from-brand-accent'
    },
    {
      title: 'No limits',
      desc: 'We don’t limit the number of video ideas, requests, or changes you have. Your satisfaction is our benchmark.',
      img: 'https://assets-global.website-files.com/659602a8a781e80b03a8096b/6598339ab0ec681edfdb7a95_card-solution_image-2-a.webp',
      color: 'from-brand-pink'
    },
    {
      title: 'Uncapped ROI',
      desc: "Our client's calendars are booked months ahead through our DM Automation and lead magnet strategies.",
      img: 'https://assets-global.website-files.com/659602a8a781e80b03a8096b/6598339a3d123f23f822edc8_card-solution_image-3.webp',
      color: 'from-brand-blue'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Why <span className="text-gradient">CRED MEDIA?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            The secret sauce to building an irreplaceable brand identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="group relative bg-glass rounded-[40px] p-8 pt-12 overflow-hidden card-hover">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} to-transparent opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`}></div>
              
              <div className="mb-8 h-40 flex items-center justify-center">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="max-h-full object-contain transform group-hover:scale-125 group-hover:-translate-y-2 transition-transform duration-500 ease-out" 
                />
              </div>

              <div className="space-y-4 relative z-10">
                <h3 className="text-2xl font-black tracking-tight group-hover:text-brand-pink transition-colors">{card.title}</h3>
                <p className="text-white/60 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-white/30">Learn More</span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-pink group-hover:text-brand-dark transition-all duration-300">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
