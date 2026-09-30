import { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
import { cn } from '../../lib/utils';

export function CodeBlock({ code = '', language = 'bash', title = null, className = '' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code', err);
    }
  };

  const cleanLang = (language || 'bash').toUpperCase();

  return (
    <div
      className={cn(
        'my-3 rounded-xl overflow-hidden border border-sky-400/20 bg-slate-950/85 text-slate-100 font-mono text-xs md:text-sm',
        className
      )}
    >
      <div className="flex items-center justify-between px-3.5 py-1.5 bg-slate-900/90 border-b border-white/10 text-slate-400">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-sky-400" />
          <span className="font-semibold text-[11px] tracking-wider text-sky-200/90">
            {title || cleanLang}
          </span>
        </div>
        <button
          onClick={handleCopy}
          type="button"
          className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium bg-white/5 hover:bg-sky-500/15 text-slate-300 hover:text-sky-200 border border-white/10 hover:border-sky-400/30 transition-colors cursor-pointer"
          title="Copy command"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 text-slate-400" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <div className="p-3.5 overflow-x-auto leading-relaxed hud-scroll">
        <pre className="whitespace-pre font-mono selection:bg-sky-900/50 text-emerald-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
