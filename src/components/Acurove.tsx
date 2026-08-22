import { useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Brain, 
  Cpu, 
  Zap, 
  Sparkles, 
  Activity, 
  Shield, 
  Smartphone,
  ArrowUpRight,
  TrendingUp,
  ArrowRightLeft
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Custom SVG Icons for the Tech Stack
const TechIcons = {
  Python: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
      <path d="M12.01 2c-1.35 0-2.62.12-3.6.35-2.52.6-2.5 1.83-2.5 3.78v1.6h6.2v.9h-6.2v2.85c0 1.95.1 3.17 2.62 3.77 1 .23 2.27.35 3.63.35 1.35 0 2.62-.12 3.6-.35 2.52-.6 2.5-1.83 2.5-3.78v-1.6h-6.2v-.9h6.2v-2.85c0-1.95-.1-3.17-2.62-3.77-1-.23-2.27-.35-3.63-.35zM8.5 4.5c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75z" opacity="0.8" className="text-blue-400" />
      <path d="M11.99 22c1.35 0 2.62-.12 3.6-.35 2.52-.6 2.5-1.83 2.5-3.78v-1.6h-6.2v-.9h6.2v-2.85c0-1.95-.1-3.17-2.62-3.77-1-.23-2.27-.35-3.63-.35-1.35 0-2.62.12-3.6.35-2.52.6-2.5 1.83-2.5 3.78v1.6h6.2v.9h-6.2v2.85c0 1.95.1 3.17 2.62 3.77 1 .23 2.27.35 3.63.35zm3.5-2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75z" opacity="0.8" className="text-yellow-400" />
    </svg>
  ),
  FastAPI: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-emerald-400">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5v-3.5h2.5L11 8.5v3.5H8.5L13 17.5z" />
    </svg>
  ),
  OpenAI: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-teal-400">
      <path d="M21.5 10c-.2-.6-.6-1.1-1.1-1.4.1-.7.1-1.4-.2-2.1-.4-.8-1.2-1.4-2.1-1.5-.4-.5-.9-.8-1.5-.9-1-.2-2 .2-2.6.9-.5-.3-1.1-.4-1.7-.3-.9.1-1.7.7-2.1 1.5-.5-.2-1.1-.3-1.7-.1-.9.3-1.6 1.1-1.8 2-.6.1-1.2.4-1.6.9-.7.7-1 1.7-.7 2.6-.2.2-.3.5-.4.8-.3.9-.1 1.9.5 2.6-.1.6 0 1.2.2 1.8.4.8 1.2 1.4 2.1 1.5.4.5.9.8 1.5.9.3.1.7.1 1 .1.6 0 1.1-.2 1.6-.5.5.3 1.1.4 1.7.3.9-.1 1.7-.7 2.1-1.5.5.2 1.1.3 1.7.1.9-.3 1.6-1.1 1.8-2 .6-.1 1.2-.4 1.6-.9.7-.7.9-1.7.7-2.6.2-.2.3-.5.4-.8.3-.8.2-1.8-.4-2.6zm-8.8 6.5l-3-1.7c-.3-.2-.5-.5-.5-.9v-3.5l1.9-1.1c.2-.1.4-.1.6 0l3 1.7c.3.2.5.5.5.9v3.5l-1.9 1.1c-.2.1-.4.1-.6 0zm4.1-1.4l-1.9-1.1v-2.3l1.9 1.1v2.3zm-1-5.7l-1.9-1.1 1.9-1.1 1.9 1.1-1.9 1.1zm-4.7 6.3l-1.9-1.1v-2.3l1.9 1.1v2.3zm.7-3.9v-2.3l1.9-1.1 1.9 1.1v2.3l-1.9 1.1-1.9-1.1z" />
    </svg>
  ),
  Gemini: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-cyan-400">
      <path d="M12 2c-.3 2.7-2.3 4.7-5 5 2.7.3 4.7 2.3 5 5 .3-2.7 2.3-4.7 5-5-2.7-.3-4.7-2.3-5-5zm0 10c-.3 2.7-2.3 4.7-5 5 2.7.3 4.7 2.3 5 5 .3-2.7 2.3-4.7 5-5-2.7-.3-4.7-2.3-5-5z" />
    </svg>
  ),
  n8n: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-orange-400">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H11v-2h2v2zm0-4H11V7h2v5z" />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-sky-400">
      <path d="M13.962 10.985v-1.785h2v1.785h-2zm-3 0v-1.785h2v1.785h-2zm-3 0v-1.785h2v1.785h-2zm-3 0v-1.785h2v1.785h-2zm9-3v-1.785h2v1.785h-2zm-3 0v-1.785h2v1.785h-2zm-3 0v-1.785h2v1.785h-2zm9 3v-1.785h2v1.785h-2zm-12.015 3h18.03c.09 0 .15.03.18.09.285.915.18 2.01-.225 3.03-.435 1.095-1.395 2.01-2.925 2.01H4.992c-1.53 0-2.49-.915-2.925-2.01-.405-1.02-.51-2.115-.225-3.03.03-.06.09-.09.18-.09z" />
    </svg>
  ),
  Firebase: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-amber-500">
      <path d="M3.89 15.75L2 6.25l7.55 7.55-5.66 1.95zm14.22-9.5l-1.89 9.5-5.66-1.95 7.55-7.55zM12 3.25l3.25 3.25L12 9.75 8.75 6.5 12 3.25zm5.66 12.5l-5.66 5.66-5.66-5.66 5.66-1.95 5.66 1.95z" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-blue-500">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H11v-2h2v2zm0-4H11V7h2v5z" />
    </svg>
  ),
  Supabase: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-emerald-500">
      <path d="M12 2L3 11h7v11l9-9h-7V2z" />
    </svg>
  ),
  Nodejs: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-green-500">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm-1 14.5v-5H9v5H7v-7h2v1h2v-1h2v7h-2zm5-2.5v2.5h-2v-5h2v2.5z" />
    </svg>
  ),
  React: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-cyan-400">
      <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-1 9v3h2v-3h3v-2h-3V7h-2v3H8v2h3z" />
    </svg>
  ),
  Nextjs: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-white">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-7h2v7h-2zm4-3.5v3.5h-2v-7h2v3.5z" />
    </svg>
  ),
};

