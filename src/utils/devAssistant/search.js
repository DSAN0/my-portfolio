import { scoreKnowledgeItem } from './matcher';
import { cleanText } from './normalizer';

const MATCH_THRESHOLD = 28; // Minimum score to consider a valid answer match

/**
 * Searches the knowledge base and returns top matches.
 */
export function searchKnowledge(query, knowledgeItems = [], options = {}) {
  const {
    activeCategory = null,
    limit = 3,
    threshold = MATCH_THRESHOLD
  } = options;

  if (!query || typeof query !== 'string') {
    return {
      bestMatch: null,
      matches: [],
      query: '',
      hasDirectAnswer: false
    };
  }

  const cleanQ = cleanText(query);
  if (!cleanQ) {
    return {
      bestMatch: null,
      matches: [],
      query,
      hasDirectAnswer: false
    };
  }

  // Calculate scores for all knowledge items
  const scored = knowledgeItems.map(item => ({
    item,
    score: scoreKnowledgeItem(query, item, activeCategory)
  }));

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);

  const validMatches = scored.filter(s => s.score >= threshold);
  const bestMatch = validMatches.length > 0 ? validMatches[0].item : null;
  const topMatches = validMatches.slice(0, limit).map(m => m.item);

  return {
    bestMatch,
    matches: topMatches,
    topScore: scored.length > 0 ? scored[0].score : 0,
    hasDirectAnswer: Boolean(bestMatch),
    query
  };
}

/**
 * Get suggestions based on query or category
 */
export function getSuggestedQuestions(knowledgeItems = [], activeCategory = null, count = 6) {
  let pool = knowledgeItems;

  if (activeCategory) {
    pool = knowledgeItems.filter(
      k => cleanText(k.category) === cleanText(activeCategory)
    );
  }

  // Pick representative questions
  const suggestions = [];
  const seenTitles = new Set();

  for (const item of pool) {
    if (item.exampleQuestions && item.exampleQuestions.length > 0) {
      for (const q of item.exampleQuestions) {
        if (!seenTitles.has(q)) {
          seenTitles.add(q);
          suggestions.push({
            id: item.id,
            category: item.category,
            question: q
          });
          break;
        }
      }
    }
    if (suggestions.length >= count) break;
  }

  return suggestions;
}
