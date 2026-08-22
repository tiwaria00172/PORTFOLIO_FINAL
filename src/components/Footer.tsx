import { Link, useLocation } from 'react-router-dom';
import { Zap, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon, LeetCodeIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

interface FooterLink {
  label: string;
  href: string;
  isRoute?: boolean;
  isSpecial?: boolean;
}

export default function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();
  const isBrandPage = location.pathname === '/acurove';

  const footerLinks: FooterLink[] = isBrandPage
    ? [
        { label: 'Portfolio Home', href: '/', isRoute: true },
        { label: 'Mission', href: '#mission' },
        { label: 'What We Build', href: '#what-we-build' },
        { label: 'Approach', href: '#approach' },
        { label: 'Contact', href: '#contact' },
      ]
    : [
        { label: 'About',    href: '#about'    },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills',   href: '#skills'   },
        { label: 'Contact',  href: '#contact'  },
        { label: 'Acurove AI', href: '/acurove', isRoute: true, isSpecial: true },
      ];

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </span>
            <span className="text-lg font-bold gradient-text" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {isBrandPage ? 'Acurove' : personalInfo.name.split(' ')[0]}.
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center items-center gap-6">
            {footerLinks.map((link) => {
              if (link.isRoute) {
                if (link.isSpecial) {
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all focus:outline-none"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
                      <span>{link.label}</span>
                    </Link>
                  );
                }
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors focus:outline-none"
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors focus:outline-none cursor-pointer"
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { href: personalInfo.github,   Icon: GithubIcon,   label: 'GitHub'   },
              { href: personalInfo.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
              { href: personalInfo.twitter,  Icon: TwitterIcon,  label: 'Twitter'  },
              { href: personalInfo.youtube,  Icon: YoutubeIcon,  label: 'YouTube'  },
              { href: personalInfo.leetcode, Icon: LeetCodeIcon, label: 'LeetCode' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center
                  text-[var(--color-text-muted)] hover:text-violet-400
                  border border-[var(--color-border)] hover:border-[var(--color-border-hover)]
                  transition-all duration-200 hover:-translate-y-0.5 focus:outline-none"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
          <p>© {year} {isBrandPage ? 'Acurove Inc' : personalInfo.name}. All rights reserved.</p>
          {/* Empty p tag removed to clear React & Vite mention */}
        </div>
      </div>
    </footer>
  );
}
