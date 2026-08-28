import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode2, ExternalLink, Code2, Layers, FileText } from 'lucide-react';
import { 
  getFullHtmlTemplate, 
  getStyleCssContent, 
  getMainJsContent,
  getWordPressHeaderPhp,
  getWordPressFooterPhp,
  getWordPressFunctionsPhp
} from '../utils/htmlTemplate';

interface HtmlCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'html' | 'css' | 'js' | 'wp_header' | 'wp_footer' | 'wp_functions';

export const HtmlCodeModal: React.FC<HtmlCodeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('html');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const htmlCode = getFullHtmlTemplate();
  const cssCode = getStyleCssContent();
  const jsCode = getMainJsContent();
  const headerPhp = getWordPressHeaderPhp();
  const footerPhp = getWordPressFooterPhp();
  const functionsPhp = getWordPressFunctionsPhp();

  const getActiveCode = () => {
    switch (activeTab) {
      case 'html': return { code: htmlCode, filename: 'index.html', type: 'text/html' };
      case 'css': return { code: cssCode, filename: 'style.css', type: 'text/css' };
      case 'js': return { code: jsCode, filename: 'main.js', type: 'text/javascript' };
      case 'wp_header': return { code: headerPhp, filename: 'header.php', type: 'text/x-php' };
      case 'wp_footer': return { code: footerPhp, filename: 'footer.php', type: 'text/x-php' };
      case 'wp_functions': return { code: functionsPhp, filename: 'functions.php', type: 'text/x-php' };
    }
  };

  const currentFile = getActiveCode();

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([currentFile.code], { type: `${currentFile.type};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = currentFile.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-[#0B1322] text-slate-200 rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-800 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#111C30] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/20">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-white leading-tight">
                WordPress &amp; HTML5 Theme Source Files
              </h2>
              <p className="text-xs text-slate-400">
                Separated CSS (style.css), Standard HTML5, jQuery scripts, and ready-to-use WordPress theme files.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : `Copy ${currentFile.filename}`}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-bold border border-slate-700 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download {currentFile.filename}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#0E1729] px-6 py-2 border-b border-slate-800 flex flex-wrap gap-1.5 items-center">
          <button
            onClick={() => setActiveTab('html')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'html' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>index.html</span>
          </button>

          <button
            onClick={() => setActiveTab('css')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'css' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>style.css (WordPress Root)</span>
          </button>

          <button
            onClick={() => setActiveTab('js')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'js' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <FileCode2 className="w-3.5 h-3.5" />
            <span>js/main.js</span>
          </button>

          <div className="h-4 w-px bg-slate-700 mx-1 hidden sm:block"></div>

          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider hidden sm:inline">WordPress:</span>

          <button
            onClick={() => setActiveTab('wp_header')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'wp_header' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>header.php</span>
          </button>

          <button
            onClick={() => setActiveTab('wp_footer')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'wp_footer' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>footer.php</span>
          </button>

          <button
            onClick={() => setActiveTab('wp_functions')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'wp_functions' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>functions.php</span>
          </button>
        </div>

        {/* Code Content Viewport */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-[#070D18] font-mono text-xs text-slate-300 leading-relaxed select-all">
          <pre className="m-0 whitespace-pre">
            <code>{currentFile.code}</code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#111C30] px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>Static Files:</span>
            <code className="text-blue-400 bg-slate-900 px-2 py-0.5 rounded">/index.html</code>
            <code className="text-emerald-400 bg-slate-900 px-2 py-0.5 rounded">/style.css</code>
            <code className="text-amber-400 bg-slate-900 px-2 py-0.5 rounded">/js/main.js</code>
          </div>
          <a
            href="/index.html"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-blue-400 hover:text-blue-300 font-bold"
          >
            <span>Open Standalone HTML in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
