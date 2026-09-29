import { cleanText, tokenize, tokenizeMeaningful, getNGrams } from './normalizer';

/**
 * Computes deterministic relevance score between a user query and a knowledge item.
 * Returns a score between 0 and 100+.
 */
export function scoreKnowledgeItem(query, item, activeCategory = null) {
  if (!query || !item) return 0;

  const rawCleanQuery = cleanText(query);
  const queryTokens = tokenize(query);
  const meaningfulTokens = tokenizeMeaningful(query);
  const queryBigrams = getNGrams(queryTokens, 2);
  const queryTrigrams = getNGrams(queryTokens, 3);

  let score = 0;

  // 1. Direct ID match (highest priority, e.g. "git-push" or "git push")
  const idNormalized = item.id.replace(/-/g, ' ');
  if (rawCleanQuery === item.id || rawCleanQuery === idNormalized) {
    return 100;
  }

  // 2. Exact Title Match
  const titleClean = cleanText(item.title);
  if (rawCleanQuery === titleClean) {
    score += 85;
  } else if (titleClean.includes(rawCleanQuery) || rawCleanQuery.includes(titleClean)) {
    score += 55;
  } else {
    // Title token overlap
    const titleTokens = tokenizeMeaningful(item.title);
    const titleOverlap = titleTokens.filter(t => meaningfulTokens.includes(t));
    if (titleTokens.length > 0) {
      score += (titleOverlap.length / titleTokens.length) * 35;
    }
  }

  // 3. Exact & Partial Keyword Matching
  if (Array.isArray(item.keywords)) {
    let bestKeywordScore = 0;

    for (const kw of item.keywords) {
      const kwClean = cleanText(kw);

      if (rawCleanQuery === kwClean) {
        bestKeywordScore = Math.max(bestKeywordScore, 80);
      } else if (rawCleanQuery.includes(kwClean)) {
        // Query fully contains the keyword phrase
        bestKeywordScore = Math.max(bestKeywordScore, 65);
      } else if (kwClean.includes(rawCleanQuery) && rawCleanQuery.length > 3) {
        bestKeywordScore = Math.max(bestKeywordScore, 45);
      } else {
        // Token level keyword overlap
        const kwTokens = tokenizeMeaningful(kw);
        const overlap = kwTokens.filter(t => meaningfulTokens.includes(t));
        if (kwTokens.length > 0 && overlap.length === kwTokens.length) {
          // All tokens in the keyword are present in query!
          bestKeywordScore = Math.max(bestKeywordScore, 50);
        } else if (overlap.length > 0) {
          bestKeywordScore = Math.max(bestKeywordScore, (overlap.length / kwTokens.length) * 30);
        }
      }
    }

    score += bestKeywordScore;
  }

  // 4. Example Questions Matching (Calculates similarity to known natural-language questions)
  if (Array.isArray(item.exampleQuestions)) {
    let bestQuestionScore = 0;

    for (const eq of item.exampleQuestions) {
      const eqClean = cleanText(eq);
      if (rawCleanQuery === eqClean) {
        bestQuestionScore = Math.max(bestQuestionScore, 90);
        break;
      }

      const eqTokens = tokenizeMeaningful(eq);
      const eqMeaningfulSet = new Set(eqTokens);
      const intersection = meaningfulTokens.filter(t => eqMeaningfulSet.has(t));
      
      if (intersection.length > 0) {
        const jaccard = intersection.length / (new Set([...meaningfulTokens, ...eqTokens]).size || 1);
        const qScore = jaccard * 60;
        bestQuestionScore = Math.max(bestQuestionScore, qScore);
      }
    }

    score += bestQuestionScore;
  }

  // 5. N-gram (Phrasal) boost
  if (Array.isArray(item.keywords)) {
    for (const bigram of queryBigrams) {
      if (item.keywords.some(kw => cleanText(kw).includes(bigram))) {
        score += 8;
        break;
      }
    }
    for (const trigram of queryTrigrams) {
      if (item.keywords.some(kw => cleanText(kw).includes(trigram))) {
        score += 12;
        break;
      }
    }
  }

  // 6. Category relevance / boost
  const categoryClean = cleanText(item.category);
  if (queryTokens.includes(categoryClean) || meaningfulTokens.includes(categoryClean)) {
    score += 15;
  }

  if (activeCategory && categoryClean === cleanText(activeCategory)) {
    score += 10;
  }

  // 7. Type-specific triggers
  if (item.type === 'troubleshooting') {
    const errorWords = ['error', 'troubleshoot', 'fail', 'failing', 'broken', 'not working', 'issue', 'fix', 'problem', 'refused', 'rejected'];
    if (errorWords.some(w => rawCleanQuery.includes(w))) {
      score += 12;
    }
  }

  return score;
}
