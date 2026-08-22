// MLLab.tsx — AI / ML Lab section with pipeline, case studies, and motivation
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { GithubIcon as Github } from './SocialIcons';
import { SectionHeader } from './About';
import {
  mlPipeline,
  caseStudies,
  whyAIML,
  currentlyBuilding,
  dataSkills,
  type CaseStudy,
} from '../data/portfolioData';

const statusConfig = {
  'complete':      { label: '🟢 Complete',      color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
  'in-progress':   { label: '🟡 In Progress',   color: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
  'experimental':  { label: '🔵 Experimental',  color: 'bg-sky-500/20 text-sky-300 border-sky-500/30' },
};

function CaseStudyCard({ study, inView, delay }: { study: CaseStudy; inView: boolean; delay: number }) {
  const [expanded, setExpanded] = useState(false);
  const status = statusConfig[study.status];

  return (
    <div
      className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]
        hover:border-[var(--color-border-hover)] transition-all duration-700
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h4 className="text-xl font-display font-bold text-[var(--color-text-primary)] tracking-tight">
              {study.title}
            </h4>
            <p className="paragraph-text text-sm text-[var(--color-text-secondary)] mt-1">
              {study.overview}
            </p>
          </div>
          <span className={`flex-shrink-0 px-3 py-1 caption-font tracking-widest uppercase rounded-full border text-[10px] ${status.color}`}>
            {status.label}
          </span>
        </div>

        {/* Tech + Concepts */}
        <div className="flex flex-col gap-3 mt-4">
          <div>
            <span className="section-label text-violet-400/80 text-[10px] mb-1.5 block">Stack</span>
            <div className="flex flex-wrap gap-1.5">
              {study.tech.map(t => (
                <span key={t} className="px-2.5 py-1 caption-font uppercase tracking-wider text-[var(--color-text-secondary)] bg-white/5 border border-white/10 rounded-md text-[10px]">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="section-label text-cyan-400/80 text-[10px] mb-1.5 block">Core Concepts</span>
            <div className="flex flex-wrap gap-1.5">
              {study.concepts.map(c => (
                <span key={c} className="px-2.5 py-1 caption-font uppercase tracking-wider text-cyan-300/80 bg-cyan-500/10 border border-cyan-500/20 rounded-md text-[10px]">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Expand / Collapse */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent-light)] hover:text-white transition-colors cursor-pointer focus:outline-none"
        >
          {expanded ? 'Hide Details' : 'View Case Study'}
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Expanded Case Study */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${expanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[var(--color-border)] space-y-6">
          {/* Problem */}
          <div>
            <h5 className="font-display font-bold text-sm text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> Problem
            </h5>
            <p className="paragraph-text text-sm">{study.problem}</p>
          </div>

          {/* Approach */}
          <div>
            <h5 className="font-display font-bold text-sm text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" /> Approach
            </h5>
            <p className="paragraph-text text-sm">{study.approach}</p>
          </div>

          {/* Key Features */}
          <div>
            <h5 className="font-display font-bold text-sm text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Key Features
            </h5>
            <ul className="space-y-1.5 text-sm text-[var(--color-text-secondary)]">
              {study.keyFeatures.map((f, i) => (
                <li key={i} className="flex gap-2"><span className="text-emerald-400">•</span> {f}</li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div>
            <h5 className="font-display font-bold text-sm text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Challenges
            </h5>
            <ul className="space-y-1.5 text-sm text-[var(--color-text-secondary)]">
              {study.challenges.map((c, i) => (
                <li key={i} className="flex gap-2"><span className="text-amber-400">•</span> {c}</li>
              ))}
            </ul>
          </div>

          {/* What I Learned */}
          <div>
            <h5 className="font-display font-bold text-sm text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> What I Learned
            </h5>
            <ul className="space-y-1.5 text-sm text-[var(--color-text-secondary)]">
              {study.whatILearned.map((l, i) => (
                <li key={i} className="flex gap-2"><span className="text-cyan-400">•</span> {l}</li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-2">
            {study.liveUrl !== '#' && (
              <a href={study.liveUrl} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white hover:bg-white hover:text-black rounded-xl btn-font uppercase transition-all border border-white/20 text-xs">
                <ExternalLink className="w-3.5 h-3.5" /> Live Demo
              </a>
            )}
            {study.githubUrl !== '#' && (
              <a href={study.githubUrl} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white hover:bg-white/20 rounded-xl btn-font uppercase transition-all border border-white/10 text-xs">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MLLab() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: pipeRef, inView: pipeInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: dataRef, inView: dataInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="mllab" className="section-padding bg-transparent border-t border-[var(--color-border)] relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="AI / ML Lab"
          title="Machine Learning Projects"
          subtitle="Building intelligent systems — from data processing to model deployment."
          inView={inView}
        />

        {/* ── Why AI/ML? ── */}
        <div
          className={`mt-14 max-w-3xl mx-auto text-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <blockquote className="quote-text text-[var(--color-text-secondary)] italic leading-relaxed">
            "{whyAIML}"
          </blockquote>
        </div>

        {/* ── Currently Building ── */}
        <div className="mt-14 grid sm:grid-cols-3 gap-4">
          {currentlyBuilding.map((item, idx) => (
            <div
              key={item.name}
              className={`rounded-2xl p-5 bg-[var(--color-bg-card)] border border-[var(--color-border)]
                hover:border-[var(--color-border-hover)] hover:-translate-y-1 transition-all duration-500
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${idx * 80 + 250}ms` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{item.icon}</span>
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border ${
                  item.status === 'active'
                    ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                    : 'bg-sky-500/15 text-sky-300 border-sky-500/30'
                }`}>
                  {item.status === 'active' ? 'Active' : 'Exploring'}
                </span>
              </div>
              <h4 className="font-display font-bold text-sm text-[var(--color-text-primary)] tracking-tight">{item.name}</h4>
              <p className="caption-font text-[var(--color-text-muted)] mt-1 uppercase tracking-wider text-[10px]">{item.area}</p>
            </div>
          ))}
        </div>

        {/* ── Case Studies ── */}
        <div className="mt-16 space-y-6">
          {caseStudies.map((study, idx) => (
            <CaseStudyCard key={study.projectId} study={study} inView={inView} delay={idx * 100 + 400} />
          ))}
        </div>

        {/* ── ML Pipeline ── */}
        <div ref={pipeRef} className="mt-20">
          <div
            className={`text-center mb-10 transition-all duration-700 ${
              pipeInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="section-label text-[var(--color-accent-light)] mb-3 block">Engineering Approach</span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--color-text-primary)] tracking-tight">
              How I Build ML Systems
            </h3>
            <p className="paragraph-text text-sm text-[var(--color-text-secondary)] mt-2 max-w-xl mx-auto">
              My learning process and engineering approach — from raw data to deployed models.
            </p>
          </div>

          {/* Pipeline visualization */}
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/30 to-transparent hidden sm:block" />

            <div className="grid sm:grid-cols-7 gap-3">
              {mlPipeline.map((stage, idx) => (
                <div
                  key={stage.name}
                  className={`relative flex flex-col items-center text-center group transition-all duration-500
                    ${pipeInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${idx * 80 + 200}ms` }}
                >
                  {/* Node */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]
                    group-hover:border-[var(--color-border-hover)] group-hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]
                    flex items-center justify-center text-xl transition-all duration-300 group-hover:-translate-y-1">
                    {stage.icon}
                  </div>
                  {/* Arrow (between nodes on mobile) */}
                  {idx < mlPipeline.length - 1 && (
                    <div className="sm:hidden text-[var(--color-text-muted)] my-1 text-xs">↓</div>
                  )}
                  {/* Label */}
                  <span className="font-display font-bold text-xs text-[var(--color-text-primary)] mt-2 tracking-tight">
                    {stage.name}
                  </span>
                  <span className="caption-font text-[9px] text-[var(--color-text-muted)] mt-1 leading-tight max-w-[100px]">
                    {stage.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Data & SQL Skills ── */}
        <div ref={dataRef} className="mt-20">
          <div
            className={`text-center mb-10 transition-all duration-700 ${
              dataInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="section-label text-[var(--color-accent-light)] mb-3 block">Data Engineering</span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--color-text-primary)] tracking-tight">
              Data & SQL
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* SQL Skills */}
            <div
              className={`rounded-2xl p-6 bg-[var(--color-bg-card)] border border-[var(--color-border)]
                hover:border-[var(--color-border-hover)] transition-all duration-500
                ${dataInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">🗄️</span>
                <h4 className="font-display font-bold text-lg text-[var(--color-text-primary)] tracking-tight">SQL</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {dataSkills.sql.map(s => (
                  <span key={s} className="px-3 py-1.5 text-xs font-mono font-medium text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-lg">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Python Data Stack */}
            <div
              className={`rounded-2xl p-6 bg-[var(--color-bg-card)] border border-[var(--color-border)]
                hover:border-[var(--color-border-hover)] transition-all duration-500
                ${dataInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">🐍</span>
                <h4 className="font-display font-bold text-lg text-[var(--color-text-primary)] tracking-tight">Python Data Stack</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {dataSkills.pythonStack.map(s => (
                  <span key={s} className="px-3 py-1.5 text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
