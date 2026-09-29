import { useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';
import { EmptyState } from './EmptyState';

export function ChatWindow({
  messages = [],
  isLoading = false,
  onSelectQuestion,
  onSelectCategory
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 p-4 md:p-6 overflow-y-auto min-h-[380px] max-h-[580px] space-y-4 bg-gray-50/50 dark:bg-gray-900/40">
      {messages.length === 0 ? (
        <EmptyState
          onSelectQuestion={onSelectQuestion}
          onSelectCategory={onSelectCategory}
        />
      ) : (
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                onSelectQuestion={onSelectQuestion}
                onSelectCategory={onSelectCategory}
              />
            ))}
          </AnimatePresence>

          {isLoading && <TypingIndicator />}

          <div ref={bottomRef} className="h-2" />
        </div>
      )}
    </div>
  );
}
