
import React, { useState } from 'react';

const faqs = [
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Yes. We offer a 14-Day Money-Back Guarantee. If you’re not satisfied with the editing quality or delivery within the first 14 days, you may request a full refund after providing reasonable feedback and allowing revisions. This guarantee applies only to editing quality and agreed deliverables and does not cover views, engagement, revenue, or algorithm-based performance."
  },
  {
    question: "How many revision option i will get for per video edit?",
    answer: "We offer unlimited revisions. Our goal is absolute perfection. We work on the video until it perfectly aligns with your vision and brand standards."
  },
  {
    question: "How can I get started?",
    answer: "Simple! Just book a strategy call via the Calendly link or message us directly on Discord. We'll conduct a quick audit of your content and get the ball rolling."
  },
  {
    question: "Why should I trust you?",
    answer: "We have a team of 8+ specialists and have successfully delivered over 500 videos. Our client retention rate is 95% because we focus on ROI, not just pretty edits."
  },
  {
    question: "What Payment Method do you use?",
    answer: "We use Paypal, Payoneer, Apple Pay, Wise, Google Pay for the payment"
  },
  {
    question: "Can we have custom package for our content?",
    answer: "Yes, we can definitely create a customized package that fits your specific needs and goals. We understand that every brand is unique."
  },
  {
    question: "We will also get the source file of the work?",
    answer: "No, source file are not included in packages. If you want a source file so there will be extra charges for that."
  }
];

interface FAQItemProps {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
  // Added key to interface to satisfy compiler when passed in props object
  key?: React.Key;
}

const FAQItem = ({ faq, isOpen, onClick }: FAQItemProps) => {
  return (
    <div 
      className={`group border border-white/5 rounded-2xl mb-4 transition-all duration-500 overflow-hidden ${
        isOpen ? 'bg-white/[0.05] border-brand-blue/30 shadow-[0_0_30px_rgba(73,100,238,0.1)]' : 'bg-white/[0.02] hover:bg-white/[0.04]'
      }`}
    >
      <button 
        onClick={onClick}
        className="w-full px-8 py-6 flex items-center justify-between text-left transition-all"
      >
        <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/70'}`}>
          {faq.question}
        </span>
        <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border border-white/10 transition-transform duration-500 ${isOpen ? 'rotate-45 bg-brand-blue border-brand-blue' : ''}`}>
          <div className="absolute w-3 h-[2px] bg-white"></div>
          <div className={`absolute h-3 w-[2px] bg-white transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
        </div>
      </button>
      
      <div 
        className={`transition-all duration-500 ease-in-out px-8 overflow-hidden ${
          isOpen ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-white/50 text-base leading-relaxed font-medium">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 px-6 bg-brand-dark relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            Common <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-white/40 uppercase tracking-[0.3em] font-bold text-xs">Everything you need to know</p>
        </div>

        <div className="relative">
          {/* Decorative Glow behind the list */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                faq={faq} 
                isOpen={openIndex === index} 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
