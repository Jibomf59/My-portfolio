import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiBookOpen, HiCode, HiChip, HiGlobe, HiDatabase } from 'react-icons/hi';

const courses = [
  { name: 'Data Structures & Algorithms', icon: HiChip, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { name: 'Database Systems', icon: HiDatabase, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { name: 'Software Engineering', icon: HiCode, color: 'text-violet-400', bg: 'bg-violet-500/10' },
  { name: 'Computer Networks', icon: HiGlobe, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { name: 'Web Development', icon: HiBookOpen, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  { name: 'Operating Systems', icon: HiChip, color: 'text-pink-400', bg: 'bg-pink-500/10' },
];

const achievements = [
  { label: 'Graduated', value: '2024', sub: 'Completion year' },
  { label: 'Focus Area', value: 'Web', sub: 'Specialization' },
  { label: 'Thesis', value: 'AI', sub: 'Accessibility project' },
];

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-500/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-cyan-500/8 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">

          {/* ── Degree Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative"
          >
            <div className="absolute -inset-px bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 lg:p-10 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start gap-6">

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/25">
                  <HiAcademicCap className="text-white" size={30} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Bachelor of Science in Computer Science
                      </h3>
                      <div className="flex items-center gap-3 mt-1.5">
                        <p className="text-blue-400 font-medium text-sm">Haramaya University</p>
                        <span className="text-slate-600">·</span>
                        <p className="text-slate-500 text-sm">Haramaya, Ethiopia</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 whitespace-nowrap self-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Completed · 2024
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Completed a rigorous Computer Science program covering software engineering,
                    algorithms, data structures, web technologies, and AI systems. Graduated with
                    a focus on practical application development and built an AI accessibility
                    tool as a thesis project.
                  </p>

                  {/* Achievement pills */}
                  <div className="flex flex-wrap gap-3">
                    {achievements.map((a) => (
                      <div key={a.label} className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/8">
                        <div>
                          <p className="text-slate-500 text-[10px] uppercase tracking-wider">{a.label}</p>
                          <p className="text-white font-bold text-sm leading-tight">{a.value}</p>
                          <p className="text-slate-600 text-[10px]">{a.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Relevant Coursework ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold text-center mb-6 text-lg">
              Relevant Coursework
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {courses.map((course, i) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className={`flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.03] border border-white/8 hover:border-white/15 hover:bg-white/[0.06] transition-all cursor-default`}
                >
                  <div className={`w-9 h-9 rounded-lg ${course.bg} flex items-center justify-center flex-shrink-0`}>
                    <course.icon className={course.color} size={18} />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{course.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
