import { Terminal, Trash2, HelpCircle, LayoutGrid, Activity } from 'lucide-react';

export function AssistantHeader({
  onClear,
  onHelp,
  onTopics,
  hasMessages,
  categoryCount = 25,
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-4 md:px-6 py-3.5 bg-slate-950/70 border-b border-white/10 text-slate-200">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 mr-1">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400/90" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
        </div>

        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-sky-500/15 text-sky-300 border border-sky-400/30">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-white tracking-wide font-display">
                Dev Assistant
              </span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono tracking-wider uppercase rounded-md bg-sky-500/15 text-sky-300 border border-sky-400/25">
                v2.0 // HUD
              </span>
            </div>
            <p className="text-[10px] font-mono text-slate-400 hidden md:block">
              sys://command-lab
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-400">
        <Activity className="w-3.5 h-3.5 text-emerald-400" />
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
        </span>
        <span>ONLINE • {categoryCount} MODULES</span>
      </div>

      <div className="flex items-center gap-1.5">
        <button
          onClick={onTopics}
          type="button"
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg text-slate-300 hover:text-white bg-white/5 hover:bg-sky-500/15 transition-colors cursor-pointer border border-white/10 hover:border-sky-400/40"
          title="List all supported categories"
        >
          <LayoutGrid className="w-3.5 h-3.5 text-sky-400" />
          <span className="hidden sm:inline">Topics</span>
        </button>

        <button
          onClick={onHelp}
          type="button"
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg text-slate-300 hover:text-white bg-white/5 hover:bg-sky-500/15 transition-colors cursor-pointer border border-white/10 hover:border-sky-400/40"
          title="Show assistant documentation"
        >
          <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
          <span className="hidden sm:inline">Help</span>
        </button>

        {hasMessages && (
          <button
            onClick={onClear}
            type="button"
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg text-rose-300 hover:text-rose-200 bg-rose-500/10 hover:bg-rose-500/20 transition-colors cursor-pointer border border-rose-400/25"
            title="Clear current session"
          >
            <Trash2 className="w-3.5 h-3.5 text-rose-400" />
            <span className="hidden sm:inline">Clear</span>
          </button>
        )}
      </div>
    </div>
  );
}
