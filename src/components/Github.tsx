import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaCodeBranch, FaStar, FaUsers } from 'react-icons/fa';
import { HiExternalLink, HiCode } from 'react-icons/hi';

interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
}

const languages = ['JavaScript', 'TypeScript', 'React', 'HTML/CSS', 'Tailwind', 'Java', 'Git'];

export default function Github() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [stats, setStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Jibomf59')
      .then((res) => res.json())
      .then((data) => {
        setStats({
          publicRepos: data.public_repos || 0,
          followers: data.followers || 0,
          following: data.following || 0,
        });
      })
      .catch(() => {
        setStats({ publicRepos: 5, followers: 0, following: 0 });
      });
  }, []);

  const statCards = [
    { label: 'Repositories', value: stats?.publicRepos ?? '—', icon: FaCodeBranch, gradient: 'from-blue-500 to-cyan-500' },
    { label: 'Followers', value: stats?.followers ?? '—', icon: FaUsers, gradient: 'from-violet-500 to-purple-600' },
    { label: 'Following', value: stats?.following ?? '—', icon: FaStar, gradient: 'from-amber-500 to-orange-500' },
  ];

  return (
    <section id="github" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-slate-500/6 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-700/50 border border-white/10 text-slate-300 text-sm font-medium mb-4">
            Open Source
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            GitHub{' '}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Activity
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-slate-500 to-slate-400 mx-auto rounded-full" />
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-10">
          {statCards.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group relative"
            >
              <div className={`absolute -inset-px bg-gradient-to-r ${s.gradient} rounded-2xl blur-sm opacity-0 group-hover:opacity-30 transition-opacity`} />
              <div className="relative p-5 sm:p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 text-center">
                <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${s.gradient} flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}>
                  <s.icon className="text-white" size={18} />
                </div>
                <span className="block text-2xl sm:text-4xl font-bold text-white mb-1">
                  {s.value}
                </span>
                <span className="text-slate-500 text-xs font-medium">{s.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="group relative max-w-2xl mx-auto"
        >
          <div className="absolute -inset-px bg-gradient-to-br from-slate-500/20 to-slate-700/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative p-8 lg:p-10 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl">

            {/* Profile header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-7">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center border border-white/10 shadow-lg flex-shrink-0">
                <FaGithub className="text-white" size={36} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-white">Jibomf59</h3>
                <p className="text-slate-500 text-sm">github.com/Jibomf59</p>
                <div className="flex items-center justify-center sm:justify-start gap-1.5 mt-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-medium">Actively coding</span>
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm text-center sm:text-left mb-7 leading-relaxed">
              Actively building and contributing to projects with React, TypeScript, and modern
              web technologies. Always looking to collaborate on interesting open-source work.
            </p>

            {/* Languages */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <HiCode className="text-slate-400" size={15} />
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Languages & Tech</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.04] border border-white/8 text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors cursor-default"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <motion.a
                href="https://github.com/Jibomf59"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/[0.06] border border-white/12 text-white font-semibold text-sm hover:bg-white/[0.10] transition-colors"
              >
                <FaGithub size={18} />
                Visit GitHub Profile
                <HiExternalLink size={14} className="text-slate-500" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
