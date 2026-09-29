import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export function SuggestedQuestions({
  questions = [],
  onSelectQuestion,
  title = "Suggested prompts:",
  className = ""
}) {
  if (!questions || questions.length === 0) return null;

  return (
    <div className={cn("mt-4 space-y-2", className)}>
      {title && (
        <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
          {title}
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {questions.map((item, idx) => {
          const text = typeof item === 'string' ? item : item.question;
          const category = typeof item === 'object' ? item.category : null;

          return (
            <button
              key={idx}
              onClick={() => onSelectQuestion(text)}
              type="button"
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-left bg-white/80 dark:bg-gray-850 border border-gray-200 dark:border-gray-700/80 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all cursor-pointer shadow-xs"
            >
              {category && (
                <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  {category}
                </span>
              )}
              <span className="leading-snug">{text}</span>
              <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-blue-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
