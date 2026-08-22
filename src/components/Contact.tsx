import { useInView } from 'react-intersection-observer';
import { Mail, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon, LeetCodeIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { SectionHeader } from './About';

const socials = [
  { href: personalInfo.github,   Icon: GithubIcon,   label: 'GitHub' },
  { href: personalInfo.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
  { href: personalInfo.youtube,  Icon: YoutubeIcon,  label: 'YouTube' },
  { href: personalInfo.leetcode, Icon: LeetCodeIcon, label: 'LeetCode' },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="contact" className="section-padding bg-transparent border-t border-[var(--color-border)] relative overflow-hidden">
      {/* Background glowing */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-violet-600/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

      <div ref={ref} className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <SectionHeader
          badge="Hire Me"
          title="Open To Opportunities"
          subtitle="Currently seeking AI/ML, Data/SQL, and Software Engineering internship roles where I can contribute to building intelligent systems and solving real engineering problems."
          inView={inView}
        />

        <div className={`mt-12 glass bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-xl font-display font-bold text-[var(--color-text-primary)] mb-6">
            Seeking opportunities in:
          </h3>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 mb-10">
            <div className="flex items-center justify-center gap-2 text-left">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="font-medium text-[var(--color-text-secondary)]">AI/ML & Computer Vision</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-left">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="font-medium text-[var(--color-text-secondary)]">Data & SQL Engineering</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-left">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="font-medium text-[var(--color-text-secondary)]">Software Development</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white btn-font rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:-translate-y-1 uppercase"
            >
              <Mail className="w-5 h-5" />
              {personalInfo.email}
            </a>

            <div className="flex justify-center items-center gap-4 mt-4">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center w-24 h-24 border border-[var(--color-border)] rounded-2xl text-[var(--color-text-secondary)] hover:text-white glass bg-white/5 hover:bg-violet-600/20 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-6 h-6 mb-2 group-hover:text-violet-400 transition-colors" />
                  <span className="caption-font text-[10px] uppercase tracking-wider font-semibold">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
