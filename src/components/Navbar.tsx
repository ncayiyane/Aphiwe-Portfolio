import { useEffect, useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { navLinks } from '@/data/portfolio';

interface NavbarProps {
  onEnter: () => void;
  hasEntered: boolean;
  className?: string;
}

export default function Navbar({ hasEntered, className = '' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string, external?: boolean, download?: boolean) => {
    if (download) {
      // For download links, let the anchor tag handle it naturally
      return;
    }
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    const el = document.getElementById(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${className} ${
        scrolled
          ? 'glass-panel border-b border-terminal-border/60 bg-terminal-bg/80 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 font-mono font-bold text-terminal-glow text-glow-soft hover:opacity-80 transition-opacity"
          >
            <Terminal className="w-5 h-5" />
            <span className="text-sm tracking-wider">APH1WE</span>
            <span className="text-terminal-glow/30 text-xs">// SYSTEM</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = !link.external && !link.download && activeSection === link.href;
              if (link.download) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    download="Aphiwe Andrew Ncayiyane - Latest CV.pdf"
                    className="px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-terminal-glow/40 text-terminal-glow hover:text-terminal-glow hover:bg-terminal-glow/5 border border-terminal-glow/30"
                    aria-label="Download Aphiwe Andrew Ncayiyane CV"
                  >
                    CV
                  </a>
                );
              }
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href, link.external)}
                  className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-terminal-glow/40 ${
                    isActive
                      ? 'text-terminal-glow text-glow-soft bg-terminal-glow/5 border-b border-terminal-glow/40'
                      : 'text-gray-400 hover:text-terminal-glow hover:bg-terminal-glow/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-terminal-glow focus:outline-none focus:ring-2 focus:ring-terminal-glow/40 rounded"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden glass-panel border-t border-terminal-border/60 animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              if (link.download) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    download="Aphiwe Andrew Ncayiyane - Latest CV.pdf"
                    className="block w-full text-left px-3 py-2.5 font-mono text-sm uppercase tracking-wider text-terminal-glow hover:text-terminal-glow hover:bg-terminal-glow/5 transition-colors rounded-sm focus:outline-none focus:ring-1 focus:ring-terminal-glow/40 border border-terminal-glow/30"
                    aria-label="Download Aphiwe Andrew Ncayiyane CV"
                  >
                    CV
                  </a>
                );
              }
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href, link.external)}
                  className="block w-full text-left px-3 py-2.5 font-mono text-sm uppercase tracking-wider text-gray-400 hover:text-terminal-glow hover:bg-terminal-glow/5 transition-colors rounded-sm focus:outline-none focus:ring-1 focus:ring-terminal-glow/40"
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
