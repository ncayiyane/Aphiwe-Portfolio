import { useEffect, useState, useCallback, useRef } from 'react';
import DigitalRain from './DigitalRain';

interface LandingScreenProps {
  onEnter: () => void;
}

export default function LandingScreen({ onEnter }: LandingScreenProps) {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [receivedText, setReceivedText] = useState('');
  const [traceText, setTraceText] = useState('');
  const [signalText, setSignalText] = useState('');
  const [showTraceEffect, setShowTraceEffect] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [blinkCount, setBlinkCount] = useState(0);
  
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const typingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const blinkIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearAllTimers = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    if (blinkIntervalRef.current) clearInterval(blinkIntervalRef.current);
  }, []);

  const handleSkip = useCallback(() => {
    clearAllTimers();
    onEnter();
  }, [clearAllTimers, onEnter]);

  const typeText = useCallback((text: string, setter: (text: string) => void, speed: number = 30) => {
    return new Promise<void>((resolve) => {
      let index = 0;
      typingIntervalRef.current = setInterval(() => {
        if (index < text.length) {
          setter(text.slice(0, index + 1));
          index++;
        } else {
          if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
          resolve();
        }
      }, speed);
    });
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const runSequence = async () => {
      setShowSkip(true);

      if (prefersReducedMotion) {
        onEnter();
        return;
      }

      // Sequence 1: Cursor blinks exactly 3 times
      const blinkCount = await new Promise<number>((resolve) => {
        let count = 0;
        blinkIntervalRef.current = setInterval(() => {
          count++;
          setCursorVisible((prev) => !prev);
          if (count >= 6) { // 6 toggles = 3 complete blinks
            if (blinkIntervalRef.current) clearInterval(blinkIntervalRef.current);
            resolve(count);
          }
        }, 500); // Toggle every 500ms = 1 second per blink cycle
      });

      // Brief pause after blinking
      await new Promise(resolve => timeoutRef.current = setTimeout(resolve, 500));

      // Sequence 2: Type RECEIVED timestamp
      const now = new Date();
      const timestamp = now.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: '2-digit',
      }).replace(/\//g, '-') + ' ' + now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      const receivedLine = `RECEIVED: ${timestamp} // SESSION: CONNECTED`;
      await typeText(receivedLine, setReceivedText, 60);

      // Sequence 3: Pause after received
      await new Promise(resolve => timeoutRef.current = setTimeout(resolve, 600));

      // Type TRACE PROGRAM: RUNNING
      await typeText('TRACE PROGRAM: RUNNING', setTraceText, 70);

      // Pause after trace
      await new Promise(resolve => timeoutRef.current = setTimeout(resolve, 500));

      // Type SIGNAL: LOCKED
      await typeText('SIGNAL: LOCKED', setSignalText, 70);

      // Sequence 4: Trace effect
      setShowTraceEffect(true);

      // Sequence 5: Transition to portfolio
      await new Promise(resolve => timeoutRef.current = setTimeout(resolve, 1500));
      onEnter();
    };

    runSequence();

    return () => clearAllTimers();
  }, [typeText, clearAllTimers, onEnter]);

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {showTraceEffect && <DigitalRain opacity={0.15} className="animate-intensify" />}

      <div className="relative z-10 p-6 sm:p-8 md:p-12 min-h-screen flex flex-col">
        {/* Terminal content in upper-left */}
        <div className="font-mono text-sm sm:text-base md:text-lg">
          {/* Blinking cursor */}
          <div className="text-terminal-glow mb-4 sm:mb-6">
            <span className={`inline-block w-2 h-4 sm:w-2.5 sm:h-5 bg-terminal-glow ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150`} />
          </div>

          {/* RECEIVED line */}
          {receivedText && (
            <div className="text-terminal-glow mb-2 sm:mb-3 opacity-0 animate-fade-in-up">
              {receivedText}
            </div>
          )}

          {/* TRACE PROGRAM line */}
          {traceText && (
            <div className="text-terminal-glow mb-2 sm:mb-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {traceText}
              <span className={`inline-block w-2 h-4 sm:w-2.5 sm:h-5 bg-terminal-glow ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150`} />
            </div>
          )}

          {/* SIGNAL line */}
          {signalText && (
            <div className="text-terminal-glow opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {signalText}
            </div>
          )}
        </div>

        {/* SKIP INTRO button in bottom-right */}
        {showSkip && (
          <button
            onClick={handleSkip}
            className="mt-auto self-end font-mono text-xs sm:text-sm text-gray-600 hover:text-gray-400 transition-colors duration-300 focus:outline-none"
          >
            SKIP INTRO
          </button>
        )}
      </div>
    </div>
  );
}
