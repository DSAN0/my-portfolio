import { User } from 'lucide-react';

export function UserMessage({ message }) {
  const time = message.timestamp
    ? new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : null;

  return (
    <div className="flex justify-end gap-3 py-2 px-1">
      <div className="max-w-[85%] sm:max-w-[75%] flex flex-col items-end">
        <div className="flex items-center gap-2 mb-1">
          {time && (
            <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono">
              {time}
            </span>
          )}
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            You
          </span>
        </div>

        <div className="px-4 py-2.5 rounded-2xl rounded-tr-sm bg-blue-600 text-white shadow-sm text-sm md:text-[15px] leading-relaxed break-words">
          {message.content}
        </div>
      </div>

      <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 shrink-0 mt-1">
        <User className="w-4 h-4" />
      </div>
    </div>
  );
}
