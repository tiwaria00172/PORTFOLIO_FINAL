import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Eye, ChevronDown } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { SectionHeader } from './About';

export default function CreativeLab() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [visibleCount, setVisibleCount] = useState(6);
  
  // Filter for creative work
  const creativeProjects = projects.filter(p => p.category === 'Creative & Visual');

  if (creativeProjects.length === 0) return null;

  return (
    <section id="creative" className="section-padding relative overflow-hidden bg-transparent">
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Creative Lab"
          title="Creative Visuals"
          subtitle="Tools: Blender 3.6 | Techniques: Lighting, Shading, Fluid Simulation"
          inView={inView}
        />

        {/* Grid layout */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {creativeProjects.slice(0, visibleCount).map((project, idx) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl bg-[#0e0e12] border border-[var(--color-border)] hover:border-violet-500/50 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(124,58,237,0.15)] `}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${(idx % 6) * 100}ms`
              }}
            >
              {/* Media */}
              <div className="aspect-[4/5] relative w-full overflow-hidden bg-black/50">
                {project.videoUrl ? (
                  <video
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-transform duration-700`} />
                )}
                
                {/* Cinematic hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-display font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm paragraph-text text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(t => (
                         <span key={t} className="px-2 py-1 caption-font text-[10px] uppercase tracking-wider text-gray-300 bg-white/10 rounded-md backdrop-blur-md border border-white/5">
                           {t}
                         </span>
                      ))}
                    </div>
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex w-max items-center gap-2 btn-font text-white bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-lg transition-colors uppercase"
                      >
                        <Eye className="w-4 h-4" /> Watch Render
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < creativeProjects.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent hover:bg-[var(--color-surface)] text-[var(--color-text-primary)] btn-font border border-[var(--color-border)] hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all duration-300 uppercase"
            >
              View More Visuals <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
