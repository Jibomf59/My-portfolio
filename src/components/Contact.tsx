import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiPhone, HiMail, HiLocationMarker, HiCheckCircle } from 'react-icons/hi';
import { MdSend } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const infoCards = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'jibofaruk59@gmail.com',
    href: 'mailto:jibofaruk59@gmail.com',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-400',
  },
  {
    icon: HiPhone,
    label: 'Phone / WhatsApp',
    value: '+251 988 683 159',
    href: 'https://wa.me/251988683159',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: 'Ethiopia · Remote OK',
    href: null,
    iconBg: 'bg-violet-500/15',
    iconColor: 'text-violet-400',
  },
];

const socials = [
  { icon: FaGithub, href: 'https://github.com/Jibomf59', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/jibofaruk59', label: 'LinkedIn' },
  { icon: FaTelegram, href: 'https://t.me/jibomf', label: 'Telegram' },
  { icon: FaWhatsapp, href: 'https://wa.me/251988683159', label: 'WhatsApp' },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:jibofaruk59@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-blue-500/7 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/7 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-pink-400 mb-3">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Contact Me
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT: Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-br from-blue-500/25 to-violet-500/25 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl">
                <h3 className="text-white font-bold text-lg mb-6">Send a Message</h3>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      className="mb-5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3"
                    >
                      <HiCheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                      <p className="text-emerald-300 text-sm font-medium">
                        Your email client has been opened. Thank you!
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-400 mb-1.5">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-400 mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-400 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="Hello Jibril, I'd like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-shadow disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Opening email client...
                      </>
                    ) : (
                      <>
                        <MdSend size={17} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="space-y-4"
          >
            {infoCards.map((card, i) => {
              const inner = (
                <>
                  <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <card.icon className={card.iconColor} size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-500 text-[10px] uppercase tracking-wider mb-0.5">{card.label}</p>
                    <p className="text-slate-200 text-sm font-medium truncate">{card.value}</p>
                  </div>
                </>
              );

              return card.href ? (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/8 hover:border-blue-400/25 hover:bg-white/[0.07] transition-all"
                >
                  {inner}
                </motion.a>
              ) : (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/8"
                >
                  {inner}
                </motion.div>
              );
            })}

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.62 }}
              className="flex items-center gap-3 p-5 rounded-xl bg-emerald-500/8 border border-emerald-500/20"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <p className="text-emerald-300 text-sm font-medium">
                Available for work — open to freelance projects and full-time opportunities.
              </p>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.72 }}
              className="flex items-center gap-3 p-5 rounded-xl bg-white/[0.03] border border-white/8"
            >
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl bg-white/[0.04] border border-white/8 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                  aria-label={s.label}
                >
                  <s.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