// Canvas-based neural network animation
function InteractiveNeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);
    let animationId: number;

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      glowIntensity: number;
      pulseDirection: number;
    }

    const nodes: Node[] = [];
    const nodeCount = 45;
    const connectionDistance = 110;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.5 + 1.5,
        glowIntensity: Math.random(),
        pulseDirection: Math.random() > 0.5 ? 0.02 : -0.02,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < nodeCount; i++) {
        const nodeA = nodes[i];
        for (let j = i + 1; j < nodeCount; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            // Gradient lines
            const grad = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
            grad.addColorStop(0, `rgba(124, 58, 237, ${alpha})`); // Violet
            grad.addColorStop(1, `rgba(6, 182, 212, ${alpha})`); // Cyan
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodeCount; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Pulse glow
        node.glowIntensity += node.pulseDirection;
        if (node.glowIntensity > 1 || node.glowIntensity < 0.2) {
          node.pulseDirection *= -1;
        }

        // Draw outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (1.5 + node.glowIntensity * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 
          ? `rgba(124, 58, 237, ${0.15 + node.glowIntensity * 0.2})` 
          : `rgba(6, 182, 212, ${0.15 + node.glowIntensity * 0.2})`;
        ctx.fill();

        // Draw core node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? '#9d5cf7' : '#06b6d4';
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

// Custom Section Header for the Acurove Page
function AcuroveSectionHeader({
  badge,
  title,
  subtitle,
  centered = true
}: {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`flex flex-col mb-12 ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full section-label mb-4 bg-violet-500/10 border border-violet-500/20 text-xs font-mono">
        <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent-light)]" />
        {badge}
      </span>
      <h2 className="text-clamp-heading text-[var(--color-text-primary)] mb-4 font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="paragraph-text text-[var(--color-text-secondary)] max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function Acurove(_props: { isDark: boolean; toggleTheme: () => void }) {

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative z-10 text-[var(--color-text-primary)]">
      
      {/* ===================================
         HERO SECTION
         =================================== */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden noise-overlay mesh-gradient">
        {/* Glowing Background Blobs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/8 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center w-full relative z-10">
          
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Tagline Badge */}
            <div className="animate-slide-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--color-border)] mb-6 shadow-[0_0_20px_rgba(124,58,237,0.15)]">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="caption-font uppercase tracking-widest text-[var(--color-accent-light)] font-bold text-[10px]">Decision-First AI Engine</span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 animate-slide-up text-left leading-[1.05]" style={{ animationDelay: '150ms' }}>
              <span className="text-clamp-hero block font-display font-extrabold tracking-tighter text-white">
                ACUROVE
              </span>
              <span className="text-clamp-heading block font-display font-bold leading-tight text-shimmer mt-2">
                Building AI That Makes Better Decisions.
              </span>
            </h1>

            {/* Description */}
            <div className="paragraph-text mb-10 max-w-2xl text-[var(--color-text-secondary)] space-y-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <p>
                Acurove is an AI-first technology company focused on creating intelligent products and automation systems that simplify everyday life and business operations.
              </p>
              <p>
                We believe AI should do more than answer questions—it should make decisions, automate repetitive work, and help people achieve better outcomes with less effort.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto animate-slide-up" style={{ animationDelay: '450ms' }}>
              <button
                onClick={() => handleNav('#what-we-build')}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400
                  shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]
                  transition-all duration-300 transform hover:-translate-y-1 focus:outline-none"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleNav('#approach')}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold
                  text-[var(--color-text-primary)] bg-white/5 hover:bg-white/10 backdrop-blur-md
                  border border-[var(--color-border)] hover:border-violet-500/50
                  hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]
                  transition-all duration-300 transform hover:-translate-y-1 focus:outline-none"
              >
                Our Services
              </button>
            </div>

          </div>

          {/* Right Futuristic AI Illustration */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[400px] sm:h-[480px] w-full animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="absolute inset-0 rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-violet-950/20 to-cyan-950/10 backdrop-blur-sm overflow-hidden">
              
              {/* Interactive constellation mesh */}
              <InteractiveNeuralNetwork />

              {/* Floating Widgets */}
              
              {/* Floating Widget 1: Health / Decision */}
              <div className="absolute top-[12%] left-[8%] animate-float p-4 rounded-xl border border-white/10 bg-[#0e0e12]/80 backdrop-blur-md shadow-2xl flex items-center gap-3 w-[220px]" style={{ animationDelay: '0s' }}>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[var(--color-text-muted)]">Acurove Fit</div>
                  <div className="text-xs font-bold text-white mt-0.5">Meal Optimization</div>
                  <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Optimal Choice Ready
                  </div>
                </div>
              </div>

              {/* Floating Widget 2: Workflow Automation */}
              <div className="absolute bottom-[15%] right-[8%] animate-float p-4 rounded-xl border border-white/10 bg-[#0e0e12]/80 backdrop-blur-md shadow-2xl flex flex-col gap-2.5 w-[240px]" style={{ animationDelay: '2.5s' }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs">
                      <Cpu className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">Workflow Node</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-[9px] font-mono text-cyan-400">Active</span>
                </div>
                <div className="h-[2px] bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full w-full" />
                <div className="flex justify-between items-center text-[10px] font-mono text-[var(--color-text-secondary)]">
                  <span>n8n Pipeline Trigger</span>
                  <span className="text-emerald-400 font-bold">100% Success</span>
                </div>
              </div>

              {/* Floating Widget 3: Mini metrics badge */}
              <div className="absolute top-[48%] right-[10%] animate-float p-3 rounded-lg border border-white/10 bg-gradient-to-br from-violet-600/20 to-cyan-500/20 backdrop-blur-md shadow-xl flex items-center gap-2" style={{ animationDelay: '1.2s' }}>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-[10px] font-mono text-white font-bold tracking-wider">AGENT: EXECUTING DECISION</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ===================================
         MISSION SECTION
         =================================== */}
      <section id="mission" className="section-padding bg-transparent border-t border-[var(--color-border)] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            
            <AcuroveSectionHeader 
              badge="Our Purpose" 
              title="Our Mission" 
            />

            <div className="mt-8 relative p-8 md:p-12 rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-bg-card)] to-violet-950/5 backdrop-blur-md overflow-hidden">
              {/* Subtle inner card glow */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-violet-500/5 blur-[60px] pointer-events-none" />
              
              <p className="text-clamp-heading font-display font-medium text-white tracking-tight leading-relaxed italic">
                "Our mission is to build practical AI systems that reduce complexity, automate repetitive work, and empower people and businesses to make smarter decisions every day."
              </p>

              <div className="mt-8 flex justify-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                <div className="w-6 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================
         WHAT WE BUILD SECTION
         =================================== */}
      <section id="what-we-build" className="section-padding bg-transparent border-t border-[var(--color-border)] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <AcuroveSectionHeader 
            badge="Innovation Hub" 
            title="What We Build" 
            subtitle="Explore our core offerings and systems crafted to automate complex decisions and operations."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            
            {/* Card 1: Acurove Fit */}
            <div className="rounded-3xl p-8 bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-violet-500/50 hover:shadow-[0_8px_40px_rgba(124,58,237,0.15)] transition-all duration-500 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform duration-300">
                    <Activity className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-mono text-orange-400 font-bold uppercase tracking-wider">
                    Wellness AI
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                  Acurove Fit
                </h3>
                
                <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                  An AI-powered behavioral wellness platform that eliminates decision fatigue around food and fitness. Instead of only tracking calories, Acurove Fit proactively guides users toward healthier decisions before they make them.
                </p>

                <div className="space-y-3 mb-8">
                  <span className="text-xs uppercase font-mono text-[var(--color-text-muted)] tracking-wider block mb-2">Key Offerings</span>
                  {[
                    'AI Menu Scanner',
                    'Behavioral Intelligence',
                    'Weekly Habit Loops',
                    'Real-Time Nutrition Decisions',
                    'Adaptive Diet Planning'
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-sm text-[var(--color-text-secondary)]">
                      <span className="w-4 h-4 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-[10px] font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => handleNav('#contact')}
                className="mt-4 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white
                  bg-white/5 border border-[var(--color-border)] hover:bg-orange-500 hover:border-orange-500
                  transition-all duration-300 focus:outline-none"
              >
                Learn More
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2: Acurove Automation */}
            <div className="rounded-3xl p-8 bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-cyan-500/50 hover:shadow-[0_8px_40px_rgba(6,182,212,0.15)] transition-all duration-500 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                    Workflow Agents
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  Acurove Automation
                </h3>

                <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                  We build AI-powered automation systems for businesses using AI Agents, n8n workflows, LLMs, APIs, and custom integrations to automate repetitive manual work.
                </p>

                <div className="space-y-3 mb-8">
                  <span className="text-xs uppercase font-mono text-[var(--color-text-muted)] tracking-wider block mb-2">Key Offerings</span>
                  {[
                    'AI Agents & Assistants',
                    'n8n & Workflow Automation',
                    'CRM & WhatsApp Automation',
                    'Email & Internal System Bots',
                    'Custom LLM Integrations'
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-sm text-[var(--color-text-secondary)]">
                      <span className="w-4 h-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-[10px] font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => handleNav('#contact')}
                className="mt-4 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white
                  bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400
                  shadow-md transition-all duration-300 focus:outline-none"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================
         OUR APPROACH SECTION
         =================================== */}
      <section id="approach" className="section-padding bg-transparent border-t border-[var(--color-border)] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <AcuroveSectionHeader 
            badge="Methodology" 
            title="Our Approach" 
            subtitle="The core values guiding our product architecture and automated integrations."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: 'Intelligent',
                desc: 'AI that understands context, filters noise, and outputs high-fidelity conclusions.',
                icon: <Brain className="w-6 h-6 text-violet-400" />,
                borderClass: 'hover:border-violet-500/40',
              },
              {
                title: 'Automated',
                desc: 'Reduce repetitive manual work by linking systems, workflows, and tools together.',
                icon: <Zap className="w-6 h-6 text-cyan-400" />,
                borderClass: 'hover:border-cyan-500/40',
              },
              {
                title: 'Adaptive',
                desc: 'Continuously improves through user interactions, live feedback loops, and data.',
                icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
                borderClass: 'hover:border-emerald-500/40',
              },
              {
                title: 'Human-Centered',
                desc: 'Technology designed for real people to make their lives and operations simple.',
                icon: <Smartphone className="w-6 h-6 text-pink-400" />,
                borderClass: 'hover:border-pink-500/40',
              },
            ].map((appr) => (
              <div 
                key={appr.title}
                className={`rounded-2xl p-6 bg-[var(--color-bg-card)] border border-[var(--color-border)] ${appr.borderClass} transition-all duration-300 hover:-translate-y-1.5`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  {appr.icon}
                </div>
                <h4 className="text-lg font-display font-bold text-white mb-2">{appr.title}</h4>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{appr.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================
         TECH STACK SECTION
         =================================== */}
      <section id="tech-stack" className="section-padding bg-transparent border-t border-[var(--color-border)] relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <AcuroveSectionHeader 
            badge="Capabilities" 
            title="Tech Stack" 
            subtitle="The enterprise technologies, models, and workflows powering our AI products."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
            {[
              { name: 'Python', icon: TechIcons.Python, tag: 'AI Engine' },
              { name: 'FastAPI', icon: TechIcons.FastAPI, tag: 'API Core' },
              { name: 'OpenAI', icon: TechIcons.OpenAI, tag: 'LLM Agent' },
              { name: 'Gemini', icon: TechIcons.Gemini, tag: 'Multimodal' },
              { name: 'n8n', icon: TechIcons.n8n, tag: 'Automation' },
              { name: 'Docker', icon: TechIcons.Docker, tag: 'DevOps' },
              { name: 'Firebase', icon: TechIcons.Firebase, tag: 'Database' },
              { name: 'PostgreSQL', icon: TechIcons.PostgreSQL, tag: 'Relational' },
              { name: 'Supabase', icon: TechIcons.Supabase, tag: 'Backend' },
              { name: 'Node.js', icon: TechIcons.Nodejs, tag: 'Server Runtime' },
              { name: 'React', icon: TechIcons.React, tag: 'UI Library' },
              { name: 'Next.js', icon: TechIcons.Nextjs, tag: 'Framework' },
            ].map((tech) => (
              <div 
                key={tech.name}
                className="rounded-xl p-5 bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-violet-500/30 hover:shadow-[0_4px_20px_rgba(124,58,237,0.1)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="text-sm font-bold text-white">{tech.name}</div>
                <div className="text-[10px] font-mono text-[var(--color-text-muted)] mt-1">{tech.tag}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================
         VISION SECTION
         =================================== */}
      <section id="vision" className="section-padding bg-transparent border-t border-[var(--color-border)] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Header & Text */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <AcuroveSectionHeader 
                badge="The Horizon" 
                title="The Future of AI Starts with Better Decisions" 
                centered={false}
              />

              <div className="paragraph-text text-[var(--color-text-secondary)] space-y-6 max-w-2xl">
                <p>
                  We envision a future where AI becomes an intelligent partner that helps individuals and organizations make better decisions in real time.
                </p>
                <p>
                  From personal wellness to enterprise automation, Acurove is building systems that think ahead, automate intelligently, and create measurable impact.
                </p>
              </div>
            </div>

            {/* Right Interactive Box */}
            <div className="lg:col-span-5 relative">
              <div className="p-8 rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-bg-card)] to-cyan-950/10 backdrop-blur-md relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-cyan-500/5 blur-[40px]" />
                
                <h4 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  Acurove Vision metrics
                </h4>

                <div className="space-y-4">
                  {[
                    { label: 'Decision Automation Speed', value: '< 200ms', color: 'bg-violet-500' },
                    { label: 'Routine Tasks Eliminated', value: '85%+', color: 'bg-cyan-500' },
                    { label: 'Workflow Reliability Rate', value: '99.99%', color: 'bg-emerald-500' },
                  ].map((stat) => (
                    <div key={stat.label} className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-[var(--color-text-secondary)]">{stat.label}</span>
                        <span className="text-white font-bold">{stat.value}</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full ${stat.color} rounded-full`} style={{ width: stat.value.includes('%') ? '85%' : stat.value.includes('ms') ? '95%' : '99.99%' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================
         CALL TO ACTION & CONTACT FORM SECTION
         =================================== */}
      <section id="contact" className="section-padding bg-transparent border-t border-[var(--color-border)] relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[150px] pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          
          <AcuroveSectionHeader 
            badge="Partner with us" 
            title="Get in Touch" 
            subtitle="Let's create intelligent products and automation solutions together."
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button
              onClick={() => window.location.hash = '#/'}
              className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold
                text-white bg-white/5 hover:bg-white/10 border border-[var(--color-border)] hover:border-violet-500/50
                transition-all duration-300 focus:outline-none"
            >
              View Portfolio
              <ArrowRightLeft className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-violet-400 transition-colors" />
            </button>
            
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold
                text-[var(--color-text-secondary)] hover:text-white transition-all duration-300"
            >
              Direct Email
              <span className="text-xs font-mono text-[var(--color-text-muted)] group-hover:text-violet-400">({personalInfo.email})</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
