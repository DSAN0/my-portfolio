import { buildResponse, parseInput } from './responseBuilder';
import { allKnowledge, categories } from '../../data/devAssistant';

/**
 * Interface / Base Class for Assistant Engines
 */
export class BaseAssistantEngine {
  async answer(query, context = {}) {
    throw new Error('answer method must be implemented by subclass');
  }
}

/**
 * Local Knowledge Engine Implementation
 * Uses client-side deterministic search & scoring over local static data.
 */
export class LocalKnowledgeEngine extends BaseAssistantEngine {
  constructor(knowledgeBase = allKnowledge, categoryList = categories) {
    super();
    this.knowledgeBase = knowledgeBase;
    this.categories = categoryList;
  }

  /**
   * Generates a structured response for the user's query
   */
  async answer(query, context = {}) {
    const { activeCategory = null, delay = 350 } = context;

    // Small simulated realistic typing latency for natural UX (can be customized)
    if (delay > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }

    const response = buildResponse(query, this.knowledgeBase, this.categories, {
      activeCategory
    });

    return response;
  }

  /**
   * Helper to inspect if a query is an instant client command (e.g. /clear)
   */
  checkImmediateCommand(query) {
    const parsed = parseInput(query);
    if (parsed.type === 'easter_egg' && parsed.command === 'clear') {
      return { action: 'clear' };
    }
    return null;
  }

  getCategories() {
    return this.categories;
  }

  getKnowledgeBase() {
    return this.knowledgeBase;
  }
}

// Default singleton instance exported for UI consumption
export const assistantEngine = new LocalKnowledgeEngine();
