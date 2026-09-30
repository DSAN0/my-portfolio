import { motion } from 'framer-motion';
import { Terminal, Sparkles, Wrench, GitBranch, Server, ShieldCheck, Hexagon } from 'lucide-react';
import { SuggestedQuestions } from './SuggestedQuestions';

const featuredPrompts = [
  { question: 'How do I push my project to GitHub?', category: 'Git' },
  { question: 'How do I connect Django to PostgreSQL?', category: 'Django' },
  { question: 'How do I start a React Vite project?', category: 'React' },
  { question: 'How do I create a Python virtual environment?', category: 'Python' },
  { question: 'How do I build a Docker image?', category: 'Docker' },
  { question: 'Why is Django giving me a CORS error in React?', category: 'Troubleshooting' },
  { question: 'What is the difference between git merge and git rebase?', category: 'Git' },
  { question: 'How do I configure JWT authentication in DRF?', category: 'DRF' },
];

const features = [
  { icon: GitBranch, label: 'Git & Workflows', color: 'text-sky-400' },
  { icon: Server, label: 'Full-Stack & APIs', color: 'text-teal-400' },
  { icon: Wrench, label: 'Error Diagnosis', color: 'text-amber-400' },
  { icon: ShieldCheck, label: 'Offline & Private', color: 'text-emerald-400' },
];

export function EmptyState({ onSelectQuestion }) {
  return (
    <div className="py-6 md:py-10 px-4 max-w-3xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-6"
      >
        <div className="absolute inset-0 rounded-2xl bg-sky-400/20 blur-xl" />
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-950/60 border border-sky-400/40 flex items-center justify-center text-sky-300">
          <Terminal className="w-8 h-8 md:w-10 md:h-10" />
          <Hexagon className="absolute -top-2 -right-2 w-5 h-5 text-sky-400/50" />
        </div>
        <div className="absolute -bottom-1 -right-1 p-1.5 rounded-lg bg-emerald-500/90 text-white border border-emerald-300/40">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </motion.div>

      <motion.p
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-[10px] font-mono tracking-[0.35em] uppercase text-sky-400 mb-2"
      >
        System Ready
      </motion.p>

      <motion.h2
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.12, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display"
      >
        Ask. Learn. Build.
      </motion.h2>

      <motion.p
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.18, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed"
      >
        A practical developer assistant for commands, workflows, concepts and troubleshooting.
      </motion.p>

      <motion.div
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.24, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap items-center justify-center gap-2 my-6 text-xs font-medium"
      >
        {features.map(({ icon: Icon, label, color }) => (
          <div
            key={label}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 text-slate-700 dark:text-slate-300"
          >
            <Icon className={`w-3.5 h-3.5 ${color}`} />
            <span>{label}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="w-full text-left p-4 md:p-5 rounded-2xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-sky-400/20"
      >
        <SuggestedQuestions
          questions={featuredPrompts}
          onSelectQuestion={onSelectQuestion}
          title="Try asking:"
          className="mt-0"
        />
      </motion.div>
    </div>
  );
}
