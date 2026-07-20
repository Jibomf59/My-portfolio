import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillGroups = [
  {
    label: 'Frontend',
    color: 'text-blue-400',
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/8',
    pills: [
      'HTML', 'CSS', 'JavaScript', 'TypeScript',
      'React.js', 'Tailwind CSS', 'Bootstrap', 'Framer Motion',
    ],
    pillStyle: 'border-blue-500/20 hover:border-blue-400/60 hover:bg-blue-500/15 hover:text-blue-300',
  },
  {
    label: 'Backend',
    color: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/8',
    pills: ['Node.js', 'Express.js', 'PHP', 'REST APIs'],
    pillStyle: 'border-emerald-500/20 hover:border-emerald-400/60 hover:bg-emerald-500/15 hover:text-emerald-300',
  },
  {
    label: 'Database',
    color: 'text-amber-400',
    border: 'border-amber-500/20',
    bg: 'bg-amber-500/8',
    pills: ['MySQL', 'MongoDB'],
    pillStyle: 'border-amber-500/20 hover:border-amber-400/60 hover:bg-amber-500/15 hover:text-amber-300',
  },
  {
    label: 'Tools & Workflow',
    color: 'text-violet-400',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/8',
    pills: ['Git', 'GitHub', 'VS Code', 'Vite', 'Postman', 'Figma'],
    pillStyle: 'border-violet-500/20 hover:border-violet-400/60 hover:bg-violet-500/15 hover:text-violet-300',
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/7 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-violet-500/7 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3">
            WHAT I KNOW
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            My Skills
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Skill groups — 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 + gi * 0.1 }}
              className={`relative p-7 rounded-2xl bg-white/[0.03] backdrop-blur-xl border ${group.border} hover:bg-white/[0.05] transition-colors`}
            >
              <h3 className={`text-sm font-semibold uppercase tracking-wider ${group.color} mb-5`}>
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.pills.map((pill, pi) => (
                  <motion.span
                    key={pill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + gi * 0.1 + pi * 0.04 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium text-zinc-300 bg-white/[0.04] border cursor-default transition-all ${group.pillStyle}`}
                  >
                    {pill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently exploring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-blue-500/6 via-violet-500/6 to-cyan-500/6 border border-white/7 text-center"
        >
          <p className="text-zinc-400 text-sm">
            <span className="text-white font-semibold">Currently exploring: </span>
            Next.js · Laravel · Docker · Testing (Vitest / RTL) · Advanced Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
