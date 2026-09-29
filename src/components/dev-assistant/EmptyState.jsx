import { motion } from 'framer-motion';
import { Terminal, Sparkles, BookOpen, Wrench, GitBranch, Server, Zap, ShieldCheck } from 'lucide-react';
import { SuggestedQuestions } from './SuggestedQuestions';

const featuredPrompts = [
  { question: "How do I push my project to GitHub?", category: "Git" },
  { question: "How do I connect Django to PostgreSQL?", category: "Django" },
  { question: "How do I start a React Vite project?", category: "React" },
  { question: "How do I create a Python virtual environment?", category: "Python" },
  { question: "How do I build a Docker image?", category: "Docker" },
  { question: "Why is Django giving me a CORS error in React?", category: "Troubleshooting" },
  { question: "What is the difference between git merge and git rebase?", category: "Git" },
  { question: "How do I configure JWT authentication in DRF?", category: "DRF" }
];

export function EmptyState({ onSelectQuestion, onSelectCategory }) {
  return (
    <div className="py-6 md:py-10 px-4 max-w-3xl mx-auto flex flex-col items-center text-center">
      {/* Visual Badge */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative mb-5"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/25 border border-blue-400/30">
          <Terminal className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <div className="absolute -bottom-1 -right-1 p-1.5 rounded-lg bg-emerald-500 text-white shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
      >
        Ask. Learn. Build.
      </motion.h2>

      {/* Supporting Text */}
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
      >
        A practical developer assistant for commands, workflows, concepts and troubleshooting.
      </motion.p>

      {/* Feature Highlights Pill Row */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-3 my-6 text-xs text-gray-500 dark:text-gray-400 font-medium"
      >
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60">
          <GitBranch className="w-3.5 h-3.5 text-blue-500" />
          <span>Git & Workflows</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60">
          <Server className="w-3.5 h-3.5 text-indigo-500" />
          <span>Full-Stack & APIs</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60">
          <Wrench className="w-3.5 h-3.5 text-amber-500" />
          <span>Error Diagnosis</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>100% Offline & Private</span>
        </div>
      </motion.div>

      {/* Suggested prompts section */}
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="w-full text-left bg-gray-50/80 dark:bg-gray-850/60 p-4 md:p-5 rounded-2xl border border-gray-200/80 dark:border-gray-750"
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
