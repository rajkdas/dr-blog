import React from 'react';
import { Users, PenTool, BookOpen, ArrowRight } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/blogData';

interface DoctorBioSectionProps {
  onReadStory: () => void;
}

export const DoctorBioSection: React.FC<DoctorBioSectionProps> = ({ onReadStory }) => {
  return (
    <section className="py-14 bg-[#FAFBFD]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Doctor Portrait */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80" 
                  alt="Dr. Portrait" 
                  className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover ring-4 ring-blue-600/20 p-1 bg-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-2 -right-2 bg-blue-700 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                  GI FELLOW
                </div>
              </div>
            </div>

            {/* Doctor Story Bio */}
            <div className="lg:col-span-5 space-y-3.5 text-center lg:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D2240] tracking-tight">
                Meet the Doctor Behind the Stories
              </h2>
              
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {DOCTOR_PROFILE.bio}
              </p>

              <div className="pt-1">
                <button
                  onClick={onReadStory}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors cursor-pointer group"
                >
                  <span>Read my story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* 3 Metric Stats */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-6">
              <div className="grid grid-cols-3 gap-2 text-center">
                
                {/* Stat 1 */}
                <div className="space-y-1">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-1">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0D2240]">
                    10+
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">
                    Years in Clinical Practice
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="space-y-1">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-1">
                    <PenTool className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0D2240]">
                    500+
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">
                    Articles & Clinical Insights
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="space-y-1">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-1">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-lg sm:text-xl font-extrabold text-[#0D2240] leading-none pt-1.5 pb-1">
                    One Mission
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">
                    Better Digestive Health for All
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
