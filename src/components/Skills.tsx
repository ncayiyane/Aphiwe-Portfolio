import { useState } from 'react';
import { ChevronRight, FolderGit2 } from 'lucide-react';
import { skills, skillCategories, type Skill } from '@/data/portfolio';

export default function Skills({ className = '' }: { className?: string }) {
  const [activeCategory, setActiveCategory] = useState<Skill['category'] | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const visibleSkills = activeCategory
    ? skills.filter((s) => s.category === activeCategory)
    : skills;

  return (
    <section id="skills" className={`relative py-24 sm:py-32 ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="section-label mb-3">// MODULE 04</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            TECHNOLOGY MATRIX
          </h2>
          <div className="w-20 h-px bg-terminal-glow/30 mx-auto" />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider rounded-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-terminal-glow/30 ${
              activeCategory === null
                ? 'bg-terminal-glow/15 text-terminal-glow border border-terminal-glow/40'
                : 'text-gray-500 border border-terminal-border hover:text-terminal-glow/70 hover:border-terminal-glow/20'
            }`}
          >
            ALL
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider rounded-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-terminal-glow/30 ${
                activeCategory === cat
                  ? 'bg-terminal-glow/15 text-terminal-glow border border-terminal-glow/40'
                  : 'text-gray-500 border border-terminal-border hover:text-terminal-glow/70 hover:border-terminal-glow/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {visibleSkills.map((skill) => (
            <button
              key={skill.name}
              onClick={() => setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)}
              className={`relative glass-panel glass-panel-hover rounded-lg p-4 text-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terminal-glow/30 ${
                selectedSkill?.name === skill.name
                  ? 'border-terminal-glow/50 shadow-[0_0_15px_rgba(0,255,65,0.15)]'
                  : ''
              }`}
            >
              <span className="font-mono text-sm text-gray-300 group-hover:text-terminal-glow">
                {skill.name}
              </span>
              {skill.relatedProjects.length > 0 && (
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-terminal-glow/50" />
              )}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        {selectedSkill && (
          <div className="mt-8 glass-panel corner-decor rounded-lg p-6 animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <ChevronRight className="w-4 h-4 text-terminal-glow" />
              <h3 className="font-mono text-sm font-bold text-terminal-glow tracking-wider">
                {selectedSkill.name.toUpperCase()}
              </h3>
              <span className="font-mono text-xs text-gray-500 ml-2">
                // {selectedSkill.category}
              </span>
            </div>
            {selectedSkill.relatedProjects.length > 0 ? (
              <>
                <p className="text-gray-400 text-sm mb-3">Used in these projects:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.relatedProjects.map((proj) => (
                    <a
                      key={proj}
                      href="#projects"
                      className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-gray-300 border border-terminal-border bg-terminal-surface/40 rounded hover:border-terminal-glow/40 hover:text-terminal-glow transition-all"
                    >
                      <FolderGit2 className="w-3 h-3" />
                      {proj}
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-gray-500 text-sm font-mono">
                &gt; Core technology — no specific project linked yet.
              </p>
            )}
          </div>
        )}

        {/* Hint */}
        {!selectedSkill && (
          <p className="mt-8 text-center font-mono text-xs text-gray-600">
            &gt; Click any technology to see related projects
          </p>
        )}
      </div>
    </section>
  );
}
