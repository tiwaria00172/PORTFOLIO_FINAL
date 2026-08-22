import { useInView } from 'react-intersection-observer';
import { Lightbulb, Target, Users, Zap } from 'lucide-react';

export default function ProductMindset() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const points = [
    {
      icon: <Target className="w-5 h-5 text-rose-400" />,
      title: "Problem First",
      desc: "Identifying real-world friction before writing a single line of code."
    },
    {
      icon: <Users className="w-5 h-5 text-sky-400" />,
      title: "User Centric",
      desc: "Focusing on usability, retention, and how people actually interact with the system."
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Rapid Execution",
      desc: "Leveraging hackathons and rapid prototyping to test ideas and iterate quickly."
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-emerald-400" />,
      title: "Product Vision",
      desc: "Turning technical ML/Software concepts into accessible, practical applications."
    }
  ];

  return (
    <section className="py-12 bg-transparent relative overflow-hidden border-t border-[var(--color-border)]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div ref={ref} className="max-w-5xl mx-auto px-6 relative z-10">
        <div className={`flex flex-col md:flex-row items-center gap-10 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Left Side: Statement */}
          <div className="flex-1 text-center md:text-left">
            <span className="section-label text-rose-400/80 mb-2 block">Entrepreneurial Mindset</span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight leading-snug mb-4">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Products</span>,<br /> Not Just Projects.
            </h3>
            <p className="paragraph-text text-gray-400 text-sm max-w-md mx-auto md:mx-0">
              I enjoy going beyond implementation — identifying problems, understanding users, and turning technical concepts into practical products. Projects like <strong className="text-gray-200">Acurove AI Fit</strong> are born from this drive to create usable solutions.
            </p>
          </div>

          {/* Right Side: Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            {points.map((pt, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-rose-500/30 transition-colors"
              >
                <div className="mb-3 p-2 rounded-xl bg-white/5 inline-flex backdrop-blur-sm border border-white/10">
                  {pt.icon}
                </div>
                <h4 className="font-display font-bold text-sm text-white mb-1">{pt.title}</h4>
                <p className="text-[10px] text-gray-400 leading-relaxed font-sans">{pt.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
