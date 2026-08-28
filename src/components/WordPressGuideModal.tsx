import React from 'react';
import { X, Layers, Code, CheckCircle, FileText, Globe, Sparkles } from 'lucide-react';

interface WordPressGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WordPressGuideModal: React.FC<WordPressGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const templateParts = [
    {
      file: "header.php",
      desc: "Contains <!DOCTYPE html>, <head> with wp_head(), SEO tags, Google Fonts, Bootstrap CSS, and the <header> with wp_nav_menu() and brand logo.",
      hook: "wp_head(); & wp_nav_menu( array('theme_location' => 'primary') );"
    },
    {
      file: "index.php / front-page.php",
      desc: "Houses the Hero section, Featured Article query loop, and 3-column content layout using standard WP_Query loops for 'journey' and 'insights' categories.",
      hook: "new WP_Query( array('category_name' => 'gi-journey', 'posts_per_page' => 4) );"
    },
    {
      file: "sidebar.php",
      desc: "Houses the 'Most Popular' ranking list and the 'Stay in the loop' newsletter widget via dynamic_sidebar('sidebar-1').",
      hook: "dynamic_sidebar( 'main-sidebar' );"
    },
    {
      file: "single.php",
      desc: "Renders the full single post layout with author bio box, estimated reading time metadata, clinical takeaways box, and comments_template().",
      hook: "the_content(); & comments_template();"
    },
    {
      file: "taxonomy-topic.php / category.php",
      desc: "Renders the 10 topic taxonomy archives with breadcrumbs, category description, and paginated article grids.",
      hook: "single_cat_title(); & the_posts_pagination();"
    },
    {
      file: "footer.php",
      desc: "Contains the pre-footer newsletter banner, 4-column footer widgets, social links, copyright, and wp_footer().",
      hook: "wp_footer();"
    },
    {
      file: "functions.php",
      desc: "Enqueues Bootstrap 5.3 CSS, jQuery, Bootstrap JS, registers navigation menus, widget sidebars, custom post types, and thumbnail sizes.",
      hook: "wp_enqueue_style( 'bootstrap-css', ... ); wp_enqueue_script( 'bootstrap-js', ... );"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0D2240] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/30 text-blue-300 rounded-lg">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-white leading-tight">
                WordPress Theme Conversion Architecture
              </h2>
              <p className="text-xs text-blue-200">
                How this standard HTML5/Bootstrap template seamlessly maps to custom WordPress files
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong>Pre-engineered for Custom WP Theme Development:</strong> All CSS classes, grid wrappers, data-attributes, and semantic tags (`&lt;header&gt;`, `&lt;main&gt;`, `&lt;article&gt;`, `&lt;aside&gt;`, `&lt;footer&gt;`) have been structured cleanly with comments inside the HTML file to make splitting into standard PHP template parts instant.
            </div>
          </div>

          {/* Template Part Breakdown */}
          <div className="space-y-3">
            <h3 className="font-serif text-base font-bold text-[#0D2240]">
              WordPress Template File Breakdown
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {templateParts.map((part, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-200 bg-[#FAFBFD] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <code className="font-bold text-sm text-[#0D2240] bg-white px-2 py-0.5 rounded border border-slate-200">
                        {part.file}
                      </code>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">Part {i + 1}</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    {part.desc}
                  </p>
                  <div className="text-[11px] font-mono text-blue-700 bg-blue-50/80 px-2.5 py-1 rounded border border-blue-100/60 overflow-x-auto">
                    {part.hook}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Post Types & Taxonomies Recommendation */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs text-slate-600">
            <h4 className="font-serif text-sm font-bold text-[#0D2240]">
              Recommended Custom Taxonomies &amp; ACF Fields
            </h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Custom Taxonomy:</strong> <code>topic</code> (Hierarchical for the 10 Clinical Topics).</li>
              <li><strong>ACF Custom Field:</strong> <code>reading_time</code> (Number / Text: e.g. &ldquo;6 min read&rdquo;).</li>
              <li><strong>ACF Custom Field:</strong> <code>is_featured_article</code> (True/False toggle for Hero spotlight).</li>
              <li><strong>ACF Custom Field:</strong> <code>clinical_takeaways</code> (Repeater field for bullet points).</li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#0D2240] hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
          >
            Got it, Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
