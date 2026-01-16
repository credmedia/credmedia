
import React, { useState } from 'react';

const GetStarted: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Free method to receive inquiries without a backend or API
    const subject = encodeURIComponent(`Free Edit Request from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`);
    window.location.href = `mailto:noah@credstuz.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="get-started" className="py-16 px-6 bg-brand-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          <div className="flex-1 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-black tracking-tighter leading-none text-white">
                Claim Your <br />
                <span className="text-brand-gold text-4xl">Free Edit</span>
              </h2>
              <p className="text-white/50 text-sm font-medium max-w-[240px]">
                Zero cost. Zero risk. See our quality before you spend a dime.
              </p>
              
              <div className="pt-4">
                <div className="inline-block px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-lg">
                  <span className="text-brand-gold font-black text-[10px] uppercase tracking-widest">Available Slots: 3/5 Left Today</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-brand-dark transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:noah@credstuz.com" className="text-sm font-bold text-white/80 hover:text-white transition-colors">noah@credstuz.com</a>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full bg-white/[0.02] border border-white/5 rounded-[1.5rem] p-6 md:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <span className="text-8xl font-black text-white transform rotate-12 block">FREE</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-brand-gold/50 transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-brand-gold/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <textarea 
                  name="message"
                  required
                  placeholder="Tell us about your channel... (Get your first video free)"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  maxLength={500}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-brand-gold/50 transition-colors resize-none"
                ></textarea>
                <div className="text-right text-[8px] font-black text-white/20 uppercase">{formData.message.length}/500</div>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-brand-gold via-brand-pink to-brand-accent py-3 rounded-xl font-black text-brand-dark text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-lg"
              >
                REQUEST FREE EDIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
