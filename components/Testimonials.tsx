
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
    content: 'Loved to work with you guys. Really like all designs you sent me. Let\'s work together on more projects.',
    avatar: 'https://i.pravatar.cc/150?u=david'
  },
  {
    name: 'Bojan Dimov',
    role: 'Entrepreneur',
    content: 'Wow this is amazing brother! I love it this is exactly what i needed!!! let\'s do it man!',
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
    content: 'Just wanted to drop you a quick note to say how much we appreciate the amazing work you\'ve been doing with us.',
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

// Added key to the interface to resolve the TS error
const TestimonialCard = ({ t }: { t: any; key?: React.Key }) => (
  <div className="flex-shrink-0 w-[350px] md:w-[450px] bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 hover:border-brand-pink/30 transition-all duration-500 group card-hover mx-3">
    <div className="flex flex-col gap-6">
      <p className="text-white/80 text-lg font-medium leading-relaxed italic">
        "{t.content}"
      </p>
      
      <div className="flex items-center gap-4 border-t border-white/5 pt-6">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-tr from-brand-accent to-brand-pink rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity"></div>
          <img 
            src={t.avatar} 
            alt={t.name} 
            className="relative w-12 h-12 rounded-full object-cover border border-white/10"
          />
        </div>
        <div>
          <h4 className="font-black text-white text-base tracking-tight">{t.name}</h4>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-brand-dark overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight">
          There's a reason people <br />
          are <span className="text-gradient">raving about us.</span>
        </h2>
      </div>

      <div className="space-y-10 relative">
        {/* Soft Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>

        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-[marquee_50s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...testimonialsRow1, ...testimonialsRow1].map((t, idx) => (
              <TestimonialCard key={idx} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-[marquee-reverse_60s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...testimonialsRow2, ...testimonialsRow2].map((t, idx) => (
              <TestimonialCard key={idx} t={t} />
            ))}
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

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-brand-pink/5 blur-[150px] rounded-full -z-10"></div>
    </section>
  );
};

export default Testimonials;
