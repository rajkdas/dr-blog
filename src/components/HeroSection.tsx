import React from 'react';
import { DOCTOR_PROFILE } from '../data/blogData';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F0] pt-10 pb-12 sm:pt-14 sm:pb-16" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Typography & CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0D2240] tracking-tight leading-[1.12]">
              The GI Journey,<br />
              Shared.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              {DOCTOR_PROFILE.heroSubtitle}
            </p>

            {/* Handwritten Tagline */}
            <div className="font-script italic text-2xl sm:text-3xl font-bold text-[#0D2240] tracking-wide select-none py-0.5">
              Stories. Science. Compassion.
            </div>

            {/* CTA Button */}
            <div className="pt-1">
              <button
                onClick={onExploreClick}
                id="explore-articles-cta"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#0D2240] hover:bg-[#1A365D] text-white font-semibold text-sm sm:text-base rounded-md shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <span>Explore the latest articles</span>
                <span className="text-lg leading-none">→</span>
              </button>
            </div>

          </div>

          {/* Right Column: Anatomical Sketch + Geometric Constellation + Sticky Note + Pen */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[340px] sm:min-h-[400px]">
            
            <div className="relative w-full max-w-[500px] h-[360px] sm:h-[400px] flex items-center justify-center">
              
              {/* Anatomical Gastrointestinal Blueprint Sketch with Neural/Constellation Nodes */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg 
                  viewBox="0 0 460 400" 
                  className="w-full h-full max-w-[420px] max-h-[380px] select-none" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="stomachGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="penBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0B1B3D" />
                      <stop offset="50%" stopColor="#172B56" />
                      <stop offset="100%" stopColor="#071126" />
                    </linearGradient>
                    <linearGradient id="penGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F6D365" />
                      <stop offset="50%" stopColor="#FDA085" />
                      <stop offset="100%" stopColor="#E6B980" />
                    </linearGradient>
                    <filter id="stickyShadow" x="-15%" y="-15%" width="135%" height="135%">
                      <feDropShadow dx="6" dy="12" stdDeviation="10" floodColor="#000000" floodOpacity="0.16" />
                    </filter>
                    <filter id="penShadow" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="4" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.25" />
                    </filter>
                  </defs>

                  {/* Constellation / Geometric Network Faint Lines & Nodes */}
                  <g stroke="#93C5FD" strokeWidth="0.8" strokeOpacity="0.6" strokeDasharray="3 3">
                    <line x1="80" y1="120" x2="160" y2="70" />
                    <line x1="160" y1="70" x2="230" y2="40" />
                    <line x1="230" y1="40" x2="280" y2="90" />
                    <line x1="80" y1="120" x2="110" y2="240" />
                    <line x1="110" y1="240" x2="160" y2="350" />
                    <line x1="160" y1="350" x2="240" y2="370" />
                    <line x1="240" y1="370" x2="310" y2="320" />
                    <line x1="310" y1="320" x2="330" y2="210" />
                    <line x1="280" y1="90" x2="330" y2="210" />
                    <line x1="160" y1="70" x2="190" y2="180" />
                    <line x1="190" y1="180" x2="270" y2="240" />
                    <line x1="110" y1="240" x2="190" y2="180" />
                  </g>
                  <g fill="#60A5FA" opacity="0.7">
                    <circle cx="80" cy="120" r="2.5" />
                    <circle cx="160" cy="70" r="3" />
                    <circle cx="230" cy="40" r="2.5" />
                    <circle cx="280" cy="90" r="3" />
                    <circle cx="110" cy="240" r="2.5" />
                    <circle cx="160" cy="350" r="3" />
                    <circle cx="240" cy="370" r="2.5" />
                    <circle cx="310" cy="320" r="3" />
                    <circle cx="330" cy="210" r="2.5" />
                    <circle cx="190" cy="180" r="3" />
                    <circle cx="270" cy="240" r="2.5" />
                  </g>

                  {/* Scientific Engraved Anatomical Illustration of GI Tract */}
                  <g stroke="#334155" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.85">
                    {/* Esophagus & Stomach */}
                    <path d="M205 30 L205 75 C205 95 175 105 165 130 C152 165 195 185 225 165 C245 150 240 120 220 95 C210 82 205 55 205 30" fill="url(#stomachGrad)" strokeWidth="2.2" />
                    {/* Stomach muscle cross-hatch shading */}
                    <path d="M178 120 C190 128 205 125 218 115" strokeWidth="1" strokeOpacity="0.5" />
                    <path d="M172 135 C188 145 208 142 225 130" strokeWidth="1" strokeOpacity="0.5" />
                    <path d="M175 150 C192 160 210 156 226 145" strokeWidth="1" strokeOpacity="0.5" />

                    {/* Duodenum */}
                    <path d="M225 165 C240 180 235 205 210 210" strokeWidth="2" />

                    {/* Intestinal Convolution Loops (Small Intestines) */}
                    <path d="M185 200 C170 205 165 220 180 225 C195 230 200 215 215 225 C230 235 215 250 195 245 C175 240 165 260 185 265 C205 270 215 255 230 265 C245 275 225 290 200 285 C180 280 170 300 190 305 C210 310 225 295 240 305" strokeWidth="2" stroke="#475569" />
                    <path d="M175 230 C160 235 155 250 170 255 C185 260 190 245 205 255 C220 265 205 280 185 275" strokeWidth="1.5" stroke="#64748B" />
                    <path d="M195 215 C210 220 220 205 235 215 C250 225 235 240 215 235" strokeWidth="1.5" stroke="#64748B" />
                    <path d="M180 270 C195 275 205 260 220 270 C235 280 220 295 200 290" strokeWidth="1.5" stroke="#64748B" />

                    {/* Large Intestine (Colon) with Haustral Segmentations */}
                    {/* Ascending Colon (Right/Left flipped anatomically) */}
                    <path d="M140 310 C130 300 132 285 138 275 C130 265 132 250 138 240 C130 230 132 215 138 205 C130 195 132 180 138 170 C130 160 135 145 150 140" strokeWidth="2.8" stroke="#1E293B" />
                    
                    {/* Transverse Colon */}
                    <path d="M150 140 C165 135 180 142 195 138 C210 135 225 142 240 138 C255 135 270 140 285 145" strokeWidth="2.8" stroke="#1E293B" />
                    
                    {/* Descending Colon */}
                    <path d="M285 145 C295 155 292 170 288 180 C295 190 292 205 288 215 C295 225 292 240 288 250 C295 260 292 275 288 285 C292 300 285 315 270 325 L255 340" strokeWidth="2.8" stroke="#1E293B" />

                    {/* Haustra internal crease lines */}
                    <path d="M135 275 Q145 278 152 275" strokeWidth="1.2" stroke="#64748B" />
                    <path d="M135 240 Q145 243 152 240" strokeWidth="1.2" stroke="#64748B" />
                    <path d="M135 205 Q145 208 152 205" strokeWidth="1.2" stroke="#64748B" />
                    <path d="M135 170 Q145 173 152 170" strokeWidth="1.2" stroke="#64748B" />
                    <path d="M170 137 Q173 147 170 155" strokeWidth="1.2" stroke="#64748B" />
                    <path d="M210 137 Q213 147 210 155" strokeWidth="1.2" stroke="#64748B" />
                    <path d="M250 137 Q253 147 250 155" strokeWidth="1.2" stroke="#64748B" />
                    <path d="M275 180 Q283 183 290 180" strokeWidth="1.2" stroke="#64748B" />
                    <path d="M275 215 Q283 218 290 215" strokeWidth="1.2" stroke="#64748B" />
                    <path d="M275 250 Q283 253 290 250" strokeWidth="1.2" stroke="#64748B" />
                    <path d="M275 285 Q283 288 290 285" strokeWidth="1.2" stroke="#64748B" />
                  </g>
                </svg>
              </div>

              {/* Overlapping Realistic Sticky Note with Handwritten Doctor Message */}
              <div 
                className="absolute right-0 sm:right-2 top-8 sm:top-12 z-20 transform rotate-2 sm:rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105 select-none"
                style={{ filter: 'drop-shadow(0 12px 20px rgba(0,0,0,0.12))' }}
              >
                <div className="w-[190px] sm:w-[210px] h-[190px] sm:h-[210px] bg-[#FFFEEA] border border-[#F3EBB8] p-5 flex flex-col justify-between rounded-sm relative">
                  
                  {/* Subtle top peel reflection */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>

                  {/* Handwritten Content */}
                  <div className="font-script text-[22px] sm:text-[24px] leading-[1.3] text-[#1E293B] font-bold pt-1">
                    A doctor&apos;s journey<br />
                    to heal minds.<br />
                    and improve lives.
                  </div>

                  {/* Heart Sketch */}
                  <div className="flex justify-start items-center pl-1 pb-1">
                    <svg className="w-6 h-6 text-[#1A56DB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                </div>

                {/* Realistic 3D Luxury Pen Laid Across Note */}
                <div 
                  className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-28 sm:w-32 h-44 sm:h-48 pointer-events-none transform rotate-[28deg]"
                  style={{ filter: 'drop-shadow(4px 10px 8px rgba(0,0,0,0.3))' }}
                >
                  <svg viewBox="0 0 60 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pen Cap / Clip */}
                    <path d="M26 15 L34 15 L33 55 L27 55 Z" fill="url(#penGoldGrad)" />
                    <rect x="23" y="10" width="14" height="6" rx="2" fill="url(#penGoldGrad)" />
                    {/* Main Pen Body */}
                    <path d="M25 55 L35 55 L33 130 L27 130 Z" fill="url(#penBodyGrad)" />
                    {/* Metallic Gold Middle Rings */}
                    <rect x="24.5" y="55" width="11" height="4" fill="url(#penGoldGrad)" />
                    <rect x="25" y="128" width="10" height="3" fill="url(#penGoldGrad)" />
                    {/* Pen Nib Taper */}
                    <path d="M27 131 L33 131 L31 160 L29 160 Z" fill="url(#penGoldGrad)" />
                    {/* Ballpoint Tip */}
                    <circle cx="30" cy="162" r="1.5" fill="#0D2240" />
                    {/* Pen Highlights */}
                    <line x1="28" y1="20" x2="28" y2="125" stroke="white" strokeWidth="1.2" strokeOpacity="0.4" />
                  </svg>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

