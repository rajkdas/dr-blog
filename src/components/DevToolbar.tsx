import React from 'react';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  Laptop, 
  Code2, 
  Download, 
  Layers, 
  FileCode,
  ExternalLink
} from 'lucide-react';
import { getFullHtmlTemplate, getStyleCssContent } from '../utils/htmlTemplate';

export type ViewportMode = 'full' | 'laptop' | 'tablet' | 'mobile';

interface DevToolbarProps {
  currentViewport: ViewportMode;
  onSetViewport: (mode: ViewportMode) => void;
  onOpenHtmlCode: () => void;
  onOpenWpGuide: () => void;
  onOpenSearch: () => void;
}

export const DevToolbar: React.FC<DevToolbarProps> = ({
  currentViewport,
  onSetViewport,
  onOpenHtmlCode,
  onOpenWpGuide,
  onOpenSearch
}) => {
  const handleDownloadHtml = () => {
    const htmlCode = getFullHtmlTemplate();
    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadCss = () => {
    const cssCode = getStyleCssContent();
    const blob = new Blob([cssCode], { type: 'text/css;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'style.css';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="sticky top-0 z-50 bg-[#081220] border-b border-slate-800 text-slate-200 px-3 sm:px-6 py-2 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        
        {/* Left: Branding & Status */}
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-bold text-white tracking-tight font-serif hidden sm:inline">
            Dr. GI Medical Blog &bull; Bootstrap 5.3 + WordPress Ready
          </span>
          <span className="text-[10px] bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded-full border border-blue-700/50 font-mono">
            style.css Separated
          </span>
        </div>

        {/* Center: Viewport Tester Switcher */}
        <div className="flex items-center bg-slate-900/90 rounded-lg p-0.5 border border-slate-800">
          <button
            onClick={() => onSetViewport('full')}
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
              currentViewport === 'full' 
                ? 'bg-blue-600 text-white shadow-xs' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Desktop 100% View"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Desktop</span>
          </button>

          <button
            onClick={() => onSetViewport('laptop')}
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
              currentViewport === 'laptop' 
                ? 'bg-blue-600 text-white shadow-xs' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Laptop View (1024px)"
          >
            <Laptop className="w-3.5 h-3.5" />
            <span className="hidden md:inline">1024px</span>
          </button>

          <button
            onClick={() => onSetViewport('tablet')}
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
              currentViewport === 'tablet' 
                ? 'bg-blue-600 text-white shadow-xs' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Tablet View (768px)"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Tablet</span>
          </button>

          <button
            onClick={() => onSetViewport('mobile')}
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
              currentViewport === 'mobile' 
                ? 'bg-blue-600 text-white shadow-xs' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Mobile Device (375px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Mobile</span>
          </button>
        </div>

        {/* Right: Code & Download Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenHtmlCode}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Theme Code (HTML/CSS/PHP)</span>
          </button>

          <button
            onClick={handleDownloadHtml}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
            title="Download index.html"
          >
            <Download className="w-3.5 h-3.5" />
            <span>index.html</span>
          </button>

          <button
            onClick={handleDownloadCss}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
            title="Download style.css"
          >
            <FileCode className="w-3.5 h-3.5 text-blue-400" />
            <span>style.css</span>
          </button>

          <button
            onClick={onOpenWpGuide}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-indigo-900/40 hover:bg-indigo-900/70 text-indigo-200 rounded-lg text-xs font-semibold border border-indigo-700/50 transition-all cursor-pointer"
            title="WordPress Theme Conversion Architecture"
          >
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden lg:inline">WP Guide</span>
          </button>

          <a
            href="/index.html"
            target="_blank"
            rel="noreferrer"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            title="Open pure standalone HTML in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
