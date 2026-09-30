import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export function SuggestedQuestions({
  questions = [],
  onSelectQuestion,
  title = 'Suggested prompts:',
  className = '',
}) {
  if (!questions || questions.length === 0) return null;

  return (
    <div className={cn('mt-4 space-y-2', className)}>
      {title && (
        <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-sky-600/80 dark:text-sky-400/80">
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
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-left bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-300 hover:border-sky-400/50 transition-colors cursor-pointer"
            >
              {category && (
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-400/20">
                  {category}
                </span>
              )}
              <span className="leading-snug">{text}</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-sky-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
