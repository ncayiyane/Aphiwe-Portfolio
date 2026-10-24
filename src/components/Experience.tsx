import { Briefcase, Calendar } from 'lucide-react';
import { experience, profile } from '@/data/portfolio';
import { useState } from 'react';

export default function Experience({ className = '' }: { className?: string }) {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const truncateHighlights = (highlights: string[], isExpanded: boolean) => {
    if (isExpanded || highlights.length <= 3) return highlights;
    return highlights.slice(0, 3);
  };

  const shouldShowHighlights = (highlights: string[] | undefined, isExpanded: boolean) => {
    if (!highlights || highlights.length === 0) return false;
    return isExpanded;
  };
  return (
    <section id="experience" className={`relative py-24 sm:py-32 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="section-label mb-3">// MODULE 02</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            SYSTEM EXPERIENCE LOG
          </h2>
          <div className="w-20 h-px bg-terminal-glow/30 mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-terminal-glow/40 via-terminal-border to-transparent sm:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((exp, i) => {
              const isExpanded = expandedCards.has(i);
              const displayHighlights = exp.highlights ? truncateHighlights(exp.highlights, isExpanded) : [];
              const showReadMore = exp.highlights && exp.highlights.length > 3;

              return (
                <div
                  key={exp.company}
                  className={`relative flex flex-col sm:flex-row gap-6 ${
                    i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-4 sm:left-1/2 top-1.5 -translate-x-1/2 z-10">
                    <div className="w-3 h-3 rounded-full bg-terminal-glow border-2 border-terminal-bg shadow-[0_0_10px_rgba(0,255,65,0.5)]" />
                  </div>

                  {/* Spacer for alternating layout on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card */}
                  <div className={`pl-12 sm:pl-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
                    <div className="glass-panel glass-panel-hover rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Briefcase className="w-4 h-4 text-terminal-glow/60" />
                        <span className="font-mono text-xs text-terminal-glow/60 uppercase tracking-wider">
                          {exp.dates}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
                      <p className="font-mono text-sm text-terminal-glow mb-1">{exp.company}</p>
                      {i === 0 && (
                        <p className="font-mono text-xs text-gray-500 mb-3">Cape Town</p>
                      )}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      {showReadMore && (
                        <button
                          onClick={() => toggleExpand(i)}
                          className="mb-4 font-mono text-xs text-terminal-glow hover:text-terminal-glow/80 transition-colors"
                        >
                          {isExpanded ? 'Read less' : 'Read more'}
                        </button>
                      )}
                      {shouldShowHighlights(exp.highlights, isExpanded) && (
                        <div className="mb-4">
                          <p className="font-mono text-xs text-terminal-glow/60 uppercase tracking-wider mb-2">
                            Contribution Highlights
                          </p>
                          <ul className="space-y-2">
                            {displayHighlights.map((highlight, idx) => (
                              <li key={idx} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                                <span className="text-terminal-glow/40 mt-1">▹</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {isExpanded && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 font-mono text-xs text-gray-300 border border-terminal-border bg-terminal-surface/50 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16 glass-panel corner-decor rounded-lg p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-5 h-5 text-terminal-glow" />
            <h3 className="font-mono text-sm font-bold text-terminal-glow tracking-wider">
              EDUCATION
            </h3>
          </div>
          <div className="space-y-6">
            {profile.education.map((edu, idx) => (
              <div key={idx} className={`flex flex-col gap-3 ${idx < profile.education.length - 1 ? 'pb-6 border-b border-terminal-border/40' : ''}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <p className="text-white font-medium">{edu.degree}</p>
                    <p className="text-gray-500 text-sm">{edu.institution}</p>
                    {edu.dates && <p className="text-gray-600 text-xs font-mono mt-1">{edu.dates}</p>}
                  </div>
                  <span className={`font-mono text-xs px-3 py-1 border rounded self-start sm:self-center ${
                    edu.status === 'In Progress'
                      ? 'text-terminal-amber border-terminal-amber/30'
                      : 'text-terminal-glow/60 border-terminal-glow/20'
                  }`}>
                    {edu.status === 'In Progress' ? (
                      <>
                        IN PROGRESS
                        <span className="inline-flex ml-1">
                          <span className="w-1 h-1 bg-terminal-amber rounded-full animate-pulse" style={{ animationDelay: '0ms', animationDuration: '1.5s' }} />
                          <span className="w-1 h-1 bg-terminal-amber rounded-full animate-pulse ml-0.5" style={{ animationDelay: '0.5s', animationDuration: '1.5s' }} />
                          <span className="w-1 h-1 bg-terminal-amber rounded-full animate-pulse ml-0.5" style={{ animationDelay: '1s', animationDuration: '1.5s' }} />
                        </span>
                      </>
                    ) : (
                      edu.status.toUpperCase()
                    )}
                  </span>
                </div>
                {edu.focus && (
                  <p className="text-gray-400 text-sm italic">{edu.focus}</p>
                )}
                {edu.description && (
                  <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                )}
                {edu.keyAreas && edu.keyAreas.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {edu.keyAreas.map((area) => (
                      <span
                        key={area}
                        className="px-2.5 py-1 font-mono text-xs text-gray-300 border border-terminal-border bg-terminal-surface/50 rounded"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
