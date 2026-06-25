import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const socials = [
  { icon: FaGithub, href: 'https://github.com/Jibomf59', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/jibofaruk59', label: 'LinkedIn' },
  { icon: HiMail, href: 'mailto:jibofaruk59@gmail.com', label: 'Email' },
  { icon: FaTelegram, href: 'https://t.me/jibomf', label: 'Telegram' },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-10 overflow-hidden">
      {/* Top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-6">

        {/* Big watermark name */}
        <div className="relative select-none">
          <span className="text-6xl sm:text-8xl font-black text-white/5 tracking-widest uppercase leading-none">
            JIBRIL
          </span>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-slate-500 text-sm -mt-4"
        >
          Full Stack Developer
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-3"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.12, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-xl bg-white/[0.04] border border-white/8 text-slate-500 hover:text-blue-400 hover:border-blue-400/25 hover:bg-blue-400/5 transition-all"
              aria-label={s.label}
            >
              <s.icon size={17} />
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-px bg-white/10" />

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-slate-600 text-xs text-center"
        >
          © 2026{' '}
          <span className="text-slate-400 font-medium">Jibril Mohammed</span>
          . All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
