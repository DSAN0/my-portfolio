import { searchKnowledge, getSuggestedQuestions } from './search';
import { cleanText } from './normalizer';

/**
 * Parses user input for potential slash commands or terminal prefix notation
 */
export function parseInput(input = '') {
  const trimmed = input.trim();
  
  // Terminal syntax: ask "..." or ask '...'
  const askMatch = trimmed.match(/^ask\s+["'](.*)["']$/i);
  if (askMatch) {
    return { type: 'query', value: askMatch[1].trim() };
  }

  // Easter egg or built-in slash commands
  if (trimmed.startsWith('/')) {
    const parts = trimmed.slice(1).split(/\s+/);
    const command = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    if (['help', 'topics', 'clear', 'about'].includes(command)) {
      return { type: 'easter_egg', command, args };
    }

    // e.g. /git push -> normalize to query "git push"
    return { type: 'query', value: trimmed.slice(1) };
  }

  return { type: 'query', value: trimmed };
}

/**
 * Builds response object from matching result or fallback
 */
export function buildResponse(query, knowledgeBase, categories, options = {}) {
  const parsed = parseInput(query);

  // Easter eggs
  if (parsed.type === 'easter_egg') {
    return handleEasterEgg(parsed.command, categories, knowledgeBase);
  }

  const cleanQuery = parsed.value;
  const searchResult = searchKnowledge(cleanQuery, knowledgeBase, options);

  if (searchResult.hasDirectAnswer && searchResult.bestMatch) {
    const item = searchResult.bestMatch;
    return {
      id: `ans-${Date.now()}`,
      status: 'success',
      type: item.type || 'workflow',
      category: item.category,
      title: item.title,
      knowledgeId: item.id,
      data: item.answer,
      suggestedQuestions: getSuggestedQuestions(knowledgeBase, item.category, 3)
    };
  }

  // Fallback response when no direct match found
  return {
    id: `ans-${Date.now()}`,
    status: 'unknown',
    type: 'unknown',
    query: cleanQuery,
    message: "I don't have a prepared answer for that yet.",
    categories: categories.map(c => c.name),
    suggestedQuestions: getSuggestedQuestions(knowledgeBase, null, 5)
  };
}

/**
 * Handles developer easter egg commands
 */
function handleEasterEgg(command, categories, knowledgeBase) {
  const timestamp = Date.now();

  switch (command) {
    case 'help':
      return {
        id: `egg-${timestamp}`,
        status: 'system',
        type: 'easter_egg',
        command: 'help',
        title: 'Developer Assistant Guide',
        content: `
Welcome to the Developer Assistant! You can ask questions in natural language or type direct developer commands.

Key features:
• **Natural Language**: "How do I connect Django to PostgreSQL?" or "How do I push code to GitHub?"
• **Direct Commands**: Type "git rebase", "docker ps", or "npm run build"
• **Troubleshooting**: Ask about errors like "Django migration error" or "CORS issue in React"
• **Slash Commands**:
  - \`/help\` : Show this help documentation
  - \`/topics\` : List all supported developer categories
  - \`/clear\` : Clear current conversation session
  - \`/about\` : Read about this portfolio engineering project
        `,
        suggestedQuestions: getSuggestedQuestions(knowledgeBase, null, 4)
      };

    case 'topics':
      return {
        id: `egg-${timestamp}`,
        status: 'system',
        type: 'easter_egg',
        command: 'topics',
        title: 'Available Developer Categories',
        categories: categories.map(c => ({
          name: c.name,
          count: knowledgeBase.filter(k => cleanText(k.category) === cleanText(c.name)).length,
          icon: c.icon
        })),
        content: 'Select any category chip at the top to explore curated workflows, commands, and troubleshooting guides.',
        suggestedQuestions: getSuggestedQuestions(knowledgeBase, null, 4)
      };

    case 'about':
      return {
        id: `egg-${timestamp}`,
        status: 'system',
        type: 'easter_egg',
        command: 'about',
        title: 'About Dev Assistant',
        content: `
This Dev Assistant is a **100% frontend, deterministic developer knowledge engine** built by Dumindu Sankalpa as part of this engineering portfolio.

**Architecture Highlights:**
• **Zero External Dependencies**: Operates 100% offline in-browser without external AI/API keys.
• **Deterministic NLP Matcher**: Custom tokenization, stop-word removal, and phrasal n-gram scoring.
• **Modular Knowledge Schema**: Decoupled data model with categorized, extensible knowledge modules.
• **Engine Abstraction**: Clean provider interface designed for seamless future backend/LLM pluggability.
        `,
        suggestedQuestions: getSuggestedQuestions(knowledgeBase, null, 4)
      };

    default:
      return {
        id: `egg-${timestamp}`,
        status: 'system',
        type: 'unknown',
        message: `Command /${command} not recognized. Type /help for available commands.`
      };
  }
}
