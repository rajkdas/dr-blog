import React from 'react';
import { DOCTOR_PROFILE } from '../data/blogData';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F2F7FD] via-[#F7FAFE] to-[#EFF5FD] pt-10 pb-12 sm:pt-14 sm:pb-16" id="home">
      
      {/* Soft Radial Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-radial from-[#DBEAFE]/40 to-transparent rounded-full pointer-events-none blur-3xl"></div>

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
            <div className="font-script italic text-2xl sm:text-3xl font-bold text-[#1E3A8A] tracking-wide select-none py-0.5">
              Stories. Science. Better Digestive Health.
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

          {/* Right Column: Anatomical Sketch + Geometric Constellation + Sticky Note */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[360px] sm:min-h-[420px]">
            
            <div className="relative w-full max-w-[540px] h-[380px] sm:h-[430px] flex items-center justify-center">
              
              {/* Anatomical Gastrointestinal Blueprint Sketch with Neural/Constellation Web */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg 
                  viewBox="0 0 480 420" 
                  className="w-full h-full max-w-[460px] max-h-[410px] select-none" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Soft Shading Gradients for 3D Organ Volume */}
                    <linearGradient id="stomachVolumeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EFF6FF" stopOpacity="0.8" />
                      <stop offset="60%" stopColor="#DBEAFE" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0.25" />
                    </linearGradient>
                    <linearGradient id="colonVolumeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="intestineVolumeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EFF6FF" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>

                  {/* Geometric Constellation / Poly Web in Background */}
                  <g stroke="#93C5FD" strokeWidth="0.85" strokeOpacity="0.55" strokeDasharray="3 3">
                    <polygon points="170,40 280,60 360,140 380,260 310,370 180,390 90,300 80,160" fill="none" />
                    <line x1="170" y1="40" x2="360" y2="140" />
                    <line x1="280" y1="60" x2="380" y2="260" />
                    <line x1="360" y1="140" x2="180" y2="390" />
                    <line x1="380" y1="260" x2="90" y2="300" />
                    <line x1="310" y1="370" x2="80" y2="160" />
                    <line x1="180" y1="390" x2="170" y2="40" />
                    <line x1="90" y1="300" x2="280" y2="60" />
                    <line x1="80" y1="160" x2="220" y2="210" />
                    <line x1="360" y1="140" x2="220" y2="210" />
                    <line x1="180" y1="390" x2="220" y2="210" />
                  </g>

                  {/* Constellation Circular Nodes */}
                  <g fill="#60A5FA" opacity="0.8">
                    <circle cx="170" cy="40" r="3" />
                    <circle cx="280" cy="60" r="2.5" />
                    <circle cx="360" cy="140" r="3" />
                    <circle cx="380" cy="260" r="2.5" />
                    <circle cx="310" cy="370" r="3" />
                    <circle cx="180" cy="390" r="3" />
                    <circle cx="90" cy="300" r="2.5" />
                    <circle cx="80" cy="160" r="3" />
                    <circle cx="220" cy="210" r="2.5" />
                    <circle cx="130" cy="90" r="2" />
                    <circle cx="320" cy="80" r="2" />
                    <circle cx="130" cy="350" r="2" />
                  </g>

                  {/* ======================================================== */}
                  {/* MEDICAL ENGRAVING: HUMAN GASTROINTESTINAL TRACT           */}
                  {/* ======================================================== */}

                  {/* STOMACH (Top Center / Left) */}
                  <g>
                    {/* Stomach Body & Greater / Lesser Curvature */}
                    <path 
                      d="M210 25 L210 65 C210 85 180 95 168 120 C150 158 190 185 228 165 C252 148 248 115 228 92 C216 78 212 55 210 25 Z" 
                      fill="url(#stomachVolumeGrad)" 
                      stroke="#2B4B75" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />

                    {/* Esophagus Details */}
                    <path d="M202 25 L202 60" stroke="#3B5D88" strokeWidth="1.6" />
                    <path d="M218 25 L218 60" stroke="#3B5D88" strokeWidth="1.6" />

                    {/* Stomach Rugal Folds & Cross-hatch Shading */}
                    <g stroke="#3B5D88" strokeWidth="1.1" opacity="0.65" strokeLinecap="round">
                      <path d="M178 112 C192 120 210 115 222 105" />
                      <path d="M172 126 C188 135 212 130 228 118" />
                      <path d="M170 140 C186 150 215 145 232 130" />
                      <path d="M176 154 C192 162 216 158 230 144" />
                      
                      {/* Greater Curvature Hatch Lines */}
                      <path d="M165 125 L172 128 M162 135 L170 138 M162 145 L171 147 M166 155 L175 156 M175 165 L182 163 M188 172 L194 167 M202 175 L206 169" />
                      {/* Lesser Curvature Fine Hatching */}
                      <path d="M218 85 L224 88 M222 95 L228 98 M225 105 L231 106 M225 115 L230 114 M222 125 L227 122" />
                    </g>

                    {/* Pyloric Sphincter & Duodenal C-Loop */}
                    <path d="M228 165 C245 178 242 202 218 208" fill="none" stroke="#2B4B75" strokeWidth="2.2" strokeLinecap="round" />
                    <path d="M232 172 C240 182 238 196 222 202" fill="none" stroke="#3B5D88" strokeWidth="1.2" opacity="0.6" />
                  </g>

                  {/* SMALL INTESTINE (Dense Central Convolution Loops) */}
                  <g stroke="#2B4B75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="url(#intestineVolumeGrad)">
                    <path d="M185 195 C170 198 162 212 176 218 C192 224 198 208 214 216 C230 224 220 240 200 236 C180 232 172 250 190 256 C210 262 218 246 234 254 C248 262 232 278 210 274 C188 270 178 290 198 296 C218 302 232 288 246 296 C256 304 240 318 220 315 C198 312 188 330 208 335" />
                    <path d="M172 225 C158 230 152 245 168 250 C184 255 188 240 204 248 C220 256 208 272 188 268 C168 264 160 282 178 288 C196 294 206 280 222 288 C238 296 226 310 206 306" />
                    <path d="M198 210 C212 214 222 202 235 210 C248 218 238 232 220 228 C202 224 194 240 210 245 C226 250 234 238 246 244" />
                    <path d="M182 262 C196 266 206 254 220 262 C234 270 222 284 204 280 C186 276 178 292 194 298" />
                    <path d="M190 285 C205 290 214 276 228 284 C242 292 230 306 212 302 C194 298 186 314 202 320" />
                  </g>

                  {/* Intestinal Fine Crease Lines */}
                  <g stroke="#3B5D88" strokeWidth="1" opacity="0.6" strokeLinecap="round">
                    <path d="M175 215 C180 218 185 216 188 212" />
                    <path d="M195 232 C200 235 208 232 212 228" />
                    <path d="M180 252 C186 256 194 254 198 250" />
                    <path d="M200 270 C206 274 214 272 218 266" />
                    <path d="M185 290 C190 294 198 292 202 286" />
                    <path d="M205 310 C210 314 218 312 222 306" />
                    <path d="M170 242 L176 244 M162 272 L168 274 M180 324 L186 326" />
                  </g>

                  {/* ======================================================== */}
                  {/* LARGE INTESTINE (COLON) - HAUSTRAL SEGMENTATIONS & TAENIA */}
                  {/* ======================================================== */}
                  <g stroke="#1E3A5F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="url(#colonVolumeGrad)">
                    
                    {/* Ascending Colon & Cecum (Anatomical Right / Viewer Left) */}
                    <path d="M135 340 C120 335 116 318 126 308 C116 296 118 280 128 270 C118 258 120 242 130 232 C120 220 122 204 132 194 C122 182 124 166 134 156 C124 144 130 130 145 125" />
                    
                    {/* Transverse Colon (Arching across top of small intestine) */}
                    <path d="M145 125 C160 120 178 128 194 122 C210 118 228 126 244 120 C260 116 276 124 292 128 C306 132 316 142 320 156" />
                    
                    {/* Descending Colon & Sigmoid (Anatomical Left / Viewer Right) */}
                    <path d="M320 156 C330 168 326 184 316 196 C326 208 324 224 314 236 C324 248 322 264 312 276 C322 288 320 304 310 316 C316 330 306 346 290 354 L272 368" />
                  </g>

                  {/* Inner Border of Colon (Closing the Lumen) */}
                  <g stroke="#2B4B75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <path d="M152 325 C142 315 140 300 148 290 C140 280 142 265 150 255 C142 245 144 230 152 220 C144 210 146 195 154 185 C146 175 152 160 164 152" />
                    <path d="M164 152 C178 146 192 152 206 148 C220 144 236 150 250 146 C264 142 278 148 290 154 C298 162 300 175 294 185" />
                    <path d="M294 185 C302 195 300 210 292 220 C300 230 298 245 290 255 C298 265 296 280 288 290 C294 302 288 318 276 325" />
                  </g>

                  {/* Haustral Creases & Medical Engraving Shading Across Colon Segments */}
                  <g stroke="#3B5D88" strokeWidth="1.3" opacity="0.75" strokeLinecap="round">
                    {/* Ascending Colon Haustra lines */}
                    <path d="M126 308 C134 312 142 308 148 290" />
                    <path d="M128 270 C136 274 144 270 150 255" />
                    <path d="M130 232 C138 236 146 232 152 220" />
                    <path d="M132 194 C140 198 148 194 154 185" />
                    <path d="M134 156 C142 160 150 156 164 152" />

                    {/* Transverse Colon Haustra lines */}
                    <path d="M170 122 C172 134 168 144 170 150" />
                    <path d="M206 120 C208 132 204 142 206 148" />
                    <path d="M244 120 C246 132 242 142 244 146" />
                    <path d="M280 124 C282 136 278 146 280 152" />

                    {/* Descending Colon Haustra lines */}
                    <path d="M316 196 C308 200 300 196 294 185" />
                    <path d="M314 236 C306 240 298 236 292 220" />
                    <path d="M312 276 C304 280 296 276 290 255" />
                    <path d="M310 316 C302 320 294 316 288 290" />

                    {/* Taenia Coli Longitudinal Muscle Band */}
                    <path d="M136 330 C130 270 134 200 148 140 C170 132 270 134 304 150 C316 200 318 280 296 345" stroke="#1E3A5F" strokeWidth="1" strokeDasharray="6 3" fill="none" opacity="0.6" />
                  </g>
                </svg>
              </div>

              {/* Overlapping Realistic Sticky Note with Handwritten Message */}
              <div 
                className="absolute right-0 sm:right-2 top-8 sm:top-12 z-20 transition-transform duration-300 hover:scale-105 select-none"
                style={{ filter: 'drop-shadow(0 14px 24px rgba(13, 34, 64, 0.12))' }}
              >
                <div className="w-[200px] sm:w-[220px] h-[200px] sm:h-[220px] bg-[#FFFEEA] border border-[#F3EBB8] p-5 sm:p-6 flex flex-col justify-between rounded-xs relative">
                  
                  {/* Subtle top adhesive reflection */}
                  <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-white/50 to-transparent pointer-events-none"></div>

                  {/* Handwritten Doctor Text */}
                  <div className="font-script text-[21px] sm:text-[23px] leading-[1.3] text-[#0D2240] font-bold pt-1">
                    A doctor&apos;s journey<br />
                    to learn, share<br />
                    and make a<br />
                    difference.
                  </div>

                  {/* Hand-drawn Outline Heart */}
                  <div className="flex justify-start items-center pl-1 pb-1">
                    <svg 
                      className="w-7 h-7 text-[#0D2240] hover:text-[#1A56DB] transition-colors" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
