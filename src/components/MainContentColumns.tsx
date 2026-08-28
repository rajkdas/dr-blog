import React, { useState } from 'react';
import { BookOpen, Activity, ArrowRight, MessageSquare, Mail, CheckCircle2 } from 'lucide-react';
import { Article, GI_JOURNEY_ARTICLES, DIGESTIVE_HEALTH_ARTICLES, POPULAR_ARTICLES } from '../data/blogData';

interface MainContentColumnsProps {
  onSelectArticle: (article: Article) => void;
  onFilterCategory?: (cat: string) => void;
}

export const MainContentColumns: React.FC<MainContentColumnsProps> = ({ onSelectArticle }) => {
  const [sidebarEmail, setSidebarEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSidebarSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (sidebarEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSidebarEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-12 bg-[#FAFBFD]" id="content-columns">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* ================= COLUMN 1: FROM THE GI JOURNEY (4 cols) ================= */}
          <div className="lg:col-span-4" id="journey">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs h-full flex flex-col justify-between">
              
              <div>
                {/* Column Header */}
                <div className="mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-blue-600 mb-1">
                    <BookOpen className="w-5 h-5" />
                    <h2 className="font-serif text-xl font-bold text-[#0D2240]">
                      From the GI Journey
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">
                    Personal stories, fellowship life, clinical lessons & reflections
                  </p>
                  <a 
                    href="#journey-all" 
                    onClick={(e) => { e.preventDefault(); onSelectArticle(GI_JOURNEY_ARTICLES[0]); }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>View all</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Article List */}
                <div className="space-y-5 divide-y divide-slate-100">
                  {GI_JOURNEY_ARTICLES.map((art) => (
                    <article 
                      key={art.id}
                      onClick={() => onSelectArticle(art)}
                      className="pt-4 first:pt-0 cursor-pointer group"
                    >
                      <h3 className="font-serif text-base font-bold text-[#0D2240] group-hover:text-blue-700 transition-colors leading-snug mb-1.5">
                        {art.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-2.5">
                        {art.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                        <span>{art.date}</span>
                        <span>•</span>
                        <span>{art.readTime}</span>
                        {art.commentsCount !== undefined && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-slate-500">
                              <MessageSquare className="w-3 h-3 text-slate-400" />
                              {art.commentsCount}
                            </span>
                          </>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ================= COLUMN 2: DIGESTIVE HEALTH INSIGHTS (4 cols) ================= */}
          <div className="lg:col-span-4" id="insights">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs h-full flex flex-col justify-between">
              
              <div>
                {/* Column Header */}
                <div className="mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-blue-600 mb-1">
                    <Activity className="w-5 h-5" />
                    <h2 className="font-serif text-xl font-bold text-[#0D2240]">
                      Digestive Health Insights
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">
                    Evidence-based articles to help you understand your gut
                  </p>
                  <a 
                    href="#insights-all" 
                    onClick={(e) => { e.preventDefault(); onSelectArticle(DIGESTIVE_HEALTH_ARTICLES[0]); }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>View all</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Article List */}
                <div className="space-y-5 divide-y divide-slate-100">
                  {DIGESTIVE_HEALTH_ARTICLES.map((art) => (
                    <article 
                      key={art.id}
                      onClick={() => onSelectArticle(art)}
                      className="pt-4 first:pt-0 cursor-pointer group"
                    >
                      <h3 className="font-serif text-base font-bold text-[#0D2240] group-hover:text-blue-700 transition-colors leading-snug mb-1.5">
                        {art.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-2.5">
                        {art.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                        <span>{art.date}</span>
                        <span>•</span>
                        <span>{art.readTime}</span>
                        {art.commentsCount !== undefined && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-slate-500">
                              <MessageSquare className="w-3 h-3 text-slate-400" />
                              {art.commentsCount}
                            </span>
                          </>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ================= COLUMN 3: SIDEBAR (MOST POPULAR + STAY IN THE LOOP) (4 cols) ================= */}
          <div className="lg:col-span-4 md:col-span-2 space-y-6" id="popular">
            
            {/* Widget 1: Most Popular */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
              <div className="pb-3 mb-4 border-b-2 border-slate-100">
                <h3 className="text-xs font-extrabold tracking-wider uppercase text-[#0D2240]">
                  MOST POPULAR
                </h3>
              </div>

              <div className="space-y-3.5 divide-y divide-slate-100">
                {POPULAR_ARTICLES.map((art) => (
                  <article
                    key={art.id}
                    onClick={() => onSelectArticle(art)}
                    className="pt-3.5 first:pt-0 cursor-pointer group flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#0D2240] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 transition-colors">
                      {art.rank}
                    </span>
                    <div className="space-y-0.5">
                      <h4 className="font-serif text-sm font-bold text-[#0D2240] group-hover:text-blue-700 transition-colors leading-snug">
                        {art.title}
                      </h4>
                      <div className="text-[11px] text-slate-400">
                        {art.date}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Widget 2: Stay in the loop Card */}
            <div className="bg-gradient-to-b from-blue-50/50 to-slate-50 rounded-2xl border border-blue-100 p-6 text-center shadow-xs">
              <div className="w-12 h-12 rounded-full bg-white text-blue-600 shadow-sm flex items-center justify-center mx-auto mb-3 border border-blue-100">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0D2240] mb-1">
                Stay in the loop
              </h3>
              <p className="text-xs text-slate-600 mb-4 max-w-xs mx-auto">
                Get new GI insights and personal reflections in your inbox.
              </p>

              {subscribed ? (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Subscribed! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSidebarSubscribe} className="space-y-2">
                  <input 
                    type="email" 
                    required
                    value={sidebarEmail}
                    onChange={(e) => setSidebarEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                  <button 
                    type="submit"
                    className="w-full py-2.5 bg-[#0D2240] hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                  >
                    Subscribe
                  </button>
                  <p className="text-[10px] text-slate-400 mt-2">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
