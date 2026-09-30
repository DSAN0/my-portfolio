import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

export function TopicSelector({
  categories = [],
  activeCategory = null,
  onSelectCategory,
}) {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative border-b border-white/10 bg-slate-950/30 py-2.5 px-3">
      <button
        onClick={() => handleScroll('left')}
        type="button"
        aria-label="Scroll topics left"
        className="hidden md:flex absolute left-1 top-1/2 -translate-y-1/2 z-10 p-1 rounded-lg bg-slate-900/80 text-sky-300 border border-white/15 hover:border-sky-400/50 transition-colors"
      >
        <ChevronLeft className="w-3.5 h-3.5" />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex items-center gap-1.5 overflow-x-auto scroll-smooth px-1 md:px-6 no-scrollbar"
      >
        <button
          onClick={() => onSelectCategory(null)}
          type="button"
          className={cn(
            'flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer border shrink-0 font-mono',
            activeCategory === null
              ? 'bg-sky-500/20 text-sky-200 border-sky-400/50'
              : 'bg-white/5 text-slate-300 border-white/10 hover:border-sky-400/30 hover:text-sky-200'
          )}
        >
          <Sparkles className="w-3 h-3" />
          <span>ALL</span>
        </button>

        {categories.map((cat) => {
          const isActive = activeCategory === cat.name;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(isActive ? null : cat.name)}
              type="button"
              className={cn(
                'px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer border shrink-0',
                isActive
                  ? 'bg-sky-500/20 text-sky-200 border-sky-400/50 font-semibold'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:border-sky-400/30 hover:text-sky-200'
              )}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => handleScroll('right')}
        type="button"
        aria-label="Scroll topics right"
        className="hidden md:flex absolute right-1 top-1/2 -translate-y-1/2 z-10 p-1 rounded-lg bg-slate-900/80 text-sky-300 border border-white/15 hover:border-sky-400/50 transition-colors"
      >
        <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
