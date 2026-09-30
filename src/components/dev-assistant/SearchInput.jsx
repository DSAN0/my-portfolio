import { useState, useRef, useEffect } from 'react';
import { Send, Terminal as TerminalIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

export function SearchInput({
  onSendMessage,
  isLoading,
  placeholder = "Ask anything... (e.g. 'How do I push to GitHub?' or '/help')",
}) {
  const [input, setInput] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    onSendMessage(input.trim());
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="p-3 md:p-4 bg-slate-950/75 border-t border-white/10">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-slate-500 select-none pointer-events-none font-mono text-xs">
          <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-sky-400 font-bold">&gt;_</span>
        </div>

        <textarea
          ref={textareaRef}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={isLoading}
          className="w-full pl-14 pr-14 py-3 bg-slate-950/60 hover:bg-slate-950/80 focus:bg-slate-950/90 text-slate-100 placeholder-slate-500 rounded-xl border border-white/10 focus:border-sky-400/60 focus:ring-1 focus:ring-sky-400/30 outline-none text-xs md:text-sm transition-colors resize-none overflow-y-auto max-h-32 hud-scroll"
          style={{ minHeight: '44px' }}
        />

        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={cn(
              'flex items-center justify-center p-2 rounded-lg transition-colors cursor-pointer border',
              input.trim() && !isLoading
                ? 'bg-sky-500 text-white border-sky-400/50 hover:bg-sky-400'
                : 'bg-white/5 text-slate-500 border-white/10 cursor-not-allowed'
            )}
            title="Send query (Enter)"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>

      <div className="flex items-center justify-between mt-2 px-1 text-[11px] text-slate-500 font-mono">
        <div className="flex items-center gap-2">
          <span>
            CMD:{' '}
            <span className="text-sky-400/80">/help</span>,{' '}
            <span className="text-sky-400/80">/topics</span>,{' '}
            <span className="text-sky-400/80">/clear</span>
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-[10px]">
          <span>PRESS</span>
          <kbd className="px-1.5 py-0.5 rounded bg-white/5 text-slate-300 border border-white/15">
            ENTER
          </kbd>
        </div>
      </div>
    </div>
  );
}
