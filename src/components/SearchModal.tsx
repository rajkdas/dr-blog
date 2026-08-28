import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, Clock, ArrowRight, Tag } from 'lucide-react';
import { 
  Article, 
  FEATURED_ARTICLE, 
  EDITORS_PICKS, 
  GI_JOURNEY_ARTICLES, 
  DIGESTIVE_HEALTH_ARTICLES, 
  POPULAR_ARTICLES,
  TOPICS,
  Topic
} from '../data/blogData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (art: Article) => void;
  onSelectTopic: (topic: Topic) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ 
  isOpen, 
  onClose, 
  onSelectArticle, 
  onSelectTopic 
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Consolidate all articles
  const allArticles: Article[] = useMemo(() => {
    return [
      FEATURED_ARTICLE,
      ...EDITORS_PICKS,
      ...GI_JOURNEY_ARTICLES,
      ...DIGESTIVE_HEALTH_ARTICLES,
      ...POPULAR_ARTICLES
    ];
  }, []);

  // Filter articles and topics
  const searchResults = useMemo(() => {
    if (!query.trim()) return { articles: [], topics: [] };
    const q = query.toLowerCase();

    const articles = allArticles.filter(art => 
      art.title.toLowerCase().includes(q) ||
      art.excerpt.toLowerCase().includes(q) ||
      art.tags.some(t => t.toLowerCase().includes(q))
    );

    const topics = TOPICS.filter(top => 
      top.name.toLowerCase().includes(q) ||
      top.description.toLowerCase().includes(q)
    );

    return { articles, topics };
  }, [query, allArticles]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-start justify-center p-4 sm:pt-20 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-600 shrink-0" />
          <input 
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search clinical articles, symptoms, IBS, GERD, Fellowship..."
            className="w-full text-base bg-transparent border-none focus:outline-none placeholder:text-slate-400 text-slate-900"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold bg-slate-100 text-slate-600 rounded-md hover:bg-slate-200 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results / Suggestions Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          
          {query.trim() === '' ? (
            <div className="space-y-4 py-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Popular Quick Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {['Gut-Brain Axis', 'IBS & Diet', 'GERD Nocturnal Reflux', 'Colonoscopy Prep', 'Probiotics Clinical Trial', 'Fellowship Reflections'].map((tag, i) => (
                  <button
                    key={i}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 rounded-lg text-xs font-medium border border-slate-100 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="pt-2 text-xs text-slate-400">
                Type keywords above to search all {allArticles.length} articles and {TOPICS.length} medical topics.
              </div>
            </div>
          ) : (
            <>
              {/* Articles Results */}
              {searchResults.articles.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Articles ({searchResults.articles.length})
                  </div>
                  <div className="divide-y divide-slate-100">
                    {searchResults.articles.map((art) => (
                      <div
                        key={art.id}
                        onClick={() => {
                          onSelectArticle(art);
                          onClose();
                        }}
                        className="py-3 px-2 rounded-lg hover:bg-blue-50/60 cursor-pointer group transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif text-sm font-bold text-[#0D2240] group-hover:text-blue-700">
                            {art.title}
                          </h4>
                          <span className="text-[11px] text-slate-400 flex items-center gap-1 shrink-0 ml-2">
                            <Clock className="w-3 h-3" />
                            {art.readTime}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {art.excerpt}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Topics Results */}
              {searchResults.topics.length > 0 && (
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Topics ({searchResults.topics.length})
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {searchResults.topics.map((t) => (
                      <div
                        key={t.id}
                        onClick={() => {
                          onSelectTopic(t);
                          onClose();
                        }}
                        className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 hover:bg-blue-50 cursor-pointer group"
                      >
                        <div className="font-bold text-xs text-[#0D2240] group-hover:text-blue-700 flex items-center gap-1.5">
                          <Tag className="w-3.5 h-3.5 text-blue-600" />
                          {t.name}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          {t.count} articles
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {searchResults.articles.length === 0 && searchResults.topics.length === 0 && (
                <div className="text-center py-8 text-slate-400 text-sm">
                  No matching clinical articles or topics found for &ldquo;{query}&rdquo;.
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
};
