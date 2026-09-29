import { motion } from 'framer-motion';
import { UserMessage } from './UserMessage';
import { AssistantMessage } from './AssistantMessage';

export function ChatMessage({ message, onSelectQuestion, onSelectCategory }) {
  const isUser = message.sender === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-full"
    >
      {isUser ? (
        <UserMessage message={message} />
      ) : (
        <AssistantMessage
          message={message}
          onSelectQuestion={onSelectQuestion}
          onSelectCategory={onSelectCategory}
        />
      )}
    </motion.div>
  );
}
