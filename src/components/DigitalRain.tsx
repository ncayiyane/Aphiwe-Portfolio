import { useEffect, useRef } from 'react';

export default function DigitalRain({ opacity = 0.12, className = '' }: { opacity?: number; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let columns: number = 0;
    let drops: number[] = [];
    let animationId: number | null = null;

    const fontSize = 14;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+=<>{}[]/\\|';

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -100);
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    if (prefersReducedMotion) {
      // Draw a single static frame
      ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, Math.random() * canvas.height);
      }
      return () => resizeObserver.disconnect();
    }

    let lastTime = 0;
    const interval = 55; // ms between frames — lightweight

    const draw = (time: number) => {
      if (time - lastTime < interval) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      lastTime = time;

      ctx.fillStyle = 'rgba(5, 10, 5, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Leading character — brighter
        ctx.fillStyle = `rgba(140, 255, 170, ${opacity * 3})`;
        ctx.fillText(char, x, y);

        // Trail
        ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
        ctx.fillText(char, x, y - fontSize);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      if (animationId !== null) cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, [opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
}
