import { Link } from 'react-router-dom';
import { ArrowDown, Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon, LeetCodeIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import ModeToggle, { type PortfolioMode } from './ModeToggle';

type Props = {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
};

export default function Hero({ mode, setMode }: Props) {
  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  const scrollToWork = () => {
    const targetId = mode === 'creative' ? 'creative' : 'projects';
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const titles = {
    all: personalInfo.title,
    technical: 'AI/ML & Data Engineer',
    creative: '3D Artist & Creative Technologist',
  };

  const taglines = {
    all: personalInfo.tagline,
    technical: 'Building intelligent systems with Python, Machine Learning, SQL, and computer vision to solve real-world problems.',
    creative: 'Crafting immersive 3D environments, motion graphics, and interactive visual designs using Blender & modern web tech.',
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent noise-overlay"
    >
      {/* Minimal Blob glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-violet-600/5 blur-[100px] sm:blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-24 pb-12">
        {/* Badges container */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {/* Status badge */}
          <div className="animate-slide-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--color-border)] shadow-[0_0_20px_rgba(124,58,237,0.1)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="caption-font uppercase tracking-wider text-[var(--color-text-secondary)]">{personalInfo.availability}</span>
          </div>

          {/* Acurove AI Top Highlight Badge */}
          <Link
            to="/acurove"
            className="animate-slide-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/30 bg-cyan-950/20 shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.45)] hover:scale-105 transition-all duration-300 group cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            <span className="caption-font uppercase tracking-wider text-white font-bold text-xs">
              Building Acurove AI
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-300 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Headline */}
        <h1
          className="mb-6 animate-slide-up leading-[1.05] flex flex-col items-center"
          style={{ animationDelay: '150ms' }}
        >
          <span className="profile-name-serif text-clamp-hero text-white block mb-2">{personalInfo.name}</span>
          <span className="text-clamp-hero block font-display font-extrabold leading-tight text-shimmer">
            {titles[mode]}
          </span>
        </h1>

        {/* Tagline */}
        <p className="paragraph-text mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '300ms' }}>
          {taglines[mode]}
        </p>

        {/* Dynamic Mode Switcher */}
        <div className="mb-10 animate-slide-up flex flex-col items-center" style={{ animationDelay: '400ms' }}>
          <span className="section-label mb-3">Customize Portfolio Focus</span>
          <ModeToggle mode={mode} setMode={setMode} />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-slide-up" style={{ animationDelay: '500ms' }}>
          {/* Highlighted Acurove AI Button */}
          <Link
            to="/acurove"
            id="hero-acurove-btn"
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white
              bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500
              shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]
              border border-cyan-400/40 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
            <span>Acurove AI</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <button
            id="hero-view-work"
            onClick={scrollToWork}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white
              bg-white/10 backdrop-blur-md border border-white/20
              hover:bg-white/20 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]
              transition-all duration-300 transform hover:-translate-y-1 focus:outline-none cursor-pointer"
          >
            {mode === 'creative' ? 'Explore Creative Lab' : mode === 'technical' ? 'View Tech Projects' : 'View My Work'}
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>

          <button
            id="hero-get-in-touch"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold
              text-[var(--color-text-primary)] bg-transparent hover:bg-[var(--color-surface)]
              border border-[var(--color-border)] hover:border-[var(--color-border-hover)]
              hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]
              transition-all duration-300 transform hover:-translate-y-1 focus:outline-none cursor-pointer"
          >
            Get In Touch
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '600ms' }}>
          {[
            { href: personalInfo.github,   Icon: GithubIcon,   label: 'GitHub'   },
            { href: personalInfo.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
            { href: personalInfo.youtube,  Icon: YoutubeIcon,  label: 'YouTube'  },
            { href: personalInfo.leetcode, Icon: LeetCodeIcon, label: 'LeetCode' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full flex items-center justify-center
                glass border border-[var(--color-border)] hover:border-[var(--color-accent-light)]
                text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)]
                transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(124,58,237,0.4)]
                focus:outline-none"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
          text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors
          focus:outline-none group"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-[var(--color-text-muted)] flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[var(--color-accent)] animate-bounce" />
        </div>
      </button>
    </section>
  );
}
