import { motion } from 'framer-motion';
import { HiDownload, HiArrowRight, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[520px] h-[520px] bg-blue-600/12 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-violet-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[360px] h-[360px] bg-cyan-500/7 rounded-full blur-[140px]" />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Available badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight"
          >
            <span className="text-white">Hi, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Jibril Mohammed
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-xl sm:text-2xl text-slate-300 font-light"
          >
            Full Stack Developer —{' '}
            <span className="text-slate-400">I Turn Ideas Into Web Experiences</span>
          </motion.p>

          {/* Short bio */}
          <motion.p
            variants={item}
            className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            Computer Science graduate passionate about building modern web applications
            using React, Node.js, and modern full-stack tooling — creating clean,
            responsive, and user-friendly experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo('#projects')}
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/6 hover:border-white/30 transition-all w-full sm:w-auto justify-center backdrop-blur-sm"
            >
              View Projects
              <HiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo('#contact')}
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/6 hover:border-white/30 transition-all w-full sm:w-auto justify-center backdrop-blur-sm"
            >
              <HiMail size={16} />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Resume download */}
          <motion.div variants={item}>
            <a
              href="/Jibril_Mohammed_CV.html"
              download="Jibril_Mohammed_CV.html"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors group"
            >
              <HiDownload size={16} className="group-hover:animate-bounce" />
              Download Resume
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={item} className="flex items-center gap-3">
            <motion.a
              href="https://github.com/Jibomf59"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/8 transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/jibofaruk59"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/8 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-slate-600 text-[10px] tracking-widest uppercase">Scroll</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
