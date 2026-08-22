// Projects.tsx — Project grid with category filter and cards
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Layers } from 'lucide-react';
import { GithubIcon as Github } from './SocialIcons';
import { projects, type Project } from '../data/portfolioData';
import { SectionHeader } from './About';

const ALL = 'All';
const regularProjects = projects.filter(p => p.category !== 'Creative & Visual');

// Unique categories derived from data
const categories = [ALL, ...Array.from(new Set(regularProjects.map((p) => p.category)))];

const cardPatterns = [
  'radial-gradient(ellipse at 30% 40%, rgba(124,58,237,0.2) 0%, rgba(6,182,212,0.1) 60%, transparent 100%)',
  'radial-gradient(ellipse at 70% 30%, rgba(37,99,235,0.2) 0%, rgba(124,58,237,0.1) 60%, transparent 100%)',
  'radial-gradient(ellipse at 50% 60%, rgba(16,185,129,0.2) 0%, rgba(14,165,233,0.1) 60%, transparent 100%)',
  'radial-gradient(ellipse at 30% 70%, rgba(245,158,11,0.2) 0%, rgba(239,68,68,0.1) 60%, transparent 100%)',
];

export default function Projects() {
  const [filter, setFilter] = useState(ALL);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered = filter === ALL ? regularProjects : regularProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-transparent relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Portfolio"
          title="Projects I'm proud of"
          subtitle="A curated collection of web applications, hardware prototypes, and creative experiments."
          inView={inView}
        />

        {/* Filter tabs */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-2 transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(/\//g, '-')}`}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full btn-font uppercase transition-all duration-300 focus:outline-none ${
                filter === cat
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30'
                  : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filtered.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              pattern={cardPatterns[idx % cardPatterns.length]}
              inView={inView}
              delay={idx * 80 + 300}
            />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-[var(--color-text-muted)]">
            <Layers className="w-10 h-10 mx-auto mb-3 opacity-40" />
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  pattern,
  inView,
  delay,
}: {
  project: Project;
  pattern: string;
  inView: boolean;
  delay: number;
}) {
  return (
    <div
      className={`group relative h-auto md:h-[480px] rounded-[32px] overflow-hidden border border-[var(--color-border)] hover:border-violet-500/50 transition-all duration-700 ease-out hover:shadow-[0_8px_40px_rgba(124,58,237,0.2)] ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background Image / Pattern */}
      <div className="absolute inset-0 w-full h-full bg-[#101014]">
        <div
          className="w-full h-full opacity-30 transition-transform duration-[1200ms] group-hover:scale-105"
          style={{ background: pattern }}
        />
      </div>

      {project.status && (
        <div className={`absolute top-6 right-6 px-3 py-1 ${
          project.status === 'In Progress' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
          project.status === 'Experimental' ? 'bg-sky-500/20 text-sky-300 border-sky-500/30' :
          project.status === 'Complete' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
          'bg-white/10 text-gray-300 border-white/20'
        } caption-font tracking-widest uppercase rounded-full border z-10 backdrop-blur-md`}>
          {project.status === 'Complete' ? '🟢 Complete' : project.status === 'In Progress' ? '🟡 In Progress' : project.status === 'Experimental' ? '🔵 Experimental' : project.status}
        </div>
      )}

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-[#101014]/60 p-8 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.2,1,0.3,1)]">
          
          <div className="mb-2">
            <span className="section-label text-violet-400 mb-1 block">
              {project.category}
            </span>
            <h3 className="text-3xl font-display font-extrabold text-white drop-shadow-md tracking-tight">{project.title}</h3>
            <p className="paragraph-text text-gray-300 text-sm mt-2">{project.description}</p>
          </div>
          
          <div className="mt-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
            {project.whatItDoes && (
              <div>
                <span className="section-label text-cyan-400/80 mb-0.5 block">Approach / Solution</span>
                <p className="paragraph-text text-sm text-gray-300 leading-relaxed mt-0.5">{project.whatItDoes}</p>
              </div>
            )}
            {project.proof && (
              <div>
                <span className="section-label text-emerald-400/80 mb-0.5 block">Result</span>
                <p className="paragraph-text text-sm text-emerald-300/90 leading-relaxed mt-0.5">• {project.proof}</p>
              </div>
            )}
          </div>
          
          {/* Tech tags fading in */}
          <div className="flex flex-wrap gap-2 mt-6 opacity-80 group-hover:opacity-100 transition-all duration-500 delay-150">
            {project.tech.map(t => (
              <span key={t} className="px-2.5 py-1 caption-font uppercase tracking-wider text-[var(--color-text-secondary)] bg-white/5 border border-white/10 rounded-md backdrop-blur-sm">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            {project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white hover:bg-white btn-font hover:text-black rounded-xl border border-white/20 transition-all focus:outline-none uppercase">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            {project.githubUrl !== '#' && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors border border-white/10">
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
