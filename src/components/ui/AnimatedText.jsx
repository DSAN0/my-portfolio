import { motion } from 'framer-motion';

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export function AnimatedText({ text, className = '', delay = 0 }) {
  const words = text.split(' ');

  return (
    <motion.span
      initial="hidden"
      animate="show"
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          transition={{ delay: delay + index * 0.05 }}
          className="inline-block mr-[0.3em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
