import { Terminal, Trash2, HelpCircle, LayoutGrid } from 'lucide-react';

export function AssistantHeader({
  onClear,
  onHelp,
  onTopics,
  hasMessages,
  categoryCount = 25
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-4 md:px-6 py-3.5 bg-gray-900/95 border-b border-gray-800 text-gray-200">
      {/* Left side: Terminal Title and Status indicator */}
      <div className="flex items-center gap-3">
        {/* macOS style dots */}
        <div className="flex items-center gap-1.5 mr-1">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>

        <div className="flex items-center gap-2">
          <div className="p-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-white tracking-wide">
                Dev Assistant
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-medium tracking-wider uppercase rounded bg-blue-500/20 text-blue-300 border border-blue-400/20">
                Command Lab
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Center / Status */}
      <div className="hidden lg:flex items-center gap-2 text-xs text-gray-400">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Local Deterministic Engine • {categoryCount} Categories</span>
      </div>

      {/* Right side: Quick Action Buttons */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={onTopics}
          type="button"
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg text-gray-300 hover:text-white bg-gray-800/80 hover:bg-gray-700/80 transition-colors cursor-pointer border border-gray-700/60"
          title="List all supported categories"
        >
          <LayoutGrid className="w-3.5 h-3.5 text-indigo-400" />
          <span className="hidden sm:inline">Topics</span>
        </button>

        <button
          onClick={onHelp}
          type="button"
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg text-gray-300 hover:text-white bg-gray-800/80 hover:bg-gray-700/80 transition-colors cursor-pointer border border-gray-700/60"
          title="Show assistant documentation"
        >
          <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
          <span className="hidden sm:inline">Help</span>
        </button>

        {hasMessages && (
          <button
            onClick={onClear}
            type="button"
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg text-rose-300 hover:text-rose-200 bg-rose-950/40 hover:bg-rose-900/50 transition-colors cursor-pointer border border-rose-800/40"
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
