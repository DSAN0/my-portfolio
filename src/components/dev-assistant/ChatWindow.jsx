import { useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';
import { EmptyState } from './EmptyState';

export function ChatWindow({
  messages = [],
  isLoading = false,
  onSelectQuestion,
  onSelectCategory,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Scroll only the chat panel — avoid scrollIntoView (it moves the page)
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div
      ref={containerRef}
      className="relative flex-1 p-4 md:p-6 overflow-y-auto min-h-[380px] max-h-[580px] space-y-4 bg-slate-950/25 hud-scroll"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.35) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10">
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
          </div>
        )}
      </div>
    </div>
  );
}
