import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export const NewsletterBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <section className="bg-[#0D2240] text-white py-12 relative overflow-hidden" id="newsletter">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Title & Description */}
          <div className="lg:col-span-6 flex items-center gap-4 sm:gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 text-white flex items-center justify-center flex-shrink-0 ring-1 ring-white/20">
              <Mail className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Stay informed. Stay healthy.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Join thousands of readers who get practical, evidence-based digestive health insights every week.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-6">
            {isSuccess ? (
              <div className="p-4 bg-emerald-900/40 border border-emerald-500/50 rounded-xl text-emerald-200 text-sm font-semibold flex items-center gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>You&apos;re in! We&apos;ve sent a confirmation email with our latest Gut Health Starter Guide.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-white text-slate-900 text-sm rounded-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#1A56DB] hover:bg-blue-600 text-white text-sm font-bold rounded-lg sm:rounded-l-none transition-colors duration-200 shadow-md cursor-pointer whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-[11px] text-slate-400">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
