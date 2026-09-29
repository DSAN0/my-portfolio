import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex items-start gap-3 py-2 px-1"
    >
      {/* Dev Assistant avatar */}
      <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 shrink-0">
        <Terminal className="w-4 h-4" />
      </div>

      <div className="flex items-center gap-2 px-4 py-3 rounded-2xl rounded-tl-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]" />
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]" />
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-mono ml-2">
          Searching knowledge base...
        </span>
      </div>
    </motion.div>
  );
}
