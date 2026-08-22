import { useInView } from 'react-intersection-observer';
import { skillCategories, codingAchievement, hackerRankBadges } from '../data/portfolioData';
import { SectionHeader } from './About';
import { type PortfolioMode } from './ModeToggle';
import { ExternalLink } from 'lucide-react';

type Props = {
  mode?: PortfolioMode;
};

function StarRating({ filled, max }: { filled: number; max: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={`text-sm transition-colors duration-300 ${
            i < filled ? 'text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.5)]' : 'text-[var(--color-text-muted)]/40'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Skills({ mode = 'all' }: Props) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: codingRef, inView: codingInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const title = mode === 'creative' 
    ? 'Creative Skills' 
    : mode === 'technical' 
      ? 'Technical Skills' 
      : 'Technical & Creative Skills';

  const subtitle = mode === 'creative'
    ? 'Proficiencies in 3D modeling, animation, video production, and visual layouts.'
    : mode === 'technical'
      ? 'Core competencies across AI/ML, data, programming, and software engineering.'
      : 'Core competencies across AI/ML, software engineering, and creative design.';

  return (
    <section id="skills" className="section-padding bg-transparent border-t border-[var(--color-border)] relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Expertise"
          title={title}
          subtitle={subtitle}
          inView={inView}
        />

        {/* Category grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillCategories.map((cat, catIdx) => {
            return (
              <div
                key={cat.name}
                className={`rounded-2xl p-6 bg-[var(--color-bg-card)] border border-[var(--color-border)]
                  hover:border-[var(--color-border-hover)] hover:shadow-[0_8px_30px_rgba(56,189,248,0.12)] hover:-translate-y-1.5 transition-all duration-500
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${catIdx * 100 + 200}ms` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="text-lg font-display font-bold text-[var(--color-text-primary)] tracking-tight">{cat.name}</h3>
                </div>

                {/* Skill dots */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="flex justify-between items-center text-sm">
                      <span className="font-medium text-[var(--color-text-secondary)]">
                        {skill.name}
                      </span>
                      <span className="text-violet-400 font-mono tracking-widest text-[10px] uppercase">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ──────────────────────────────────────────────
            CODING PROFILES & ACHIEVEMENTS — Subsection
            ────────────────────────────────────────────── */}
        {mode !== 'creative' && (
          <div ref={codingRef} className="mt-24">
            {/* Subsection heading */}
            <div
              className={`text-center mb-14 transition-all duration-700 ${
                codingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="section-label text-[var(--color-accent-light)] mb-3 block">
                Competitive Programming
              </span>
              <h3 className="text-clamp-heading text-[var(--color-text-primary)]">
                Coding Profiles & Achievements
              </h3>
            </div>

            {/* LeetCode — Primary Achievement Card */}
            <div
              className={`relative rounded-2xl overflow-hidden border border-[var(--color-border)]
                hover:border-[var(--color-border-hover)] hover:shadow-[0_8px_40px_rgba(124,58,237,0.18)]
                transition-all duration-700 group
                ${codingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '150ms' }}
            >
              {/* Subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-[var(--color-bg-card)] to-violet-600/5 pointer-events-none" />
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-amber-500/8 blur-[80px] pointer-events-none group-hover:bg-amber-500/12 transition-colors duration-700" />

              <div className="relative p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8">
                {/* Left — Big number */}
                <div className="flex-shrink-0 text-center sm:text-left">
                  <div className="text-6xl sm:text-7xl font-mono font-extrabold tracking-tighter leading-none gradient-text">
                    {codingAchievement.headline}
                  </div>
                  <div className="text-lg sm:text-xl font-display font-bold text-[var(--color-text-primary)] mt-2 tracking-tight">
                    {codingAchievement.platform} {codingAchievement.description}
                  </div>
                </div>

                {/* Right — Details */}
                <div className="flex-1 flex flex-col items-center sm:items-start gap-4">
                  <p className="paragraph-text text-[var(--color-text-secondary)] text-sm sm:text-base">
                    Solved {codingAchievement.count} problems on {codingAchievement.platform} focusing on{' '}
                    Data Structures & Algorithms, SQL problem solving, and Python programming.
                  </p>

                  {/* Highlight tags */}
                  <div className="flex flex-wrap gap-2">
                    {codingAchievement.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1 caption-font uppercase tracking-wider text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-lg"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Profile link */}
                  <a
                    href={codingAchievement.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    id="leetcode-profile-link"
                    className="inline-flex items-center gap-2 px-5 py-2.5 mt-1
                      bg-gradient-to-r from-violet-600 to-violet-500 text-white
                      rounded-xl btn-font uppercase
                      shadow-lg shadow-violet-500/25
                      hover:shadow-violet-500/40 hover:-translate-y-0.5
                      transition-all duration-300 focus:outline-none"
                  >
                    View LeetCode Profile
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* HackerRank Badges */}
            <div className="mt-10">
              <h4
                className={`font-display font-bold text-lg text-[var(--color-text-primary)] mb-6 flex items-center gap-2 transition-all duration-700 ${
                  codingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <span className="w-5 h-5 rounded-md bg-emerald-500/20 flex items-center justify-center text-xs">🏆</span>
                HackerRank
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {hackerRankBadges.map((badge, idx) => (
                  <div
                    key={badge.skill}
                    className={`rounded-2xl p-5 bg-[var(--color-bg-card)] border border-[var(--color-border)]
                      hover:border-[var(--color-border-hover)] hover:shadow-[0_6px_24px_rgba(56,189,248,0.1)] hover:-translate-y-1
                      transition-all duration-500
                      ${codingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                    style={{ transitionDelay: `${idx * 80 + 400}ms` }}
                  >
                    <span className="text-2xl block mb-3">{badge.icon}</span>
                    <h5 className="font-display font-bold text-sm text-[var(--color-text-primary)] tracking-tight mb-2">
                      {badge.skill}
                    </h5>
                    <StarRating filled={badge.stars} max={badge.maxStars} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
