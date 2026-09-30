import { Terminal, AlertCircle, Info, AlertTriangle, GitBranch, ArrowRight } from 'lucide-react';
import { CodeBlock } from './CodeBlock';
import { StepList } from './StepList';
import { SuggestedQuestions } from './SuggestedQuestions';
import { cn } from '../../lib/utils';

export function AssistantMessage({ message, onSelectQuestion, onSelectCategory }) {
  const { response } = message;
  if (!response) return null;

  const time = message.timestamp
    ? new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : null;

  const renderBadge = () => {
    switch (response.type) {
      case 'workflow':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-sky-500/15 text-sky-700 dark:text-sky-300 border border-sky-400/30">Workflow</span>;
      case 'command':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-400/30">Command</span>;
      case 'concept':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-teal-500/15 text-teal-700 dark:text-teal-300 border border-teal-400/30">Concept</span>;
      case 'troubleshooting':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-400/30">Troubleshoot</span>;
      case 'comparison':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-400/30">Compare</span>;
      case 'easter_egg':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-slate-500/15 text-slate-600 dark:text-slate-300 border border-slate-400/30">System</span>;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-start gap-3 py-2 px-1">
      {/* Dev Assistant Avatar */}
      <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-sky-500/15 text-sky-500 dark:text-sky-400 border border-sky-400/30 shrink-0 mt-1">
        <Terminal className="w-4 h-4" />
      </div>

      {/* Main Response Box */}
      <div className="flex-1 max-w-[95%] sm:max-w-[88%]">
        {/* Header line */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
            Dev Assistant
          </span>
          {response.category && (
            <span className="text-[11px] font-mono font-medium text-sky-600 dark:text-sky-400">
              • {response.category}
            </span>
          )}
          {renderBadge()}
          {time && (
            <span className="text-[10px] text-slate-400 font-mono ml-auto">
              {time}
            </span>
          )}
        </div>

        {/* Content Container */}
        <div className="p-4 md:p-5 rounded-2xl rounded-tl-sm bg-white/15 dark:bg-white/5 border border-white/25 dark:border-sky-400/20 text-slate-800 dark:text-slate-200">
          
          {/* Response Title */}
          {response.title && (
            <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              {response.title}
            </h3>
          )}

          {/* Response Summary */}
          {response.data?.summary && (
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              {response.data.summary}
            </p>
          )}

          {/* Simple Command rendering */}
          {response.data?.command && response.type === 'command' && (
            <>
              <CodeBlock 
                code={response.data.command} 
                language={response.data.language || 'bash'} 
              />
              {response.data.explanation && (
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {response.data.explanation}
                </p>
              )}
            </>
          )}

          {/* Workflow Steps rendering */}
          {response.data?.steps && response.type === 'workflow' && (
            <StepList steps={response.data.steps} />
          )}

          {/* Concept with code & explanation */}
          {response.type === 'concept' && (
            <>
              {response.data?.command && (
                <CodeBlock 
                  code={response.data.command} 
                  language={response.data.language || 'javascript'} 
                />
              )}
              {response.data?.explanation && (
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 my-2 leading-relaxed">
                  {response.data.explanation}
                </p>
              )}
            </>
          )}

          {/* Comparison Table */}
          {response.data?.table && (
            <div className="my-3 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-left text-xs md:text-sm">
                <thead className="bg-gray-100 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                  <tr>
                    {response.data.table.headers.map((h, i) => (
                      <th key={i} className="p-2.5 md:p-3 font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {response.data.table.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-gray-50/50 dark:hover:bg-gray-850/50">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className={cn("p-2.5 md:p-3", cIdx === 0 ? "font-medium text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-300")}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Troubleshooting Section */}
          {response.type === 'troubleshooting' && (
            <div className="space-y-3.5 my-3">
              {/* Symptoms */}
              {response.data?.symptoms && (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs md:text-sm">
                  <div className="font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Symptoms & Error Messages:</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 font-mono text-[11px] md:text-xs">
                    {response.data.symptoms.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Likely Causes */}
              {response.data?.likelyCauses && (
                <div className="text-xs md:text-sm">
                  <div className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Likely Causes:
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {response.data.likelyCauses.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Fixes List */}
              {response.data?.fixes && (
                <div className="mt-2">
                  <div className="font-semibold text-gray-800 dark:text-gray-200 text-xs md:text-sm mb-2">
                    How to Fix:
                  </div>
                  <StepList steps={response.data.fixes} />
                </div>
              )}
            </div>
          )}

          {/* Notes & Pro-tips Alert */}
          {response.data?.notes && response.data.notes.length > 0 && (
            <div className="mt-4 p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-800/40 text-xs md:text-sm">
              <div className="flex items-center gap-1.5 font-semibold text-blue-700 dark:text-blue-300 mb-1">
                <Info className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Pro Tip & Important Notes:</span>
              </div>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
                {response.data.notes.map((note, idx) => (
                  <li key={idx} className="leading-relaxed">{note}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Easter Eggs / System Content */}
          {response.type === 'easter_egg' && (
            <div className="space-y-3 text-xs md:text-sm leading-relaxed whitespace-pre-line">
              <div className="text-gray-700 dark:text-gray-300">
                {response.content}
              </div>

              {response.categories && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  {response.categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => onSelectCategory(cat.name)}
                      className="p-2 text-left rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-400 text-xs font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors flex items-center justify-between"
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] text-gray-400 font-mono">{cat.count} items</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Fallback for Unknown Questions */}
          {response.type === 'unknown' && (
            <div className="space-y-4">
              <div className="flex items-start gap-2 text-amber-600 dark:text-amber-400 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">{response.message || "I don't have a prepared answer for that yet."}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Try browsing by technology category or asking one of the suggested questions below:
                  </p>
                </div>
              </div>

              {response.categories && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-200 dark:border-gray-700">
                  {response.categories.slice(0, 10).map((catName, idx) => (
                    <button
                      key={idx}
                      onClick={() => onSelectCategory(catName)}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {catName}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Related Topics Quick Links */}
          {response.data?.relatedTopics && response.data.relatedTopics.length > 0 && (
            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-750 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider flex items-center gap-1">
                <GitBranch className="w-3 h-3" /> Related:
              </span>
              {response.data.relatedTopics.map((topicId, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectQuestion(topicId.replace(/-/g, ' '))}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors cursor-pointer border border-transparent hover:border-blue-400/40"
                >
                  <span>{topicId.replace(/-/g, ' ')}</span>
                  <ArrowRight className="w-2.5 h-2.5 text-gray-400" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Suggested Questions below the message */}
        {response.suggestedQuestions && response.suggestedQuestions.length > 0 && (
          <SuggestedQuestions
            questions={response.suggestedQuestions}
            onSelectQuestion={onSelectQuestion}
            title="Follow-up suggestions:"
          />
        )}
      </div>
    </div>
  );
}
