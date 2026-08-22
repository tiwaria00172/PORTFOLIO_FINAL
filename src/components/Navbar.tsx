import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Zap, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ModeToggle, { type PortfolioMode } from './ModeToggle';

type Props = {
  isDark: boolean;
  toggleTheme: () => void;
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
};

export default function Navbar({ isDark, toggleTheme, mode, setMode }: Props) {
  const [isOpen,    setIsOpen]    = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  const isBrandPage = location.pathname === '/acurove';

  interface NavLink {
    label: string;
    href: string;
    isRoute?: boolean;
  }

  // Standard nav links
  const navLinks: NavLink[] = isBrandPage
    ? [
        { label: 'Portfolio Home', href: '/', isRoute: true },
        { label: 'Mission', href: '#mission' },
        { label: 'What We Build', href: '#what-we-build' },
        { label: 'Approach', href: '#approach' },
        { label: 'Tech Stack', href: '#tech-stack' },
        { label: 'Contact', href: '#contact' },
      ]
    : [
        { label: 'About',    href: '#about'    },
        ...(mode !== 'creative' ? [{ label: 'ML Lab', href: '#mllab' }] : []),
        ...(mode !== 'creative' ? [{ label: 'Projects', href: '#projects' }] : []),
        ...(mode !== 'technical' ? [{ label: 'Creative', href: '#creative' }] : []),
        { label: 'Skills',   href: '#skills'   },
        { label: 'Contact',  href: '#contact'  },
      ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section (only for non-route links)
      const sections = navLinks.filter(l => !l.isRoute).map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mode, isBrandPage]);

  const handleNav = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-[var(--color-border)] shadow-xl backdrop-blur-xl bg-[#05070a]/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            if (!isBrandPage) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-2 group focus:outline-none"
          aria-label="Go to top"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(124,58,237,0.4)]">
            <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
          </span>
          <span className="text-clamp-logo gradient-text font-bold">
            {isBrandPage ? 'Acurove' : personalInfo.name.split(' ')[0]}
            <span className="text-[var(--color-text-muted)]">.</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => {
            if (link.isRoute) {
              return (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="px-4 py-2 rounded-lg nav-item-font transition-all duration-200 focus:outline-none block text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            }

            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`px-4 py-2 rounded-lg nav-item-font transition-all duration-200 focus:outline-none cursor-pointer ${
                    isActive
                      ? 'text-[var(--color-accent-light)] bg-[var(--color-surface)] font-bold'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] font-medium'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Featured Acurove AI Highlighted Button */}
          {!isBrandPage && (
            <Link
              to="/acurove"
              id="acurove-ai-nav-btn"
              className="relative group flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white
                bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500
                border border-cyan-400/40 shadow-[0_0_20px_rgba(124,58,237,0.4)]
                hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105 hover:border-cyan-300
                transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Subtle background shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
              <span>Acurove AI</span>
              <span className="px-1.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-200 text-[9px] font-extrabold border border-cyan-400/30">
                PRO
              </span>
            </Link>
          )}

          {/* Mode Toggle - only show on portfolio page */}
          {!isBrandPage && <ModeToggle mode={mode} setMode={setMode} className="mr-1" />}

          {/* Theme toggle */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] transition-all duration-200 focus:outline-none cursor-pointer"
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Resume / Action button */}
          {isBrandPage ? (
            <button
              onClick={() => handleNav('#contact')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg btn-font text-white uppercase
                bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400
                shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-0.5
                btn-ripple focus:outline-none cursor-pointer"
            >
              Contact Us
            </button>
          ) : (
            <a
              href={personalInfo.resumeUrl}
              download
              id="download-resume-nav"
              className="flex items-center gap-2 px-4 py-2 rounded-lg btn-font text-white uppercase
                bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400
                shadow-lg hover:shadow-violet-500/30 transition-all duration-300 transform hover:-translate-y-0.5
                btn-ripple focus:outline-none"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          )}
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Acurove AI mini pill button */}
          {!isBrandPage && (
            <Link
              to="/acurove"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-cyan-500 border border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.4)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-pulse" />
              <span>Acurove AI</span>
            </Link>
          )}

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] transition-all focus:outline-none cursor-pointer"
          >
            {isDark
              ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            }
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] transition-all focus:outline-none cursor-pointer"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass border-t border-[var(--color-border)] px-6 py-4 space-y-2">
          {/* Mobile Highlight for Acurove AI */}
          {!isBrandPage && (
            <Link
              to="/acurove"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 border border-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.3)] mb-2"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
                <span>Explore Acurove AI</span>
              </div>
              <span className="text-xs bg-cyan-400/20 px-2 py-0.5 rounded-full border border-cyan-300/40 text-cyan-200">
                PRO ➔
              </span>
            </Link>
          )}

          {/* Mode Toggle for Mobile - only on portfolio */}
          {!isBrandPage && (
            <div className="pb-3 mb-2 border-b border-[var(--color-border)]">
              <p className="text-[10px] text-[var(--color-text-muted)] font-bold uppercase tracking-wider mb-2 text-center">Portfolio Focus</p>
              <ModeToggle mode={mode} setMode={setMode} className="w-full" />
            </div>
          )}

          {navLinks.map((link) => {
            if (link.isRoute) {
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium block transition-all duration-200 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]"
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] transition-all duration-200 focus:outline-none cursor-pointer"
              >
                {link.label}
              </button>
            );
          })}

          {isBrandPage ? (
            <button
              onClick={() => handleNav('#contact')}
              className="w-full text-center px-4 py-3 mt-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 focus:outline-none cursor-pointer"
            >
              Contact Us
            </button>
          ) : (
            <a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center justify-center gap-2 px-4 py-3 mt-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-violet-500 focus:outline-none"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

