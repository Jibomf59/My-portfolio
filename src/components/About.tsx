import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowRight } from 'react-icons/hi';

const stats = [
  { value: '5+', label: 'Projects Built', color: 'from-blue-400 to-cyan-400' },
  { value: '3+', label: 'Years Learning', color: 'from-violet-400 to-purple-400' },
  { value: '10+', label: 'Technologies', color: 'from-cyan-400 to-teal-400' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/7 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/7 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-3">
            WHO I AM
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            About Me
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Gradient ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 blur opacity-40" />
              <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 opacity-80" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden">
                <img
                  src="/images/jj.jpg"
                  alt="Jibril Mohammed Faruk"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating chip */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 px-4 py-2.5 bg-slate-800/95 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎓</span>
                  <div>
                    <p className="text-white text-xs font-semibold">CS Graduate</p>
                    <p className="text-slate-400 text-[10px]">Haramaya Univ.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Text + stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-[15px] leading-relaxed">
              I'm{' '}
              <span className="px-1.5 py-0.5 rounded bg-blue-500/15 border border-blue-500/25 text-blue-300 font-semibold">
                Jibril
              </span>
              , a full stack developer based in Ethiopia with a B.Sc. in Computer Science from Haramaya
              University. I'm passionate about building modern, accessible web applications that solve
              real-world problems and deliver exceptional user experiences.
            </p>
            <p className="text-slate-400 text-[15px] leading-relaxed">
              With a strong foundation in React, Node.js, TypeScript, and Tailwind CSS, I specialize
              in building complete web solutions from UI to API. I love clean code, responsive design,
              and bridging the gap between great design and solid engineering — always eager to
              explore new technologies and collaborate on meaningful projects.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="p-4 rounded-xl bg-white/[0.04] border border-white/8 text-center"
                >
                  <span
                    className={`text-2xl font-bold bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}
                  >
                    {s.value}
                  </span>
                  <p className="text-slate-500 text-[11px] mt-1 leading-tight">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.55 }}
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-shadow"
              >
                Let&apos;s Talk
                <HiArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
