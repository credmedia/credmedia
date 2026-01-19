
import React from 'react';

const testimonialsRow1 = [
  {
    name: 'Stedman',
    role: 'Business Consultant',
    content: 'Their expertise in editing and designing tripled our revenue in record time.',
    avatar: 'https://i.pravatar.cc/150?u=stedman',
  },
  {
    name: 'David Alimo',
    role: 'Agency Owner',
    content: "Loved to work with you guys. Really like all designs you sent me. Let's work together on more projects.",
    avatar: 'https://i.pravatar.cc/150?u=david'
  },
  {
    name: 'Bojan Dimov',
    role: 'Entrepreneur',
    content: "Wow this is amazing brother! I love it this is exactly what i needed!!! let's do it man!",
    avatar: 'https://i.pravatar.cc/150?u=bojan'
  },
  {
    name: 'Thomas',
    role: 'Digital Creator',
    content: 'Ma brother this is clean edit. Really like the opening like this real. Great job buddy.',
    avatar: 'https://i.pravatar.cc/150?u=thomas'
  }
];

const testimonialsRow2 = [
  {
    name: 'Ngartville',
    role: 'Content Creator',
    content: 'I am really happy to see the thumbnails design because i got what i am looking for. Inconsistent editors are a thing of the past.',
    avatar: 'https://i.pravatar.cc/150?u=ngart'
  },
  {
    name: 'Ferdinand Ritter',
    role: 'Agency Owner',
    content: "Just wanted to drop you a quick note to say how much we appreciate the amazing work you've been doing with us.",
    avatar: 'https://i.pravatar.cc/150?u=ferdinand'
  },
  {
    name: 'Stedman',
    role: 'Business Consultant',
    content: 'The team at CRED MEDIA redefined our digital presence. 10/10 recommendation.',
    avatar: 'https://i.pravatar.cc/150?u=stedman2',
  },
  {
    name: 'David Alimo',
    role: 'Agency Owner',
    content: 'Scalable content systems that actually work. They are the best in the business.',
    avatar: 'https://i.pravatar.cc/150?u=david2'
  }
];

// Added Key to the interface to resolve the TypeScript error when passing keys to components
const TestimonialCard = ({ t }: { t: any; key?: React.Key }) => (
  <div className="flex-shrink-0 w-[380px] md:w-[480px] bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-10 hover:border-brand-pink/20 transition-all duration-700 group mx-4 shadow-2xl">
    <div className="flex flex-col gap-8">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <svg key={s} className="w-4 h-4 text-brand-accent fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      
      <p className="text-white/70 text-xl font-medium leading-relaxed tracking-tight italic">
        "{t.content}"
      </p>
      
      <div className="flex items-center gap-5 pt-4 border-t border-white/5">
        <div className="relative w-14 h-14">
          <div className="absolute -inset-1 bg-gradient-to-tr from-brand-accent via-brand-pink to-brand-blue rounded-full blur opacity-20 group-hover:opacity-60 transition-opacity"></div>
          <img 
            src={t.avatar} 
            alt={t.name} 
            className="relative w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10"
          />
        </div>
        <div>
          <h4 className="font-black text-white text-lg tracking-tighter">{t.name}</h4>
          <p className="text-brand-pink/60 text-[10px] font-black uppercase tracking-[0.2em]">{t.role}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-brand-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h2 className="text-4xl md:text-[84px] font-black tracking-tighter leading-[0.95] mb-6">
          There's a reason people <br className="hidden md:block" />
          are <span className="text-gradient italic font-serif">raving about us.</span>
        </h2>
        <p className="text-white/40 text-sm font-black uppercase tracking-[0.4em]">Real results from real partners</p>
      </div>

      <div className="space-y-12 relative">
        {/* Left/Right Vignette Fades */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-brand-dark via-brand-dark/80 to-transparent z-10 pointer-events-none"></div>

        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...testimonialsRow1, ...testimonialsRow1].map((t, idx) => (
              <TestimonialCard key={`row1-${idx}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-[marquee-reverse_70s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...testimonialsRow2, ...testimonialsRow2].map((t, idx) => (
              <TestimonialCard key={`row2-${idx}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900&display=swap');
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-brand-blue/5 blur-[180px] rounded-full -z-10 animate-pulse"></div>
    </section>
  );
};

export default Testimonials;
