import { User, Code2, Brain, Compass, Cpu, Download } from 'lucide-react';
import { aboutSections } from '@/data/portfolio';
import { useState } from 'react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  User,
  Code2,
  Brain,
  Compass,
  Cpu,
};

export default function About({ className = '' }: { className?: string }) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleExpand = (title: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <section id="about" className={`relative py-24 sm:py-32 grid-bg ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="section-label mb-3">// MODULE 01</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            IDENTITY
          </h2>
          <div className="w-20 h-px bg-terminal-glow/30 mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {aboutSections.map((section, i) => {
            const Icon = iconMap[section.icon] || User;
            const isExpanded = expandedSections.has(section.title);
            const shouldTruncate = section.content.length > 200;
            const displayText = shouldTruncate && !isExpanded
              ? truncateText(section.content, 200)
              : section.content;

            return (
              <div
                key={section.title}
                className="glass-panel glass-panel-hover corner-decor rounded-lg p-6 sm:p-7 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-terminal-glow/20 rounded bg-terminal-glow/5 group-hover:border-terminal-glow/40 group-hover:bg-terminal-glow/10 transition-all duration-300">
                    <Icon className="w-5 h-5 text-terminal-glow" />
                  </div>
                  <h3 className="font-mono text-sm font-bold text-terminal-glow tracking-wider">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {displayText}
                </p>
                {shouldTruncate && (
                  <button
                    onClick={() => toggleExpand(section.title)}
                    className="mt-3 font-mono text-xs text-terminal-glow hover:text-terminal-glow/80 transition-colors"
                  >
                    {isExpanded ? 'Read less' : 'Read more'}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* CV CTA */}
        <div className="mt-12 glass-panel corner-decor rounded-lg p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-mono text-sm text-terminal-glow tracking-wider mb-2">
                WANT THE FULL PROFILE?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Download my latest CV for a concise overview of my experience,
                education, technical skills, and projects.
              </p>
            </div>
            <a
              href="/cv/Aphiwe Andrew Ncayiyane - Latest CV.pdf"
              download="Aphiwe Andrew Ncayiyane - Latest CV.pdf"
              className="terminal-btn flex items-center justify-center gap-2 whitespace-nowrap"
              aria-label="Download Aphiwe Andrew Ncayiyane CV"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
