import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

const projects = [
  {
    title: 'AI Academic Assistant',
    emoji: '🤖',
    initial: 'A',
    emojiBg: 'bg-gradient-to-br from-blue-600 to-violet-700',
    description:
      'An AI-powered accessibility tool helping visually impaired students at Haramaya University access educational resources through voice interaction, real-time speech, and intelligent responses.',
    tech: ['React', 'JavaScript', 'AI APIs', 'Web Speech API', 'CSS3'],
    github: 'https://github.com/Jibomf59',
    demo: null,
    glowFrom: 'from-blue-500/20',
    glowTo: 'to-violet-500/20',
    borderHover: 'hover:border-blue-500/30',
  },
  {
    title: 'Inventory Master',
    emoji: '📦',
    initial: 'I',
    emojiBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    description:
      'A full-stack inventory management system for Adama City Administration to track, manage, and report on city assets — replacing manual record-keeping with a reliable digital solution.',
    tech: ['Java', 'MySQL', 'JDBC', 'OOP', 'Desktop UI'],
    github: 'https://github.com/Jibomf59/Inventory-master.git',
    demo: null,
    glowFrom: 'from-amber-500/20',
    glowTo: 'to-orange-500/20',
    borderHover: 'hover:border-amber-500/30',
  },
  {
    title: 'ATM Simulation',
    emoji: '🏧',
    initial: 'A',
    emojiBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    description:
      'A command-line ATM simulation in Java handling core banking: PIN authentication, balance inquiry, deposit, and withdrawal — demonstrating strong OOP and data structure fundamentals.',
    tech: ['Java', 'OOP', 'Console I/O', 'Data Structures'],
    github: 'https://github.com/Jibomf59/ATM_Machine.git',
    demo: null,
    glowFrom: 'from-emerald-500/20',
    glowTo: 'to-teal-500/20',
    borderHover: 'hover:border-emerald-500/30',
  },
  {
    title: 'Personal Portfolio',
    emoji: '🌐',
    initial: 'P',
    emojiBg: 'bg-gradient-to-br from-pink-500 to-rose-600',
    description:
      'A modern, responsive full-stack developer portfolio built with React, TypeScript, and Tailwind CSS — featuring smooth animations, an AI chat assistant, dark theme, and sections for skills, projects, and experience.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/Jibomf59/My-portfolio',
    demo: 'https://my-portfolio-jibomf59.netlify.app',
    glowFrom: 'from-pink-500/20',
    glowTo: 'to-rose-500/20',
    borderHover: 'hover:border-pink-500/30',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/7 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/7 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-3">
            WHAT I'VE BUILT
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Projects
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + index * 0.1 }}
              className="group relative"
            >
              {/* Glow layer */}
              <div className={`absolute -inset-px bg-gradient-to-br ${project.glowFrom} ${project.glowTo} rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`relative flex flex-col h-full rounded-2xl bg-white/[0.03] border border-white/8 ${project.borderHover} hover:bg-white/[0.06] transition-all duration-300 overflow-hidden group-hover:-translate-y-1`}>

                {/* Visual preview */}
                <div className={`relative h-40 ${project.emojiBg} flex items-center justify-center overflow-hidden`}>
                  <span className="absolute text-[120px] font-black text-white/10 select-none leading-none">
                    {project.initial}
                  </span>
                  <span className="relative text-6xl select-none" role="img" aria-label={project.title}>
                    {project.emoji}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/5 border border-white/8 text-zinc-400 cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className={`grid gap-2 ${project.demo ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/20 text-sm font-semibold transition-all"
                    >
                      <FaGithub size={14} />
                      GitHub
                    </motion.a>

                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500/20 to-violet-500/20 border border-blue-500/30 text-blue-300 hover:text-white hover:from-blue-500/30 hover:to-violet-500/30 text-sm font-semibold transition-all"
                      >
                        <HiExternalLink size={14} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Jibomf59"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-white/15 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
          >
            <FaGithub size={17} />
            View all on GitHub
            <HiExternalLink size={14} className="text-slate-500" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
