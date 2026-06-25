import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineItems = [
  {
    title: 'Computer Science Graduate',
    period: '2020 – 2024',
    company: 'Haramaya University',
    description:
      'Completed a B.Sc. in Computer Science with focus on software engineering, web development, algorithms, and AI systems. Built an AI-powered academic assistant as thesis project.',
    dot: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    accent: 'text-blue-400',
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/5',
    icon: '🎓',
  },
  {
    title: 'Full Stack Developer',
    period: '2023 – Present',
    company: 'Personal Projects & Freelance',
    description:
      'Building responsive and modern web applications using React, Node.js, TypeScript, and Tailwind CSS. Delivered 5+ projects including accessibility tools, inventory systems, and REST APIs.',
    dot: 'bg-gradient-to-br from-violet-500 to-purple-500',
    accent: 'text-violet-400',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/5',
    icon: '💻',
  },
  {
    title: 'Open Source Contributor',
    period: '2024 – Present',
    company: 'GitHub',
    description:
      'Actively contributing to open source repositories and building personal projects on GitHub. Exploring modern web standards, testing practices, and performance optimization.',
    dot: 'bg-gradient-to-br from-cyan-500 to-teal-500',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/5',
    icon: '🌐',
  },
];

function TimelineItem({
  item,
  index,
  inView,
}: {
  item: (typeof timelineItems)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.15 + index * 0.13 }}
      className="relative flex gap-6"
    >
      {/* Line + dot column */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.35, delay: 0.2 + index * 0.13, type: 'spring', stiffness: 200 }}
          className={`w-4 h-4 rounded-full flex-shrink-0 mt-1 ${item.dot} shadow-lg`}
        />
        {index < timelineItems.length - 1 && (
          <div className="flex-1 w-px bg-gradient-to-b from-white/12 to-transparent mt-2" />
        )}
      </div>

      {/* Card */}
      <div className={`flex-1 mb-10 group p-6 rounded-2xl bg-white/[0.03] border ${item.border} ${item.bg} hover:bg-white/[0.06] transition-all duration-300`}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <h3 className="text-white font-bold text-base leading-tight">{item.title}</h3>
              <p className={`text-sm font-medium ${item.accent}`}>{item.company}</p>
            </div>
          </div>
          <span className="self-start sm:self-auto px-3 py-1 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-slate-400 whitespace-nowrap">
            {item.period}
          </span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-violet-500/6 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-blue-500/6 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3">
            MY JOURNEY
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Experience
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {timelineItems.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
