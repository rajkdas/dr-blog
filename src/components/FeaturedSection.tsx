import React from 'react';
import { FileText } from 'lucide-react';
import { Article, FEATURED_ARTICLE, EDITORS_PICKS, DOCTOR_PROFILE } from '../data/blogData';

interface FeaturedSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ onSelectArticle }) => {
  return (
    <section className="bg-[#F8F6F0] pb-12 sm:pb-16" id="featured">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main White Enclosed Feature Card Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Area: Featured Article (Text + Gut-Brain Graphic) - 8 cols */}
            <div className="lg:col-span-8 flex flex-col justify-between h-full">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                
                {/* Left Text Content */}
                <div className="md:col-span-7 space-y-3.5">
                  <div className="text-[11px] sm:text-xs font-bold tracking-[0.14em] text-[#0D2240] uppercase">
                    FEATURED ARTICLE
                  </div>

                  <h2 
                    onClick={() => onSelectArticle(FEATURED_ARTICLE)}
                    className="font-serif text-2xl sm:text-3xl font-bold text-[#0D2240] hover:text-[#1A56DB] transition-colors leading-[1.25] cursor-pointer"
                  >
                    {FEATURED_ARTICLE.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {FEATURED_ARTICLE.excerpt}
                  </p>

                  {/* Author Meta Row */}
                  <div className="flex items-center gap-3 pt-3">
                    <img 
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&auto=format&fit=crop&q=80" 
                      alt={DOCTOR_PROFILE.name} 
                      className="w-9 h-9 rounded-full object-cover ring-1 ring-blue-500"
                    />
                    <div>
                      <div className="text-sm font-bold text-[#0D2240] leading-tight">
                        {DOCTOR_PROFILE.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {FEATURED_ARTICLE.date} &bull; {FEATURED_ARTICLE.readTime}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center / Right: Gut-Brain Visual Graphic with Luminous 3D Brain and Digestive Tract */}
                <div className="md:col-span-5 flex justify-center">
                  <div 
                    onClick={() => onSelectArticle(FEATURED_ARTICLE)}
                    className="w-full h-56 sm:h-64 rounded-xl sm:rounded-2xl bg-[#061122] p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-inner border border-slate-800 cursor-pointer group"
                  >
                    
                    {/* Glowing Radial Backdrop */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.25),transparent_70%)] pointer-events-none"></div>

                    <svg viewBox="0 0 240 280" className="w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <filter id="brainGlow" x="-30%" y="-30%" width="160%" height="160%">
                          <feGaussianBlur stdDeviation="3.5" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        <filter id="gutGlow" x="-30%" y="-30%" width="160%" height="160%">
                          <feGaussianBlur stdDeviation="2.5" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>

                      {/* Glowing 3D Brain at Top */}
                      <g filter="url(#brainGlow)" stroke="#38BDF8" strokeWidth="2" fill="none" opacity="0.95">
                        {/* Cerebral cortex lobes */}
                        <path d="M120 40 C85 40 60 55 58 85 C56 108 72 122 92 125 C102 126 112 125 120 125 C128 125 138 126 148 125 C168 122 184 108 182 85 C180 55 155 40 120 40 Z" fill="rgba(14, 165, 233, 0.15)" />
                        
                        {/* Brain convolutions & sulci fissures */}
                        <path d="M70 75 C80 65 95 70 100 85 C105 100 88 110 75 105" stroke="#7DD3FC" strokeWidth="1.6" />
                        <path d="M100 55 C110 50 120 62 118 78 C116 95 130 105 142 98" stroke="#7DD3FC" strokeWidth="1.6" />
                        <path d="M140 55 C155 50 168 65 165 82 C162 98 145 110 155 118" stroke="#7DD3FC" strokeWidth="1.6" />
                        <path d="M85 92 C95 88 108 95 115 90" stroke="#38BDF8" strokeWidth="1.4" />
                        <path d="M125 90 C132 95 145 88 155 92" stroke="#38BDF8" strokeWidth="1.4" />
                        
                        {/* Brainstem */}
                        <path d="M112 125 L112 145 M128 125 L128 145" stroke="#38BDF8" strokeWidth="2" />
                      </g>

                      {/* Descending Neural Network / Vagus Nerve Axons */}
                      <g stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8">
                        <path d="M115 145 C115 160 105 170 105 185" />
                        <path d="M125 145 C125 160 135 170 135 185" />
                        <path d="M120 145 L120 190" stroke="#F59E0B" strokeWidth="2" />
                      </g>

                      {/* Synaptic Sparks / Pulses */}
                      <circle cx="120" cy="155" r="3" fill="#38BDF8" className="animate-ping" opacity="0.75" />
                      <circle cx="120" cy="172" r="2.5" fill="#FBBF24" />
                      <circle cx="110" cy="165" r="2" fill="#60A5FA" />
                      <circle cx="130" cy="165" r="2" fill="#60A5FA" />

                      {/* Glowing Gastrointestinal Tract / Gut at Bottom */}
                      <g filter="url(#gutGlow)" stroke="#F43F5E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.95">
                        {/* Stomach in amber/rose glow */}
                        <path d="M120 185 C110 188 95 192 90 205 C85 220 105 230 120 220 C130 212 128 198 120 185" stroke="#FB7185" fill="rgba(244, 63, 94, 0.18)" />

                        {/* Coiled Intestines in radiant red/cyan energy */}
                        <path d="M100 225 C88 228 85 240 98 245 C110 250 115 238 128 245 C140 252 135 265 120 262 C105 258 98 272 115 275 C130 278 142 268 145 255" stroke="#F43F5E" strokeWidth="2.4" />
                        <path d="M105 235 C115 238 125 230 135 236 C145 242 142 255 130 250" stroke="#38BDF8" strokeWidth="1.8" />
                        
                        {/* Colon frame */}
                        <path d="M78 260 C70 240 70 205 75 190 C80 180 95 178 108 178 M132 178 C145 178 160 180 165 190 C170 205 170 240 162 260" stroke="#E11D48" strokeWidth="2.2" strokeDasharray="4 2" />
                      </g>
                    </svg>

                  </div>
                </div>

              </div>
            </div>

            {/* Right Area: EDITOR'S PICKS - 4 cols */}
            <div className="lg:col-span-4 lg:pl-4 lg:border-l lg:border-slate-100 flex flex-col justify-between">
              <div>
                <div className="text-[11px] sm:text-xs font-bold tracking-[0.14em] text-[#0D2240] uppercase mb-4">
                  EDITOR&apos;S PICKS
                </div>

                <div className="space-y-4 sm:space-y-4.5">
                  {EDITORS_PICKS.slice(0, 4).map((pick, idx) => (
                    <div 
                      key={pick.id}
                      onClick={() => onSelectArticle(pick)}
                      className="flex items-center gap-3.5 group cursor-pointer"
                    >
                      {/* Thumbnail Image / Icon Box */}
                      <div className="w-16 h-12 sm:w-[70px] sm:h-[50px] rounded-lg overflow-hidden shrink-0 border border-slate-200/80 bg-slate-100 flex items-center justify-center">
                        {idx === 3 ? (
                          <div className="w-full h-full bg-blue-50/90 flex items-center justify-center text-[#1A56DB]">
                            <FileText className="w-5 h-5" />
                          </div>
                        ) : (
                          <img 
                            src={pick.image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&auto=format&fit=crop&q=80"} 
                            alt={pick.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xs sm:text-[13px] font-bold text-[#0D2240] group-hover:text-[#1A56DB] transition-colors leading-snug line-clamp-2">
                          {pick.title}
                        </h3>
                        <div className="text-[11px] text-slate-500 mt-0.5 font-normal">
                          {pick.date} &bull; {pick.readTime}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
