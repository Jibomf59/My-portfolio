import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChatAlt2 } from 'react-icons/hi';

interface Message {
  id: number;
  role: 'user' | 'ai';
  text: string;
}

const quickQuestions = [
  { label: 'What are your skills?', key: 'skills' },
  { label: 'Tell me about your projects', key: 'projects' },
  { label: 'Are you available for hire?', key: 'available' },
  { label: 'How can I contact you?', key: 'contact' },
];

const aiResponses: Record<string, string> = {
  skills:
    'I specialize in HTML, CSS, JavaScript, TypeScript, React.js, Tailwind CSS, Bootstrap, and Framer Motion on the frontend. On the backend I work with Node.js, Express.js, and PHP. For databases I use MySQL and MongoDB. I also use Git, GitHub, VS Code, Vite, Postman, and Figma in my workflow.',
  projects:
    'I\'ve built an AI-powered Academic Assistant for visually impaired students, an Inventory Management System for Adama City Administration, and an ATM simulation in Java. Check out my Projects section for details!',
  available:
    'Yes! I\'m actively looking for full stack developer roles and freelance projects. I\'m based in Ethiopia but open to remote work worldwide.',
  contact:
    'You can reach me at jibofaruk59@gmail.com, call/WhatsApp +251 988 683 159, or connect on LinkedIn and GitHub. I typically respond within 24 hours!',
};

let msgIdCounter = 0;

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: ++msgIdCounter,
      role: 'ai',
      text: "Hi! I'm Jibril's AI Assistant. Ask me anything about his skills, projects, or availability 👋",
    },
  ]);
  const [thinking, setThinking] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 80);
    }
  }, [messages, open]);

  const handleQuestion = (key: string, label: string) => {
    if (thinking) return;

    const userMsg: Message = { id: ++msgIdCounter, role: 'user', text: label };
    setMessages((prev) => [...prev, userMsg]);
    setThinking(true);

    setTimeout(() => {
      const aiMsg: Message = {
        id: ++msgIdCounter,
        role: 'ai',
        text: aiResponses[key] ?? "I'm not sure about that. Feel free to reach out directly at jibofaruk59@gmail.com!",
      };
      setMessages((prev) => [...prev, aiMsg]);
      setThinking(false);
    }, 900);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="fixed bottom-24 right-6 z-[190] flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow"
        aria-label="Open AI chat"
      >
        <HiChatAlt2 size={20} />
        <span className="text-sm font-semibold hidden sm:block">Talk to My AI</span>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-44 right-4 sm:right-6 z-[200] w-[calc(100vw-2rem)] max-w-sm flex flex-col rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden"
            style={{ maxHeight: '480px' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/8 bg-white/[0.03]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-base">
                  🤖
                </div>
                <div>
                  <p className="text-white text-sm font-bold leading-tight">Jibril's AI Assistant</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-[10px] font-medium">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/8 transition-all"
                aria-label="Close chat"
              >
                <HiX size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth min-h-0">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-br from-blue-500 to-violet-600 text-white rounded-br-sm shadow-lg shadow-blue-500/15'
                        : 'bg-white/[0.06] border border-white/8 text-slate-200 rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {thinking && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white/[0.06] border border-white/8">
                    <div className="flex gap-1.5 items-center">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-slate-400"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Quick questions */}
            <div className="px-4 py-3 border-t border-white/8 bg-white/[0.02]">
              <p className="text-slate-500 text-[10px] uppercase tracking-wider mb-2.5">Quick Questions</p>
              <div className="flex flex-col gap-1.5">
                {quickQuestions.map((q) => (
                  <button
                    key={q.key}
                    onClick={() => handleQuestion(q.key, q.label)}
                    disabled={thinking}
                    className="text-left px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-white/[0.04] border border-white/8 hover:border-blue-500/30 hover:bg-blue-500/8 hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
