import { Reveal } from '../ui/Reveal';
import { AssistantHeader } from './AssistantHeader';
import { TopicSelector } from './TopicSelector';
import { ChatWindow } from './ChatWindow';
import { SearchInput } from './SearchInput';
import { assistantEngine } from '../../utils/devAssistant/engine';
import { useState, useCallback } from 'react';
import { Cpu } from 'lucide-react';

export function DevAssistant({ id = 'dev-assistant' }) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = assistantEngine.getCategories();

  const handleSendMessage = useCallback(
    async (queryText) => {
      if (!queryText || !queryText.trim() || isLoading) return;

      const trimmed = queryText.trim();

      const immediate = assistantEngine.checkImmediateCommand(trimmed);
      if (immediate?.action === 'clear') {
        setMessages([]);
        return;
      }

      const userMessage = {
        id: `user-${Date.now()}`,
        sender: 'user',
        content: trimmed,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      try {
        const response = await assistantEngine.answer(trimmed, {
          activeCategory,
        });

        setMessages((prev) => [
          ...prev,
          {
            id: `assistant-${Date.now()}`,
            sender: 'assistant',
            response,
            timestamp: Date.now(),
          },
        ]);
      } catch (err) {
        console.error('Error getting response from assistant engine', err);
        setMessages((prev) => [
          ...prev,
          {
            id: `error-${Date.now()}`,
            sender: 'assistant',
            response: {
              id: `err-${Date.now()}`,
              status: 'error',
              type: 'unknown',
              message: 'An unexpected local processing error occurred. Please try again.',
            },
            timestamp: Date.now(),
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, activeCategory]
  );

  const handleClear = () => setMessages([]);
  const handleHelp = () => handleSendMessage('/help');
  const handleTopics = () => handleSendMessage('/topics');
  const handleSelectCategory = (categoryName) => setActiveCategory(categoryName);
  const handleSelectQuestion = (questionText) => handleSendMessage(questionText);

  return (
    <section id={id} className="w-full">
      <Reveal>
        <div className="w-full max-w-5xl mx-auto">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono tracking-[0.3em] uppercase text-sky-600 dark:text-sky-400 mb-2">
                Command Lab
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">
                Dev Assistant
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl glass-subtle text-[11px] font-mono text-slate-600 dark:text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-sky-500" />
              <span>LOCAL ENGINE ONLINE</span>
            </div>
          </div>

          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden glass-strong">
            {/* Corner HUD marks */}
            <span className="pointer-events-none absolute top-3 left-3 w-3 h-3 border-l border-t border-sky-400/60 z-20" />
            <span className="pointer-events-none absolute top-3 right-3 w-3 h-3 border-r border-t border-sky-400/60 z-20" />
            <span className="pointer-events-none absolute bottom-3 left-3 w-3 h-3 border-l border-b border-sky-400/60 z-20" />
            <span className="pointer-events-none absolute bottom-3 right-3 w-3 h-3 border-r border-b border-sky-400/60 z-20" />

            {/* Soft top scan accent (static gradient, not animated) */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent z-20" />

            <AssistantHeader
              onClear={handleClear}
              onHelp={handleHelp}
              onTopics={handleTopics}
              hasMessages={messages.length > 0}
              categoryCount={categories.length}
            />

            <TopicSelector
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={handleSelectCategory}
            />

            <ChatWindow
              messages={messages}
              isLoading={isLoading}
              onSelectQuestion={handleSelectQuestion}
              onSelectCategory={handleSelectCategory}
            />

            <SearchInput
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default DevAssistant;
