import { useState, useCallback } from 'react';
import { Reveal } from '../ui/Reveal';
import { AssistantHeader } from './AssistantHeader';
import { TopicSelector } from './TopicSelector';
import { ChatWindow } from './ChatWindow';
import { SearchInput } from './SearchInput';
import { assistantEngine } from '../../utils/devAssistant/engine';

export function DevAssistant({ id = "dev-assistant" }) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = assistantEngine.getCategories();

  const handleSendMessage = useCallback(async (queryText) => {
    if (!queryText || !queryText.trim() || isLoading) return;

    const trimmed = queryText.trim();

    // Check for direct instant commands (e.g., /clear)
    const immediate = assistantEngine.checkImmediateCommand(trimmed);
    if (immediate?.action === 'clear') {
      setMessages([]);
      return;
    }

    const userMsgId = `user-${Date.now()}`;
    const userMessage = {
      id: userMsgId,
      sender: 'user',
      content: trimmed,
      timestamp: Date.now()
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await assistantEngine.answer(trimmed, {
        activeCategory
      });

      const assistantMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        response,
        timestamp: Date.now()
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Error getting response from assistant engine', err);
      const errorMessage = {
        id: `error-${Date.now()}`,
        sender: 'assistant',
        response: {
          id: `err-${Date.now()}`,
          status: 'error',
          type: 'unknown',
          message: 'An unexpected local processing error occurred. Please try again.'
        },
        timestamp: Date.now()
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, activeCategory]);

  const handleClear = () => {
    setMessages([]);
  };

  const handleHelp = () => {
    handleSendMessage('/help');
  };

  const handleTopics = () => {
    handleSendMessage('/topics');
  };

  const handleSelectCategory = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const handleSelectQuestion = (questionText) => {
    handleSendMessage(questionText);
  };

  return (
    <section id={id} className="w-full">
      <Reveal>
        <div className="w-full max-w-5xl mx-auto">
          {/* Main Card Container with futuristic subtle border glow */}
          <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/90 shadow-2xl shadow-blue-500/5 backdrop-blur-xl transition-all">
            
            {/* Assistant Top Window Header */}
            <AssistantHeader
              onClear={handleClear}
              onHelp={handleHelp}
              onTopics={handleTopics}
              hasMessages={messages.length > 0}
              categoryCount={categories.length}
            />

            {/* Horizontal Scrollable Topic Filter Bar */}
            <TopicSelector
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={handleSelectCategory}
            />

            {/* Main Interactive Chat Window */}
            <ChatWindow
              messages={messages}
              isLoading={isLoading}
              onSelectQuestion={handleSelectQuestion}
              onSelectCategory={handleSelectCategory}
            />

            {/* Terminal-Styled Search Input Bar */}
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
