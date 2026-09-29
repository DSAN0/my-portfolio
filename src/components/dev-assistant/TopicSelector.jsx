import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

export function TopicSelector({
  categories = [],
  activeCategory = null,
  onSelectCategory
}) {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative border-b border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/50 py-2.5 px-3">
      {/* Scroll left button */}
      <button
        onClick={() => handleScroll('left')}
        type="button"
        aria-label="Scroll topics left"
        className="hidden md:flex absolute left-1 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <ChevronLeft className="w-3.5 h-3.5" />
      </button>

      {/* Horizontal categories container */}
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth px-1 md:px-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* All topics pill */}
        <button
          onClick={() => onSelectCategory(null)}
          type="button"
          className={cn(
            "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer border shrink-0",
            activeCategory === null
              ? "bg-blue-600 text-white border-blue-500 shadow-sm shadow-blue-500/25"
              : "bg-white dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
          )}
        >
          <Sparkles className="w-3 h-3" />
          <span>All Topics</span>
        </button>

        {categories.map((cat) => {
          const isActive = activeCategory === cat.name;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(isActive ? null : cat.name)}
              type="button"
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer border shrink-0",
                isActive
                  ? "bg-blue-600 text-white border-blue-500 shadow-sm shadow-blue-500/25 font-semibold"
                  : "bg-white dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-900 dark:hover:text-white"
              )}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Scroll right button */}
      <button
        onClick={() => handleScroll('right')}
        type="button"
        aria-label="Scroll topics right"
        className="hidden md:flex absolute right-1 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
