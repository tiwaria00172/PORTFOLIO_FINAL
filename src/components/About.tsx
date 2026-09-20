import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, User } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { type PortfolioMode } from './ModeToggle';

type Props = {
  mode?: PortfolioMode;
};

export default function About({ mode = 'all' }: Props) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const bios = {
    all: 'A CSE/AIML student focused on building practical AI/ML applications, data-driven software, and intelligent systems using Python, SQL, and modern development tools. I enjoy taking real-world problems and turning them into working software and AI solutions. Also experienced in full-stack development, IoT, and creative 3D visualization.',
    technical: 'An AI/ML-focused software developer building intelligent systems with Python, OpenCV, and data analysis tools. Experienced in computer vision, face recognition pipelines, and backend APIs. Driven by clean code, measurable results, and shipping real solutions.',
    creative: 'A creative technologist and 3D artist specializing in Blender simulations, cinematic rendering, and motion design. Passionate about bridging technical concepts with beautiful, interactive, and high-impact visual design.'
  };

  const achievements = [
    { text: 'Built an AI-powered face recognition attendance system using Python, OpenCV, InsightFace, and ONNX Runtime', categories: ['technical', 'all'] },
    { text: 'Solved 200+ problems on LeetCode using Java, Python, and SQL', categories: ['technical', 'all'] },
    { text: 'Developed 5+ projects spanning AI/ML, web development, and IoT', categories: ['technical', 'all'] },
    { text: 'Created Blender-based 3D visuals and creative renders', categories: ['creative', 'all'] },
    { text: 'Cleared Internal Round of Smart India Hackathon (SIH)', categories: ['technical', 'all'] },
    { text: 'Serving as an Organizing Member at Kaagaz (an open mic community), having successfully organized a total of 8 events', categories: ['creative', 'all'] },
    { text: 'Actively involved in community-driven tech and innovation initiatives', categories: ['technical', 'creative', 'all'] }
  ].filter(item => item.categories.includes(mode));

  const explorations = [
    { text: 'Machine Learning fundamentals — supervised & unsupervised learning', categories: ['technical', 'all'] },
    { text: 'Scikit-learn, data preprocessing, and feature engineering', categories: ['technical', 'all'] },
    { text: 'Model evaluation and optimization techniques', categories: ['technical', 'all'] },
    { text: 'Python for data science — NumPy, Pandas, Matplotlib', categories: ['technical', 'all'] },
    { text: 'SQL querying and database design', categories: ['technical', 'all'] },
    { text: 'Computer Vision with OpenCV and InsightFace', categories: ['technical', 'all'] },
    { text: 'Backend APIs for ML applications (FastAPI, Flask)', categories: ['technical', 'all'] },
    { text: 'Brain-Computer Interfaces (BCI) — exploratory research interest', categories: ['technical', 'all'] },
    { text: 'Cinematic layout, fluids, and atmospheric lighting styles in Blender', categories: ['creative', 'all'] },
    { text: 'VFX compositor techniques & advanced camera tracking workflows', categories: ['creative', 'all'] }
  ].filter(item => item.categories.includes(mode));

  const stats = [
    { val: '9.3', label: 'CGPA', categories: ['technical', 'all', 'creative'] },
    { val: '200+', label: 'LeetCode Problems', categories: ['technical', 'all'] },
    { val: '5+', label: 'Projects', categories: ['technical', 'all'] },
    { val: '13', label: 'Blender Renders', categories: ['creative', 'all'] },
    { val: '8', label: 'Kaagaz Events Hosted', categories: ['creative'] },
    { val: '5+', label: '3D/VFX Motion Videos', categories: ['creative'] }
  ].filter(item => item.categories.includes(mode));

  return (
    <section id="about" className="section-padding bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <SectionHeader
          badge="About Me"
          title="The person behind the craft"
          subtitle="An AI/ML-focused developer who values practical solutions, clean code, and continuous growth."
          inView={inView}
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Profile + Bio */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Profile card */}
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-10">
              <div className="relative flex-shrink-0">
                <div className="w-28 h-28 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl overflow-hidden flex items-center justify-center relative">
                  <img
                    src="/profile.png"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-emerald-400 border-2 border-[var(--color-bg-secondary)] flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping absolute" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </span>
              </div>

              <div>
                <h3 className="text-2xl profile-name-serif text-[var(--color-text-primary)] mb-1">
                  {personalInfo.name}
                </h3>
                <p className="caption-font text-[var(--color-accent-light)] font-medium text-xs mb-3 uppercase tracking-wider">
                  {mode === 'all' ? personalInfo.title : mode === 'technical' ? 'AI/ML Developer' : '3D Artist & Creative Technologist'}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--color-text-muted)]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {personalInfo.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3" /> {personalInfo.email}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="paragraph-text">
                {bios[mode]}
              </p>

              <div>
                <h4 className="font-bold text-[var(--color-text-primary)] text-lg mb-3 flex items-center gap-2">
                  <span>🎯</span> What I've Built & Achieved
                </h4>
                <ul className="space-y-3 text-[var(--color-text-secondary)] list-none pl-1 text-sm">
                  {achievements.map((ach, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-[var(--color-accent)]">•</span> {ach.text}
                    </li>
                  ))}
                </ul>
                {mode !== 'technical' && (
                  <div className="mt-3">
                    <a href="https://www.instagram.com/kaagaz_nagpur?igsh=MXgyanh1Yzk1bjgyMw==" target="_blank" rel="noreferrer" className="text-sm text-[var(--color-accent)] hover:underline flex items-center gap-2">
                      <span>📸</span> Instagram (Kaagaz Nagpur)
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-2">
                <h4 className="font-bold text-[var(--color-text-primary)] text-lg mb-3 flex items-center gap-2">
                  <span>💡</span> Currently Exploring
                </h4>
                <ul className="space-y-3 text-[var(--color-text-secondary)] list-none pl-1 text-sm">
                  {explorations.map((exp, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-[var(--color-accent)]">•</span> {exp.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <span className="text-[var(--color-text-primary)]">Find my work:</span>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-[var(--color-accent)] hover:underline">GitHub</a>
                  {mode !== 'creative' && <a href="#projects" className="text-[var(--color-accent)] hover:underline">Live Demos</a>}
                  {mode !== 'technical' && <a href="#creative" className="text-[var(--color-accent)] hover:underline">Blender Renders</a>}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className={`rounded-xl p-6 bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-colors ${stat.desc ? 'col-span-1 sm:col-span-2 md:col-span-1' : ''}`}>
                <div className={`text-clamp-stat text-[var(--color-accent)] mb-1 ${stat.val.includes('🏆') ? 'text-3xl sm:text-4xl' : ''}`}>{stat.val}</div>
                <div className={`caption-font tracking-wider ${stat.desc ? 'text-[var(--color-text-primary)] font-bold text-sm uppercase' : 'text-[var(--color-text-secondary)] font-medium uppercase'}`}>{stat.label}</div>
                {stat.desc && <div className="mt-2 text-sm text-[var(--color-text-primary)] font-semibold">{stat.desc}</div>}
                {stat.footer && <div className="mt-1 text-xs text-[var(--color-text-muted)] italic">{stat.footer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable section header
export function SectionHeader({
  badge,
  title,
  subtitle,
  inView,
}: {
  badge: string;
  title: string;
  subtitle?: string;
  inView: boolean;
}) {
  return (
    <div
      className={`text-center transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full section-label mb-4">
        <User className="w-3 h-3 text-[var(--color-accent-light)]" />
        {badge}
      </span>
      <h2
        className="text-clamp-heading text-[var(--color-text-primary)] mb-4"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="paragraph-text text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
