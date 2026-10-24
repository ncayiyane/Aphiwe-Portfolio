import { Github, FolderGit2, Bot, ChevronDown, Download } from 'lucide-react';
import DigitalRain from './DigitalRain';
import { profile } from '@/data/portfolio';
import { useState, useEffect } from 'react';

interface HeroProps {
  onOpenAI: () => void;
  className?: string;
}

function MatrixText({ text, className = '' }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+=<>{}[]/\\|';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => {
          const randomChar = chars[Math.floor(Math.random() * chars.length)];
          const newDisplay = text.slice(0, index) + randomChar;
          return newDisplay;
        });
        index++;
      } else {
        clearInterval(interval);
        setDisplayText(text);
        setIsComplete(true);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && <span className="inline-block w-2 h-4 bg-terminal-glow ml-1 animate-blink" />}
    </span>
  );
}

export default function Hero({ onOpenAI, className = '' }: HeroProps) {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden grid-bg ${className}`}
    >
      <DigitalRain opacity={0.06} />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-terminal-bg/40 via-transparent to-terminal-bg/80 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* System badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 glass-panel rounded-full">
          <span className="w-2 h-2 rounded-full bg-terminal-glow animate-glow-pulse" />
          <span className="font-mono text-xs text-terminal-glow/80 tracking-widest uppercase">
            {profile.systemName}
          </span>
        </div>

        {/* Name with Matrix effect */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          <MatrixText text="Aphiwe Andrew" className="block" />
          <MatrixText text="Ncayiyane" className="block text-terminal-glow text-glow mt-1" />
        </h1>

        {/* Roles */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-8">
          {profile.roles.map((role, i) => (
            <span key={role} className="font-mono text-sm sm:text-base text-gray-400">
              {role}
              {i < profile.roles.length - 1 && (
                <span className="text-terminal-glow/40 ml-3">|</span>
              )}
            </span>
          ))}
        </div>

        {/* Intro */}
        <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
          {profile.intro}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={scrollToProjects}
              className="terminal-btn w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <FolderGit2 className="w-4 h-4" />
              VIEW PROJECTS
            </button>
            <a
              href="/cv/Aphiwe Andrew Ncayiyane - Latest CV.pdf"
              download="Aphiwe Andrew Ncayiyane - Latest CV.pdf"
              className="terminal-btn w-full sm:w-auto flex items-center justify-center gap-2"
              aria-label="Download Aphiwe Andrew Ncayiyane CV"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD CV
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-btn w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
               VIEW GITHUB
            </a>
            <button
              onClick={onOpenAI}
              className="terminal-btn w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Bot className="w-4 h-4" />
              TALK TO MY AI
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-terminal-glow/40 hover:text-terminal-glow transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
