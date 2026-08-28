import React from 'react';
import { 
  GraduationCap, 
  Stethoscope, 
  Activity, 
  Flame, 
  ShieldCheck, 
  Dna, 
  Apple, 
  Video, 
  FolderHeart, 
  HeartHandshake, 
  ArrowRight 
} from 'lucide-react';
import { TOPICS, Topic } from '../data/blogData';

interface TopicsSectionProps {
  onSelectTopic: (topic: Topic) => void;
}

export const TopicsSection: React.FC<TopicsSectionProps> = ({ onSelectTopic }) => {
  const getTopicIcon = (id: string) => {
    switch (id) {
      case 'gi-fellowship':
        return <GraduationCap className="w-6 h-6" />;
      case 'clinical-experiences':
        return <Stethoscope className="w-6 h-6" />;
      case 'ibs-functional':
        return <Activity className="w-6 h-6" />;
      case 'gerd-reflux':
        return <Flame className="w-6 h-6" />;
      case 'colon-health':
        return <ShieldCheck className="w-6 h-6" />;
      case 'gut-microbiome':
        return <Dna className="w-6 h-6" />;
      case 'nutrition-diet':
        return <Apple className="w-6 h-6" />;
      case 'endoscopy-procedures':
        return <Video className="w-6 h-6" />;
      case 'resources-patients':
        return <FolderHeart className="w-6 h-6" />;
      case 'mental-wellbeing':
        return <HeartHandshake className="w-6 h-6" />;
      default:
        return <Activity className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-14 bg-white border-y border-slate-200/80" id="topics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-slate-100 gap-2">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D2240] tracking-tight">
              Explore Topics
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Browse clinical stories, disease management guides, and evidence-based GI science
            </p>
          </div>
          <a 
            href="#all-topics" 
            onClick={(e) => { e.preventDefault(); onSelectTopic(TOPICS[0]); }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>View all topics</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Topics Grid - 5 columns on desktop, 2-3 on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
          {TOPICS.map((topic) => (
            <div
              key={topic.id}
              onClick={() => onSelectTopic(topic)}
              className="flex flex-col items-center text-center p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-200 cursor-pointer group hover:-translate-y-1 hover:shadow-sm"
            >
              <div className="w-13 h-13 rounded-full bg-slate-100 text-blue-700 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 shadow-2xs group-hover:shadow-md">
                {getTopicIcon(topic.id)}
              </div>
              <h3 className="font-sans text-xs sm:text-sm font-bold text-[#0D2240] group-hover:text-blue-700 transition-colors leading-tight">
                {topic.name}
              </h3>
              <span className="text-[10px] text-slate-400 font-medium mt-1">
                {topic.count} articles
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
