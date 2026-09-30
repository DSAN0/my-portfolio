import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start gap-3 py-2 px-1"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-400/30 shrink-0">
        <Terminal className="w-4 h-4" />
      </div>

      <div className="flex items-center gap-2 px-4 py-3 rounded-2xl rounded-tl-sm bg-white/10 dark:bg-white/5 border border-white/15">
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse [animation-delay:150ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse [animation-delay:300ms]" />
        </div>
        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono ml-1">
          scanning knowledge base...
        </span>
      </div>
    </motion.div>
  );
}
