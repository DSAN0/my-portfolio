import { CodeBlock } from './CodeBlock';

export function StepList({ steps = [] }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="space-y-4 my-3">
      {steps.map((step, idx) => (
        <div 
          key={idx} 
          className="relative pl-7 border-l-2 border-blue-500/40 dark:border-blue-400/30 pb-2 last:pb-0"
        >
          {/* Step Number Dot */}
          <div className="absolute -left-[11px] top-0 flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold shadow-md shadow-blue-500/20">
            {idx + 1}
          </div>

          {/* Step Title */}
          <div className="font-semibold text-gray-900 dark:text-gray-100 text-sm md:text-base">
            {step.title}
          </div>

          {/* Explanation */}
          {step.explanation && (
            <p className="mt-1 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {step.explanation}
            </p>
          )}

          {/* Command / Code */}
          {(step.command || step.code) && (
            <CodeBlock 
              code={step.command || step.code} 
              language={step.language || 'bash'} 
              className="mt-2 mb-1"
            />
          )}
        </div>
      ))}
    </div>
  );
}
