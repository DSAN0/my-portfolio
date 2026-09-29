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
    <div className={cn("my-3 rounded-xl overflow-hidden border border-gray-700/60 bg-gray-950/90 shadow-lg text-gray-100 font-mono text-xs md:text-sm", className)}>
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-1.5 bg-gray-900/90 border-b border-gray-800 text-gray-400">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-blue-400" />
          <span className="font-semibold text-[11px] tracking-wider text-gray-300">
            {title || cleanLang}
          </span>
        </div>
        <button
          onClick={handleCopy}
          type="button"
          className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white transition-all cursor-pointer"
          title="Copy command"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 text-gray-400" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-3.5 overflow-x-auto leading-relaxed">
        <pre className="whitespace-pre font-mono selection:bg-blue-900/60 text-emerald-300 dark:text-emerald-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
