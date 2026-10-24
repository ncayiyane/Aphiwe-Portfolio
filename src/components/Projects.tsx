import { useState, useMemo } from 'react';
import { Search, Star, ExternalLink, Github, Calendar, X, Cpu, AlertTriangle, CheckCircle, Zap, BookOpen } from 'lucide-react';
import { projects, projectFilters, type Project, type ProjectCategory } from '@/data/portfolio';

export default function Projects({ className = '' }: { className?: string }) {
  const [activeFilter, setActiveFilter] = useState<'ALL' | ProjectCategory>('ALL');
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    let result = [...projects];

    // Sort: featured first, then by updatedAt desc
    result.sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });

    if (activeFilter !== 'ALL') {
      result = result.filter((p) => p.categories.includes(activeFilter));
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [activeFilter, search]);

  return (
    <section id="projects" className={`relative py-24 sm:py-32 grid-bg ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="section-label mb-3">// MODULE 03</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            PROJECT DATABASE
          </h2>
          <div className="w-20 h-px bg-terminal-glow/30 mx-auto" />
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-terminal-glow/40" />
            <input
              type="text"
              placeholder="search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-terminal-surface/50 border border-terminal-border text-gray-200 font-mono text-sm placeholder:text-gray-600 rounded-sm focus:outline-none focus:border-terminal-glow/50 focus:ring-1 focus:ring-terminal-glow/30 transition-all"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider rounded-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-terminal-glow/30 ${
                activeFilter === filter
                  ? 'bg-terminal-glow/15 text-terminal-glow border border-terminal-glow/40 text-glow-soft'
                  : 'text-gray-500 border border-terminal-border hover:text-terminal-glow/70 hover:border-terminal-glow/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 font-mono text-gray-500 text-sm">
            <p>&gt; No projects found matching query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <ProjectCard key={project.name} project={project} onReadMore={() => setSelectedProject(project)} />
            ))}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

function ProjectCard({ project, onReadMore }: { project: Project; onReadMore: () => void }) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="glass-panel glass-panel-hover corner-decor rounded-lg p-5 flex flex-col group">
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-base font-bold text-white group-hover:text-terminal-glow transition-colors leading-tight">
          {project.name}
        </h3>
        {project.featured && (
          <span className="shrink-0 flex items-center gap-1 px-2 py-0.5 font-mono text-[10px] text-terminal-amber border border-terminal-amber/30 rounded">
            <Star className="w-2.5 h-2.5" />
            FEATURED
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      {/* Language + date */}
      <div className="flex items-center gap-4 mb-4 font-mono text-xs text-gray-500">
        {project.language && (
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-terminal-glow/60" />
            {project.language}
          </span>
        )}
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3 h-3" />
          {formatDate(project.updatedAt)}
        </span>
        {project.stars > 0 && (
          <span className="flex items-center gap-1.5 text-terminal-amber">
            <Star className="w-3 h-3" />
            {project.stars}
          </span>
        )}
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 font-mono text-[11px] text-gray-400 border border-terminal-border bg-terminal-surface/30 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-3 border-t border-terminal-border/40">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-mono text-xs text-terminal-glow/70 hover:text-terminal-glow transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          Code
        </a>
        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-terminal-cyan/70 hover:text-terminal-cyan transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
        )}
        {(project.detailedDescription || project.howItWorks || project.whatIBuilt) && (
          <button
            onClick={onReadMore}
            className="flex items-center gap-1.5 font-mono text-xs text-terminal-amber/70 hover:text-terminal-amber transition-colors ml-auto"
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
}

function ProjectDetailModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-panel rounded-lg p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{project.name}</h2>
            {project.featured && (
              <span className="shrink-0 flex items-center gap-1 px-2 py-0.5 font-mono text-xs text-terminal-amber border border-terminal-amber/30 rounded">
                <Star className="w-3 h-3" />
                FEATURED
              </span>
            )}
          </div>
          {project.status && (
            <div className="inline-flex items-center gap-2 px-3 py-1 font-mono text-xs text-terminal-amber border border-terminal-amber/30 rounded mb-3">
              <span className="w-1.5 h-1.5 bg-terminal-amber rounded-full animate-pulse" />
              {project.status}
            </div>
          )}
          <p className="text-gray-400 text-base leading-relaxed">{project.description}</p>
        </div>

        {/* Detailed Description */}
        {project.detailedDescription && (
          <div className="mb-6">
            <h3 className="font-mono text-sm font-bold text-terminal-glow tracking-wider mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              OVERVIEW
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{project.detailedDescription}</p>
          </div>
        )}

        {/* Problem */}
        {project.problem && (
          <div className="mb-6">
            <h3 className="font-mono text-sm font-bold text-terminal-glow tracking-wider mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              THE PROBLEM
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
          </div>
        )}

        {/* How It Works */}
        {project.howItWorks && project.howItWorks.length > 0 && (
          <div className="mb-6">
            <h3 className="font-mono text-sm font-bold text-terminal-glow tracking-wider mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              HOW IT WORKS
            </h3>
            <div className="space-y-3">
              {project.howItWorks.map((step, idx) => (
                <div key={idx} className="text-gray-400 text-sm leading-relaxed">
                  <span className="text-terminal-glow/60">{step.split(':')[0]}:</span>
                  <span className="ml-2">{step.split(':').slice(1).join(':')}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Architecture */}
        {project.architecture && (
          <div className="mb-6">
            <h3 className="font-mono text-sm font-bold text-terminal-glow tracking-wider mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              SYSTEM ARCHITECTURE
            </h3>
            <div className="p-4 bg-terminal-surface/30 border border-terminal-border rounded">
              <p className="text-gray-400 text-sm font-mono leading-relaxed">{project.architecture}</p>
            </div>
          </div>
        )}

        {/* What I Built */}
        {project.whatIBuilt && project.whatIBuilt.length > 0 && (
          <div className="mb-6">
            <h3 className="font-mono text-sm font-bold text-terminal-glow tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              WHAT I BUILT
            </h3>
            <ul className="space-y-2">
              {project.whatIBuilt.map((item, idx) => (
                <li key={idx} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                  <span className="text-terminal-glow/40 mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        {project.techStack && (
          <div className="mb-6">
            <h3 className="font-mono text-sm font-bold text-terminal-glow tracking-wider mb-3">TECHNOLOGY STACK</h3>
            <div className="space-y-3">
              {Object.entries(project.techStack).map(([category, techs]) => (
                techs && techs.length > 0 && (
                  <div key={category}>
                    <p className="font-mono text-xs text-terminal-glow/60 uppercase mb-2">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 font-mono text-xs text-gray-300 border border-terminal-border bg-terminal-surface/50 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        )}

        {/* Engineering Challenges */}
        {project.engineeringChallenges && (
          <div className="mb-6">
            <h3 className="font-mono text-sm font-bold text-terminal-glow tracking-wider mb-3">ENGINEERING CHALLENGES</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{project.engineeringChallenges}</p>
          </div>
        )}

        {/* Current Status */}
        {project.currentStatus && (
          <div className="mb-6">
            <h3 className="font-mono text-sm font-bold text-terminal-glow tracking-wider mb-3">CURRENT STATUS</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{project.currentStatus}</p>
          </div>
        )}

        {/* Limitations */}
        {project.limitations && (
          <div className="mb-6">
            <h3 className="font-mono text-sm font-bold text-terminal-glow tracking-wider mb-3">LIMITATIONS</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{project.limitations}</p>
          </div>
        )}

        {/* What I Learned */}
        {project.whatILearned && project.whatILearned.length > 0 && (
          <div className="mb-6">
            <h3 className="font-mono text-sm font-bold text-terminal-glow tracking-wider mb-3">WHAT I LEARNED</h3>
            <div className="flex flex-wrap gap-2">
              {project.whatILearned.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 font-mono text-xs text-gray-300 border border-terminal-border bg-terminal-surface/50 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer Links */}
        <div className="flex items-center gap-4 pt-6 border-t border-terminal-border/40">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm text-terminal-glow hover:text-terminal-glow/80 transition-colors"
          >
            <Github className="w-4 h-4" />
            View Source Code
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-terminal-cyan hover:text-terminal-cyan/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
