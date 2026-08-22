export type PortfolioMode = 'all' | 'technical' | 'creative';

type Props = {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  className?: string;
};

export default function ModeToggle({ mode, setMode, className = '' }: Props) {
  return (
    <div 
      className={`inline-flex p-1 bg-[#0f0f12]/90 backdrop-blur-xl border border-white/5 rounded-xl relative shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] ${className}`}
    >
      <button
        onClick={() => setMode('technical')}
        title="Technical & Research Mode"
        className={`relative z-10 flex-1 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg text-xs font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-1.5 focus:outline-none ${
          mode === 'technical'
            ? 'text-white bg-gradient-to-r from-violet-600 to-violet-500 shadow-md shadow-violet-600/20'
            : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
        }`}
      >
        <span>⚡</span>
        <span className="inline md:hidden lg:inline">Tech & Research</span>
      </button>
      <button
        onClick={() => setMode('all')}
        title="Full Portfolio"
        className={`relative z-10 flex-1 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg text-xs font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-1.5 focus:outline-none ${
          mode === 'all'
            ? 'text-white bg-gradient-to-r from-violet-600 to-cyan-500 shadow-md shadow-violet-500/10'
            : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
        }`}
      >
        <span>🔮</span>
        <span className="inline md:hidden lg:inline">Full Story</span>
      </button>
      <button
        onClick={() => setMode('creative')}
        title="Creative Lab Mode"
        className={`relative z-10 flex-1 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg text-xs font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-1.5 focus:outline-none ${
          mode === 'creative'
            ? 'text-white bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-md shadow-cyan-600/20'
            : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
        }`}
      >
        <span>🎨</span>
        <span className="inline md:hidden lg:inline">Creative Lab</span>
      </button>
    </div>
  );
}
