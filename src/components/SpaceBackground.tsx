import { useEffect, useRef } from 'react';

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Respect user motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Track mouse position with smoothing (inertia)
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // 1. Starfield Setup
    interface Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      alpha: number;
      targetAlpha: number;
    }
    let stars: Star[] = [];
    const initStars = () => {
      stars = [];
      const count = Math.floor((width * height) / 8000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.2 + 0.3,
          speed: Math.random() * 0.05 + 0.02,
          alpha: Math.random(),
          targetAlpha: Math.random() * 0.8 + 0.2,
        });
      }
    };

    // 2. Cosmic Dust Particles Setup
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseX: number;
      baseY: number;
    }
    let particles: Particle[] = [];
    const initParticles = () => {
      particles = [];
      const count = Math.min(50, Math.floor(width / 30));
      for (let i = 0; i < count; i++) {
        const px = Math.random() * width;
        const py = Math.random() * height;
        particles.push({
          x: px,
          y: py,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 2 + 1,
          baseX: px,
          baseY: py,
        });
      }
    };

    initStars();
    initParticles();

    // Perspective Space-time Grid config
    const gridSpacing = 60;
    const gridForceRadius = 220;
    const gridForceStrength = 0.45;

    // Nebula morph offsets
    let nebulaTime = 0;

    // Animation Loop
    const tick = () => {
      // Smooth mouse coordinates toward target (lerp for inertia)
      const mouse = mouseRef.current;
      if (mouse.x === -1000 && mouse.targetX !== -1000) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
      } else {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
      }

      ctx.fillStyle = '#05070a'; // Deep Space Black
      ctx.fillRect(0, 0, width, height);

      // A. Nebula Ambient Glow (morphing radial gradients)
      if (!prefersReducedMotion) {
        nebulaTime += 0.0005;
      }
      const x1 = width * 0.35 + Math.sin(nebulaTime) * (width * 0.15);
      const y1 = height * 0.4 + Math.cos(nebulaTime * 0.8) * (height * 0.15);
      const x2 = width * 0.7 - Math.cos(nebulaTime * 1.1) * (width * 0.1);
      const y2 = height * 0.65 - Math.sin(nebulaTime * 0.9) * (height * 0.1);

      // First cosmic cloud (Deep Navy)
      const grad1 = ctx.createRadialGradient(x1, y1, 10, x1, y1, Math.max(width * 0.4, 300));
      grad1.addColorStop(0, 'rgba(10, 20, 48, 0.15)');
      grad1.addColorStop(0.5, 'rgba(6, 12, 32, 0.06)');
      grad1.addColorStop(1, 'rgba(5, 7, 10, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Second cosmic cloud (Ice Blue / Indigo)
      const grad2 = ctx.createRadialGradient(x2, y2, 20, x2, y2, Math.max(width * 0.35, 250));
      grad2.addColorStop(0, 'rgba(56, 189, 248, 0.06)');
      grad2.addColorStop(0.6, 'rgba(99, 102, 241, 0.02)');
      grad2.addColorStop(1, 'rgba(5, 7, 10, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // B. Space-time Distorted Grid
      // We draw vertical and horizontal grids that bend around the mouse.
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.015)';
      ctx.lineWidth = 1;

      // Draw horizontal grid lines
      const rows = Math.ceil(height / gridSpacing) + 2;
      const cols = Math.ceil(width / gridSpacing) + 2;

      const getDistortedPoint = (origX: number, origY: number) => {
        if (mouse.x === -1000) return { x: origX, y: origY };
        const dx = mouse.x - origX;
        const dy = mouse.y - origY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < gridForceRadius) {
          // Bending math: pull lines closer to create a "gravitational funnel"
          const pull = (1.0 - dist / gridForceRadius) * gridForceStrength;
          return {
            x: origX + dx * pull,
            y: origY + dy * pull,
          };
        }
        return { x: origX, y: origY };
      };

      // Draw Grid lines
      ctx.beginPath();
      // Horizontal lines
      for (let r = 0; r <= rows; r++) {
        const origY = r * gridSpacing;
        for (let c = 0; c <= cols; c++) {
          const origX = c * gridSpacing;
          const p = getDistortedPoint(origX, origY);
          if (c === 0) {
            ctx.moveTo(p.x, p.y);
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
      }
      // Vertical lines
      for (let c = 0; c <= cols; c++) {
        const origX = c * gridSpacing;
        for (let r = 0; r <= rows; r++) {
          const origY = r * gridSpacing;
          const p = getDistortedPoint(origX, origY);
          if (r === 0) {
            ctx.moveTo(p.x, p.y);
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
      }
      ctx.stroke();

      // C. Draw Stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        if (!prefersReducedMotion) {
          star.x -= star.speed;
          if (star.x < 0) {
            star.x = width;
            star.y = Math.random() * height;
          }
          // Twinkle logic
          star.alpha += (star.targetAlpha - star.alpha) * 0.02;
          if (Math.abs(star.alpha - star.targetAlpha) < 0.05) {
            star.targetAlpha = Math.random() * 0.8 + 0.2;
          }
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fillRect(star.x, star.y, star.size, star.size);
      }

      // D. Particles and Connective Lines (Space Dust)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        if (!prefersReducedMotion) {
          p1.x += p1.vx;
          p1.y += p1.vy;

          // Boundary checks
          if (p1.x < 0 || p1.x > width) p1.vx *= -1;
          if (p1.y < 0 || p1.y > height) p1.vy *= -1;

          // Subtly react to mouse position (gravitational drag)
          if (mouse.x !== -1000) {
            const dx = mouse.x - p1.x;
            const dy = mouse.y - p1.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
              p1.x += dx * 0.002;
              p1.y += dy * 0.002;
            }
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(224, 242, 254, 0.25)'; // Soft white/ice blue
        ctx.fill();

        // Connective lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            let opacity = (1.0 - dist / 120) * 0.05;

            // Make lines brighter if the mouse is near the midpoint
            if (mouse.x !== -1000) {
              const midX = (p1.x + p2.x) / 2;
              const midY = (p1.y + p2.y) / 2;
              const mDx = mouse.x - midX;
              const mDy = mouse.y - midY;
              const mDist = Math.sqrt(mDx * mDx + mDy * mDy);
              if (mDist < 100) {
                opacity += (1.0 - mDist / 100) * 0.08;
              }
            }

            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(tick);
    };

    animationId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
