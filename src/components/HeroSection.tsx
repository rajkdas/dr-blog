import React from 'react';
import { ArrowRight, PenTool, Sparkles } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/blogData';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F2F6FC] via-[#F8FAFD] to-[#FAFBFD] pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200/60" id="home">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0D2240_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/80 border border-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Gastroenterology Journal & Clinical Insights</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D2240] tracking-tight leading-[1.12]">
              {DOCTOR_PROFILE.heroTitle.split(',')[0]},<br />
              <span className="text-blue-900">{DOCTOR_PROFILE.heroTitle.split(',')[1] || 'Shared.'}</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              {DOCTOR_PROFILE.heroSubtitle}
            </p>

            {/* Handwritten Script Tagline */}
            <div className="font-script text-2xl sm:text-3xl text-blue-600 font-bold tracking-wide select-none py-1">
              {DOCTOR_PROFILE.heroTagline}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onExploreClick}
                id="explore-articles-cta"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#0D2240] hover:bg-[#1A56DB] text-white font-semibold text-base rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Explore the latest articles</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </div>

          </div>

          {/* Right Column: Anatomical Graphic & Doctor Post-it Note */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 relative">
            
            {/* Scientific Blueprint SVG Graphic */}
            <div className="relative group">
              <div className="w-64 h-72 sm:w-72 sm:h-80 bg-white/70 backdrop-blur-xs rounded-2xl p-5 border border-blue-100 shadow-sm flex items-center justify-center relative overflow-hidden">
                
                {/* Radial Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-transparent to-indigo-50/50"></div>

                <svg viewBox="0 0 280 320" className="w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Esophagus & Stomach */}
                  <path d="M140 10 V65 C140 90, 105 95, 100 120 C92 155, 145 168, 162 142 C172 122, 158 98, 140 68" stroke="#1A56DB" strokeWidth="2.8" strokeLinecap="round" fill="rgba(219, 234, 254, 0.4)"/>
                  
                  {/* Liver & Gallbladder */}
                  <path d="M98 75 C65 85, 58 112, 85 122 C108 127, 122 112, 98 75 Z" stroke="#2563EB" strokeWidth="2" fill="rgba(191, 219, 254, 0.35)"/>
                  
                  {/* Small Intestine convolutions */}
                  <path d="M135 160 C118 165, 112 182, 128 188 C148 194, 158 178, 168 194 C178 210, 152 226, 138 220 C122 214, 110 236, 132 246 C152 252, 168 240, 172 256 C178 272, 142 284, 125 278" stroke="#1D4ED8" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
                  
                  {/* Large Intestine / Colon frame */}
                  <path d="M72 265 C60 232, 60 172, 66 140 C72 118, 88 112, 110 112 H170 C192 112, 208 118, 214 140 C220 172, 220 232, 208 265" stroke="#0D2240" strokeWidth="3.2" strokeLinecap="round" strokeDasharray="5 3" fill="none"/>
                  
                  {/* Diagnostic Nodes */}
                  <circle cx="140" cy="38" r="3.5" fill="#1A56DB"/>
                  <circle cx="120" cy="142" r="4" fill="#2563EB"/>
                  <circle cx="150" cy="205" r="4" fill="#1D4ED8"/>
                  <circle cx="132" cy="260" r="4" fill="#1A56DB"/>
                  
                  {/* Pulse rings */}
                  <circle cx="120" cy="142" r="8" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.4" className="animate-ping"/>
                </svg>

                <div className="absolute bottom-2 right-3 text-[10px] text-slate-400 font-mono tracking-wider">
                  ANATOMICAL MAP
                </div>
              </div>
            </div>

            {/* Doctor Memo Sticky Note with Pen */}
            <div className="relative group">
              <div className="bg-[#FFFFF0] border border-[#F1E8B8] rounded-md p-6 shadow-md hover:shadow-xl transition-all duration-300 transform rotate-3 sm:rotate-2 hover:rotate-0 hover:scale-105 max-w-[240px] text-slate-800">
                
                {/* 3D Fountain Pen Icon */}
                <div className="absolute -top-4 -right-3 text-blue-700 bg-white p-1.5 rounded-full shadow-md border border-blue-100 rotate-45 group-hover:rotate-12 transition-transform duration-300">
                  <PenTool className="w-5 h-5 text-blue-600 fill-blue-500" />
                </div>

                <div className="font-script text-2xl leading-snug text-slate-800 pt-1">
                  A doctor&apos;s journey<br />
                  to heal minds.<br />
                  and improve lives.<br />
                  <span className="text-blue-600 text-2xl inline-block mt-1">💙</span>
                </div>
                
                <div className="mt-3 pt-2 border-t border-amber-200/50 flex items-center justify-between text-[11px] font-sans text-slate-500">
                  <span>Dr. [Your Name]</span>
                  <span className="font-mono">Fellowship Log</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
