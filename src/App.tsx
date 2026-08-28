import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedSection } from './components/FeaturedSection';
import { MainContentColumns } from './components/MainContentColumns';
import { TopicsSection } from './components/TopicsSection';
import { DoctorBioSection } from './components/DoctorBioSection';
import { NewsletterBanner } from './components/NewsletterBanner';
import { Footer } from './components/Footer';
import { ArticleModal } from './components/ArticleModal';
import { SearchModal } from './components/SearchModal';
import { HtmlCodeModal } from './components/HtmlCodeModal';
import { WordPressGuideModal } from './components/WordPressGuideModal';
import { DevToolbar, ViewportMode } from './components/DevToolbar';
import { Article, Topic, FEATURED_ARTICLE, GI_JOURNEY_ARTICLES, TOPICS } from './data/blogData';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHtmlCodeOpen, setIsHtmlCodeOpen] = useState(false);
  const [isWpGuideOpen, setIsWpGuideOpen] = useState(false);
  const [viewportMode, setViewportMode] = useState<ViewportMode>('full');

  // Keyboard shortcut for search (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigateSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectTopic = (topic: Topic) => {
    // Open the first matching article or open search filtered by topic
    const matched = GI_JOURNEY_ARTICLES.find(a => a.tags.some(t => t.toLowerCase().includes(topic.name.toLowerCase())));
    if (matched) {
      setSelectedArticle(matched);
    } else {
      setSelectedArticle(FEATURED_ARTICLE);
    }
  };

  const getViewportContainerClasses = () => {
    switch (viewportMode) {
      case 'laptop':
        return 'max-w-[1024px] mx-auto my-6 rounded-2xl shadow-2xl overflow-hidden border border-slate-300 transition-all duration-300';
      case 'tablet':
        return 'max-w-[768px] mx-auto my-6 rounded-2xl shadow-2xl overflow-hidden border border-slate-300 transition-all duration-300';
      case 'mobile':
        return 'max-w-[390px] mx-auto my-6 rounded-3xl shadow-2xl overflow-hidden border-[6px] border-slate-800 transition-all duration-300';
      default:
        return 'w-full transition-all duration-300';
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F3F8] flex flex-col selection:bg-blue-600 selection:text-white">
      
      {/* Developer & Responsive Switcher Toolbar */}
      <DevToolbar 
        currentViewport={viewportMode}
        onSetViewport={setViewportMode}
        onOpenHtmlCode={() => setIsHtmlCodeOpen(true)}
        onOpenWpGuide={() => setIsWpGuideOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Website Viewport Wrapper */}
      <div className={`flex-1 ${getViewportContainerClasses()} bg-[#F8F6F0]`}>
        
        {/* Navigation */}
        <Navbar 
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenSubscribe={() => handleNavigateSection('newsletter')}
        />

        {/* Hero Section */}
        <HeroSection 
          onExploreClick={() => handleNavigateSection('featured')}
        />

        {/* Featured Article & Editor's Picks */}
        <FeaturedSection 
          onSelectArticle={(art) => setSelectedArticle(art)}
        />

        {/* 3-Column Articles & Sidebar */}
        <MainContentColumns 
          onSelectArticle={(art) => setSelectedArticle(art)}
        />

        {/* Explore Topics (10 categories) */}
        <TopicsSection 
          onSelectTopic={handleSelectTopic}
        />

        {/* Meet the Doctor Section */}
        <DoctorBioSection 
          onReadStory={() => setSelectedArticle(GI_JOURNEY_ARTICLES[0])}
        />

        {/* Pre-Footer Newsletter Banner */}
        <NewsletterBanner />

        {/* Footer */}
        <Footer 
          onNavigateSection={handleNavigateSection}
        />

      </div>

      {/* Modals */}
      <ArticleModal 
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onSelectAnotherArticle={(art) => setSelectedArticle(art)}
      />

      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={(art) => setSelectedArticle(art)}
        onSelectTopic={handleSelectTopic}
      />

      <HtmlCodeModal 
        isOpen={isHtmlCodeOpen}
        onClose={() => setIsHtmlCodeOpen(false)}
      />

      <WordPressGuideModal 
        isOpen={isWpGuideOpen}
        onClose={() => setIsWpGuideOpen(false)}
      />

    </div>
  );
}
