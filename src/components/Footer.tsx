import React, { useState } from 'react';
import { DOCTOR_PROFILE } from '../data/blogData';
import { CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const [footerEmail, setFooterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (footerEmail.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setFooterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#08162A] text-slate-400 pt-16 pb-12 border-t border-slate-800/80" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Col 1: Bio & Branding (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&auto=format&fit=crop&q=80" 
                alt="Doctor portrait" 
                className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/40 p-0.5 bg-white"
              />
              <div>
                <h4 className="font-serif text-lg font-bold text-white tracking-tight leading-snug">
                  {DOCTOR_PROFILE.name}
                </h4>
                <div className="text-[11px] font-bold tracking-wider text-cyan-400 uppercase">
                  {DOCTOR_PROFILE.specialty}
                </div>
                <div className="text-[10px] text-slate-400 uppercase font-medium">
                  {DOCTOR_PROFILE.subtitles.join(' • ')}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {DOCTOR_PROFILE.shortBio}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a 
                href={DOCTOR_PROFILE.socials.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook text-sm"></i>
              </a>
              <a 
                href={DOCTOR_PROFILE.socials.twitter} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Twitter / X"
              >
                <i className="bi bi-twitter-x text-sm"></i>
              </a>
              <a 
                href={DOCTOR_PROFILE.socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin text-sm"></i>
              </a>
              <a 
                href={DOCTOR_PROFILE.socials.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram text-sm"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateSection('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Me
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('featured')} className="hover:text-white transition-colors cursor-pointer">
                  Articles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('topics')} className="hover:text-white transition-colors cursor-pointer">
                  Topics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('topics')} className="hover:text-white transition-colors cursor-pointer">
                  Resources
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Topics (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Popular Topics
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateSection('topics')} className="hover:text-white transition-colors cursor-pointer">
                  IBS & Functional Bowel
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('topics')} className="hover:text-white transition-colors cursor-pointer">
                  GERD & Acid Reflux
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('topics')} className="hover:text-white transition-colors cursor-pointer">
                  Colon Health & Polyps
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('topics')} className="hover:text-white transition-colors cursor-pointer">
                  Gut Microbiome & Probiotics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('topics')} className="hover:text-white transition-colors cursor-pointer">
                  Diet & Clinical Nutrition
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Mini Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Newsletter
            </h5>
            <p className="text-xs text-slate-400">
              Get the latest articles and digestive health tips.
            </p>

            {isSubscribed ? (
              <div className="p-2.5 bg-emerald-900/50 border border-emerald-500/40 rounded-lg text-emerald-200 text-xs font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Subscribed! Welcome aboard.</span>
              </div>
            ) : (
              <form onSubmit={handleFooterSubmit} className="space-y-1.5">
                <div className="flex gap-1.5">
                  <input
                    type="email"
                    required
                    value={footerEmail}
                    onChange={(e) => setFooterEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-3 py-2 bg-slate-900/90 border border-slate-700 text-white text-xs rounded-lg focus:outline-none focus:border-blue-500 placeholder:text-slate-500"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="text-[10px] text-slate-500">
                  No spam. Unsubscribe anytime.
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2024 {DOCTOR_PROFILE.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Use</a>
            <span>•</span>
            <a href="#disclaimer" className="hover:text-slate-300 transition-colors">Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
