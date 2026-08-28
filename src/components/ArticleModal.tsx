import React, { useState } from 'react';
import { X, Clock, Calendar, MessageSquare, Share2, Bookmark, Check, ThumbsUp, Send } from 'lucide-react';
import { Article, DOCTOR_PROFILE } from '../data/blogData';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onSelectAnotherArticle: (art: Article) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState(24);
  const [liked, setLiked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [commentsList, setCommentsList] = useState<Array<{ name: string; date: string; text: string }>>([
    { name: "Dr. Sarah Jenkins", date: "2 days ago", text: "Brilliant clinical summary! The distinction between visceral hypersensitivity and structural inflammation is crucial for patients to understand." },
    { name: "Michael Chang", date: "Yesterday", text: "Thank you for explaining this so clearly. The dietary FODMAP advice was deeply practical." }
  ]);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setCommentsList([
      ...commentsList,
      { name: "Fellow Colleague / Reader", date: "Just now", text: commentText.trim() }
    ]);
    setCommentText('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Close Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase rounded-md">
              {article.categoryLabel}
            </span>
            <span className="text-xs text-slate-400">Clinical Article Preview</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Title & Metadata */}
          <div className="space-y-3">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D2240] leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=80&auto=format&fit=crop&q=80" 
                  alt="Author" 
                  className="w-7 h-7 rounded-full object-cover ring-1 ring-blue-500"
                />
                <span className="font-bold text-[#0D2240]">{DOCTOR_PROFILE.name}</span>
              </div>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
              <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> {commentsList.length} Discussion notes</span>
            </div>
          </div>

          {/* Featured Image if available */}
          {article.image && (
            <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 max-h-72">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Excerpt / Highlight Box */}
          <div className="p-4 bg-blue-50/60 border-l-4 border-blue-600 rounded-r-lg text-slate-700 text-sm italic font-medium leading-relaxed">
            &ldquo;{article.excerpt}&rdquo;
          </div>

          {/* Main Article Content */}
          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            {article.content ? (
              article.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))
            ) : (
              <>
                <p>
                  In gastrointestinal medicine, translating dense laboratory research into actionable bedside care requires both scientific rigor and empathetic communication. Every patient scenario presents nuanced physiology—from gut motility dynamics to mucosal immune response.
                </p>
                <p>
                  Clinical experience during fellowship consistently reinforces that gut health cannot be isolated from sleep rhythms, chronic autonomic stress, and dietary micronutrients. By establishing an open dialogue and examining the latest multicenter trials, we empower patients with clarity and confidence in their diagnostic and treatment pathways.
                </p>
              </>
            )}

            {/* Key Clinical Takeaways */}
            <div className="mt-6 p-5 bg-[#FAFBFD] border border-slate-200 rounded-xl space-y-2">
              <h4 className="font-serif text-sm font-bold text-[#0D2240] uppercase tracking-wider flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-blue-600" />
                Key Clinical Takeaways
              </h4>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-inside">
                <li>Evidence-based interventions prioritize individualized tolerance over generic diets.</li>
                <li>Long-term mucosal integrity benefits from diverse prebiotic plant fibers and stress mitigation.</li>
                <li>Consult a board-certified gastroenterologist for individualized diagnostic screening schedules.</li>
              </ul>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {article.tags.map((tag, i) => (
              <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                #{tag}
              </span>
            ))}
          </div>

          {/* Social Interaction Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button 
              onClick={() => {
                setLiked(!liked);
                setLikes(liked ? likes - 1 : likes + 1);
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                liked ? 'bg-blue-50 border-blue-200 text-blue-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>{likes} Helpful</span>
            </button>

            <button 
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
            </button>
          </div>

          {/* Comments Section */}
          <div className="pt-6 border-t border-slate-100 space-y-4">
            <h3 className="font-serif text-base font-bold text-[#0D2240]">
              Discussion & Clinical Reflections ({commentsList.length})
            </h3>

            {/* Comment Form */}
            <form onSubmit={handleAddComment} className="space-y-2">
              <div className="flex gap-2">
                <input 
                  type="text"
                  placeholder="Add a clinical thought or question..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-[#0D2240] hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center gap-1 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Post</span>
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-3">
              {commentsList.map((c, i) => (
                <div key={i} className="p-3 bg-slate-50 rounded-xl text-xs space-y-1">
                  <div className="flex items-center justify-between text-slate-500 font-medium">
                    <span className="font-bold text-[#0D2240]">{c.name}</span>
                    <span>{c.date}</span>
                  </div>
                  <p className="text-slate-600">{c.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
