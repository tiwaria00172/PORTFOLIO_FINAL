import { useEffect, useState, useRef } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'dark' | 'star' | 'galaxy' | 'logo' | 'fadeout'>('dark');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Phase 1: Pure dark to single star
    const t1 = setTimeout(() => setPhase('star'), 400);
    // Phase 2: Star expands and forms galaxy
    const t2 = setTimeout(() => setPhase('galaxy'), 1500);
    // Phase 3: Brand name fades in
    const t3 = setTimeout(() => setPhase('logo'), 2800);
    // Phase 4: Dissolve and complete
    const t4 = setTimeout(() => setPhase('fadeout'), 4200);
    const t5 = setTimeout(() => onComplete(), 5200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  // Particle simulation for the galaxy spiral effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationId: number;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Particles representing stars in the galaxy arms
    interface StarParticle {
      angle: number;
      distance: number;
      speed: number;
      size: number;
      color: string;
    }

    const particles: StarParticle[] = [];
    const particleCount = 180;

    for (let i = 0; i < particleCount; i++) {
      const arm = i % 2 === 0 ? 0 : Math.PI; // Two spiral arms
      const distance = Math.random() * 120 + 5;
      const angle = arm + (distance * 0.03) + (Math.random() - 0.5) * 0.35;
      particles.push({
        angle,
        distance,
        speed: (0.015 + (1 / distance) * 0.5) * 0.5,
        size: Math.random() * 1.5 + 0.3,
        color: i % 3 === 0 ? 'rgba(56, 189, 248, 0.6)' : i % 3 === 1 ? 'rgba(99, 102, 241, 0.5)' : 'rgba(255, 255, 255, 0.7)',
      });
    }

    let starCoreRadius = 2;
    let rotationSpeed = 0.006;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw expanding central core
      if (phase === 'star' || phase === 'galaxy' || phase === 'logo' || phase === 'fadeout') {
        if (phase === 'star' && starCoreRadius < 12) {
          starCoreRadius += 0.12;
        } else if (phase === 'galaxy' && starCoreRadius < 35) {
          starCoreRadius += 0.35;
        }

        // Draw radial glow for the star
        const coreGlow = ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          starCoreRadius * 3.5
        );
        coreGlow.addColorStop(0, 'rgba(255, 255, 255, 1)');
        coreGlow.addColorStop(0.1, 'rgba(56, 189, 248, 0.8)');
        coreGlow.addColorStop(0.4, 'rgba(99, 102, 241, 0.25)');
        coreGlow.addColorStop(1, 'rgba(5, 7, 10, 0)');
        ctx.fillStyle = coreGlow;
        ctx.beginPath();
        ctx.arc(centerX, centerY, starCoreRadius * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Core star point
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(centerX, centerY, Math.max(1, starCoreRadius * 0.15), 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw spiral galaxy arms
      if (phase === 'galaxy' || phase === 'logo' || phase === 'fadeout') {
        rotationSpeed += 0.00002;
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.angle += p.speed;

          // Spiral math coordinates
          const x = centerX + Math.cos(p.angle) * p.distance;
          const y = centerY + Math.sin(p.angle) * p.distance;

          // Expand galaxy radius slowly over time
          if (p.distance < Math.max(width * 0.2, 200)) {
            p.distance += 0.45;
          }

          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(x, y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [phase]);

  return (
    <div
      className={`fixed inset-0 w-full h-full bg-[#05070a] z-999 flex flex-col items-center justify-center transition-all duration-[1200ms] ease-in-out ${
        phase === 'fadeout' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Spaced display text for cinematic title fade-in */}
      <div
        className={`absolute bottom-[35%] flex flex-col items-center gap-3 transition-all duration-[1500ms] ${
          phase === 'logo' || phase === 'fadeout' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span
          className="text-white text-xs font-mono uppercase tracking-[0.6em]"
          style={{ textShadow: '0 0 12px rgba(255,255,255,0.4)' }}
        >
          Abhishek Tiwari
        </span>
        <span className="text-[var(--color-text-secondary)] text-[10px] font-mono uppercase tracking-[0.4em] opacity-60">
          Entering Space-Time Grid
        </span>
      </div>
    </div>
  );
}
