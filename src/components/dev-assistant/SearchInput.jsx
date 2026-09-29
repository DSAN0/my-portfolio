import { useState, useRef, useEffect } from 'react';
import { Send, CornerDownLeft, Sparkles, Terminal as TerminalIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

export function SearchInput({ onSendMessage, isLoading, placeholder = "Ask anything... (e.g., 'How do I push to GitHub?' or '/help')" }) {
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
    <div className="p-3 md:p-4 bg-gray-900 border-t border-gray-800">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        {/* Terminal prefix badge */}
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1 text-gray-500 select-none pointer-events-none font-mono text-xs">
          <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-gray-400 font-bold">$</span>
        </div>

        {/* Text input area */}
        <textarea
          ref={textareaRef}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={isLoading}
          className="w-full pl-11 pr-24 py-3 bg-gray-950/80 hover:bg-gray-950 focus:bg-gray-950 text-gray-100 placeholder-gray-500 rounded-xl border border-gray-700/80 focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/40 outline-none text-xs md:text-sm font-sans transition-all resize-none overflow-y-auto max-h-32"
          style={{ minHeight: '44px' }}
        />

        {/* Submit button */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={cn(
              "flex items-center justify-center p-2 rounded-lg transition-all cursor-pointer",
              input.trim() && !isLoading
                ? "bg-blue-600 text-white hover:bg-blue-500 shadow-sm shadow-blue-500/30"
                : "bg-gray-800 text-gray-500 cursor-not-allowed"
            )}
            title="Send query (Enter)"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>

      {/* Footer shortcut tips */}
      <div className="flex items-center justify-between mt-2 px-1 text-[11px] text-gray-500 font-mono">
        <div className="flex items-center gap-2">
          <span>Commands: <span className="text-gray-400">/help</span>, <span className="text-gray-400">/topics</span>, <span className="text-gray-400">/clear</span></span>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-[10px]">
          <span>Press</span>
          <kbd className="px-1 py-0.5 rounded bg-gray-800 text-gray-300 border border-gray-700">Enter</kbd>
          <span>to ask</span>
        </div>
      </div>
    </div>
  );
}
