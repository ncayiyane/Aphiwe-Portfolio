import { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import LandingScreen from '@/components/LandingScreen';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import ChatAgent from '@/components/ChatAgent';
import Contact from '@/components/Contact';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    // Prevent browser from restoring scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Clear any hash from URL
    if (window.location.hash) {
      window.history.replaceState(null, '', ' ');
    }

    // Force scroll to top with multiple methods
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Use timeout to ensure scroll happens after browser restoration
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (hasEntered) {
      document.body.style.overflow = 'auto';
      // Force scroll to top with delay
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 50);
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [hasEntered]);

  const handleEnter = useCallback(() => {
    setHasEntered(true);
    window.scrollTo(0, 0);
  }, []);

  const handleOpenAI = useCallback(() => {
    document.getElementById('chatagent')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="relative min-h-screen bg-terminal-bg scanlines">
      {!hasEntered && <LandingScreen onEnter={handleEnter} />}

      {hasEntered && (
        <>
          <Navbar hasEntered={hasEntered} onEnter={handleEnter} className="animate-slide-down" style={{ animationDelay: '0.1s' }} />

          <main>
            <Hero onOpenAI={handleOpenAI} className="animate-fade-in" style={{ animationDelay: '0.2s' }} />
            <About className="animate-slide-left" style={{ animationDelay: '0.3s' }} />
            <Experience className="animate-slide-right" style={{ animationDelay: '0.4s' }} />
            <Projects className="animate-fade-in" style={{ animationDelay: '0.5s' }} />
            <Skills className="animate-slide-left" style={{ animationDelay: '0.6s' }} />
            <ChatAgent className="animate-slide-right" style={{ animationDelay: '0.7s' }} />
            <Contact className="animate-fade-in-up" style={{ animationDelay: '0.8s' }} />
          </main>
        </>
      )}
    </div>
  );
}
