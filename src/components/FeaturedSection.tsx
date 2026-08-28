import React from 'react';
import { FileText, ArrowUpRight, Clock, User } from 'lucide-react';
import { Article, FEATURED_ARTICLE, EDITORS_PICKS, DOCTOR_PROFILE } from '../data/blogData';

interface FeaturedSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ onSelectArticle }) => {
  return (
    <section className="py-12 bg-white" id="featured">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Featured Article (Left 8 cols) */}
          <div className="lg:col-span-8">
            <div 
              onClick={() => onSelectArticle(FEATURED_ARTICLE)}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 p-6 sm:p-8 cursor-pointer group flex flex-col justify-between h-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Text Content */}
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase rounded-md border border-blue-100/60">
                      {FEATURED_ARTICLE.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {FEATURED_ARTICLE.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D2240] group-hover:text-blue-700 transition-colors leading-tight">
                    {FEATURED_ARTICLE.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3">
                    {FEATURED_ARTICLE.excerpt}
                  </p>

                  {/* Author Meta */}
                  <div className="flex items-center gap-3 pt-2">
                    <img 
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&auto=format&fit=crop&q=80" 
                      alt={DOCTOR_PROFILE.name} 
                      className="w-10 h-10 rounded-full object-cover border-2 border-blue-200"
                    />
                    <div>
                      <div className="text-sm font-bold text-[#0D2240]">
                        {DOCTOR_PROFILE.name}
                      </div>
                      <div className="text-xs text-slate-500">
                        {FEATURED_ARTICLE.date} • {FEATURED_ARTICLE.readTime}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gut-Brain Axis Visual Illustration */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="w-full h-52 sm:h-60 rounded-xl bg-gradient-to-br from-[#06152B] via-[#0D2240] to-[#122A4E] p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-inner border border-blue-900/50">
                    
                    <svg viewBox="0 0 200 200" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Brain outline */}
                      <path d="M70 55 C48 55, 42 75, 52 92 C62 108, 85 102, 100 102 C115 102, 138 108, 148 92 C158 75, 152 55, 130 55 C120 35, 80 35, 70 55 Z" stroke="#38BDF8" strokeWidth="2.2" fill="rgba(56, 189, 248, 0.12)"/>
                      
                      {/* Vagus Nerve Axis */}
                      <path d="M100 102 V142" stroke="#F59E0B" strokeWidth="2.5" strokeDasharray="3 3"/>
                      
                      {/* Gut / Intestines network */}
                      <path d="M78 145 C62 150, 62 178, 78 184 C95 188, 105 172, 115 182 C125 192, 142 178, 138 162 C132 146, 110 142, 100 142" stroke="#FB7185" strokeWidth="2.2" fill="rgba(251, 113, 133, 0.12)"/>
                      
                      {/* Neural Pulses */}
                      <circle cx="100" cy="65" r="3.5" fill="#38BDF8" className="animate-pulse"/>
                      <circle cx="75" cy="78" r="3" fill="#60A5FA"/>
                      <circle cx="125" cy="78" r="3" fill="#60A5FA"/>
                      <circle cx="100" cy="122" r="2.5" fill="#F59E0B"/>
                      <circle cx="100" cy="168" r="3.5" fill="#FB7185"/>
                    </svg>

                    <div className="absolute bottom-2 text-[10px] text-cyan-300 font-mono tracking-widest uppercase">
                      Gut-Brain Neural Axis
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-semibold group-hover:text-blue-700">
                <span>Read Full Clinical Article</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {/* Editor's Picks (Right 4 cols) */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-slate-100">
                  <h3 className="text-xs font-extrabold tracking-wider uppercase text-[#0D2240]">
                    EDITOR&apos;S PICKS
                  </h3>
                  <span className="text-[11px] text-blue-600 font-bold">Curated</span>
                </div>

                <div className="space-y-4 divide-y divide-slate-100">
                  {EDITORS_PICKS.map((pick) => (
                    <article
                      key={pick.id}
                      onClick={() => onSelectArticle(pick)}
                      className="pt-3.5 first:pt-0 cursor-pointer group"
                    >
                      <div className="flex items-start gap-3.5">
                        {pick.image ? (
                          <img 
                            src={pick.image} 
                            alt={pick.title} 
                            className="w-18 h-15 rounded-lg object-cover flex-shrink-0 group-hover:opacity-90 transition-opacity border border-slate-200"
                          />
                        ) : (
                          <div className="w-18 h-15 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                            <FileText className="w-6 h-6" />
                          </div>
                        )}

                        <div className="space-y-1">
                          <h4 className="font-serif text-sm font-bold text-[#0D2240] group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                            {pick.title}
                          </h4>
                          <div className="text-[11px] text-slate-500 font-medium">
                            {pick.date} • {pick.readTime}
                          </div>
                        </div>
                      </div>
                    </article>
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
