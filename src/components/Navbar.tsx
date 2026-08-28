import React, { useState } from 'react';
import { Search, Mail, Menu, X, ChevronDown } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/blogData';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenSubscribe: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenSubscribe }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [articlesDropdownOpen, setArticlesDropdownOpen] = useState(false);
  const [topicsDropdownOpen, setTopicsDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5EBF2] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Doctor Title Branding */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="flex items-center gap-3.5 group text-decoration-none"
            id="brand-logo-link"
          >
            <div className="relative shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=120&auto=format&fit=crop&q=80" 
                alt="Dr. Portrait" 
                className="w-13 h-13 rounded-full object-cover ring-2 ring-[#1A56DB] p-0.5 bg-white shadow-xs group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="flex flex-col justify-center">
              {/* Doctor Name with GI Stethoscope Icon */}
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#0D2240] tracking-tight leading-tight group-hover:text-[#1A56DB] transition-colors">
                  {DOCTOR_PROFILE.name}
                </span>
                
                {/* GI Stethoscope & Capsule line-art icon */}
                <svg 
                  className="w-6 h-6 text-[#0D2240] shrink-0 inline-block" 
                  viewBox="0 0 28 28" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.8" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 3v5a4 4 0 0 0 8 0V3" />
                  <path d="M10 12v3a5 5 0 0 0 9 0v-2" />
                  <circle cx="19" cy="13" r="2.5" />
                  <path d="M5 3h2" />
                  <path d="M13 3h2" />
                  <rect x="17" y="18" width="8" height="4" rx="2" strokeWidth="1.5" />
                  <line x1="21" y1="18" x2="21" y2="22" strokeWidth="1.2" />
                </svg>
              </div>

              {/* Specialty */}
              <div className="text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#0D2240] uppercase leading-tight mt-0.5">
                {DOCTOR_PROFILE.specialty}
              </div>

              {/* Subtitle Bullets */}
              <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium tracking-wider uppercase mt-0.5">
                {DOCTOR_PROFILE.subtitles.join(' • ')}
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className="text-sm font-bold text-[#0D2240] border-b-2 border-[#0D2240] pb-1 transition-all"
            >
              Home
            </a>
            
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              className="text-sm font-medium text-slate-700 hover:text-[#0D2240] transition-colors pb-1"
            >
              About
            </a>

            {/* Articles Dropdown */}
            <div className="relative">
              <button 
                onClick={() => { setArticlesDropdownOpen(!articlesDropdownOpen); setTopicsDropdownOpen(false); }}
                onBlur={() => setTimeout(() => setArticlesDropdownOpen(false), 200)}
                className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-[#0D2240] transition-colors pb-1 cursor-pointer"
                aria-expanded={articlesDropdownOpen}
              >
                <span>Articles</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${articlesDropdownOpen ? 'rotate-180 text-[#0D2240]' : ''}`} />
              </button>

              {articlesDropdownOpen && (
                <div className="absolute top-full left-0 w-56 mt-2 bg-white rounded-xl shadow-xl border border-slate-200/80 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <a 
                    href="#featured" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('featured'); }}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0D2240] transition-colors"
                  >
                    Featured Articles
                  </a>
                  <a 
                    href="#journey" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('journey'); }}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0D2240] transition-colors"
                  >
                    From the GI Journey
                  </a>
                  <a 
                    href="#insights" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('insights'); }}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0D2240] transition-colors"
                  >
                    Digestive Health Insights
                  </a>
                  <div className="my-1 border-t border-slate-100"></div>
                  <a 
                    href="#popular" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('popular'); }}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0D2240] transition-colors"
                  >
                    Most Popular
                  </a>
                </div>
              )}
            </div>

            {/* Topics Dropdown */}
            <div className="relative">
              <button 
                onClick={() => { setTopicsDropdownOpen(!topicsDropdownOpen); setArticlesDropdownOpen(false); }}
                onBlur={() => setTimeout(() => setTopicsDropdownOpen(false), 200)}
                className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-[#0D2240] transition-colors pb-1 cursor-pointer"
                aria-expanded={topicsDropdownOpen}
              >
                <span>Topics</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${topicsDropdownOpen ? 'rotate-180 text-[#0D2240]' : ''}`} />
              </button>

              {topicsDropdownOpen && (
                <div className="absolute top-full left-0 w-60 mt-2 bg-white rounded-xl shadow-xl border border-slate-200/80 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <a 
                    href="#topics" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('topics'); }}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0D2240] transition-colors"
                  >
                    IBS & Functional Disorders
                  </a>
                  <a 
                    href="#topics" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('topics'); }}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0D2240] transition-colors"
                  >
                    GERD & Acid Reflux
                  </a>
                  <a 
                    href="#topics" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('topics'); }}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0D2240] transition-colors"
                  >
                    Gut Microbiome & Probiotics
                  </a>
                  <a 
                    href="#topics" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('topics'); }}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0D2240] transition-colors"
                  >
                    Endoscopy & Procedures
                  </a>
                  <a 
                    href="#topics" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('topics'); }}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0D2240] transition-colors"
                  >
                    Colon Health & Screenings
                  </a>
                </div>
              )}
            </div>

            <a 
              href="#resources" 
              onClick={(e) => { e.preventDefault(); scrollToSection('topics'); }}
              className="text-sm font-medium text-slate-700 hover:text-[#0D2240] transition-colors pb-1"
            >
              Resources
            </a>

            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="text-sm font-medium text-slate-700 hover:text-[#0D2240] transition-colors pb-1"
            >
              Contact
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenSearch}
              id="search-trigger-btn"
              className="p-2 text-[#0D2240] hover:text-[#1A56DB] hover:bg-black/5 rounded-full transition-colors cursor-pointer"
              title="Search Articles (Ctrl+K)"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button 
              onClick={onOpenSubscribe}
              id="header-subscribe-btn"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D2240] hover:bg-[#1A365D] text-white text-sm font-semibold rounded-md shadow-xs hover:shadow transition-all duration-200 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Subscribe</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0D2240] lg:hidden rounded-lg hover:bg-black/5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="block px-3 py-2 text-base font-bold text-[#0D2240] bg-blue-50/60 rounded-lg"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            About Dr. [Your Name]
          </a>
          <a
            href="#featured"
            onClick={(e) => { e.preventDefault(); scrollToSection('featured'); }}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Featured Articles
          </a>
          <a
            href="#journey"
            onClick={(e) => { e.preventDefault(); scrollToSection('journey'); }}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            From the GI Journey
          </a>
          <a
            href="#insights"
            onClick={(e) => { e.preventDefault(); scrollToSection('insights'); }}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Digestive Health Insights
          </a>
          <a
            href="#topics"
            onClick={(e) => { e.preventDefault(); scrollToSection('topics'); }}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Explore Topics
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Contact & Socials
          </a>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSubscribe(); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0D2240] text-white font-semibold text-sm rounded-lg shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Subscribe to Newsletter</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

