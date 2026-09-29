// Utility to normalize search queries and text for deterministic matching

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'in', 'on', 'at', 'to', 'for', 'from', 'with', 'by', 'about', 'against',
  'into', 'through', 'during', 'before', 'after', 'above', 'below',
  'of', 'off', 'over', 'under', 'again', 'further', 'then', 'once',
  'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both',
  'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor',
  'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't',
  'can', 'will', 'just', 'don', 'should', 'now', 'do', 'does', 'did',
  'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you',
  'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his',
  'she', 'her', 'hers', 'it', 'its', 'itself', 'they', 'them', 'their',
  'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those',
  'am', 'have', 'has', 'had', 'having', 'would', 'could', 'please', 'tell'
]);

const SYNONYMS = {
  'repo': 'repository',
  'repos': 'repository',
  'branching': 'branch',
  'branches': 'branch',
  'committing': 'commit',
  'commits': 'commit',
  'pushing': 'push',
  'pulling': 'pull',
  'merging': 'merge',
  'rebasing': 'rebase',
  'stashing': 'stash',
  'venv': 'virtualenv',
  'virtual environment': 'virtualenv',
  'virtual env': 'virtualenv',
  'env': 'environment',
  'postgres': 'postgresql',
  'pg': 'postgresql',
  'db': 'database',
  'dbs': 'database',
  'dir': 'directory',
  'folder': 'directory',
  'auth': 'authentication',
  'jwt': 'token',
  'fe': 'frontend',
  'be': 'backend',
  'js': 'javascript',
  'ts': 'typescript',
  'py': 'python',
  'reactjs': 'react',
  'drf': 'django rest framework',
  'rest': 'rest api',
  'apis': 'api',
  'err': 'error',
  'errors': 'error',
  'failing': 'error',
  'broken': 'error',
  'fix': 'troubleshoot',
  'debug': 'troubleshoot',
  'setup': 'create',
  'init': 'initialize',
  'start': 'create'
};

/**
 * Clean text: lowercase, remove special characters, normalize whitespace
 */
export function cleanText(text = '') {
  if (typeof text !== 'string') return '';
  return text
    .toLowerCase()
    .replace(/[^\w\s\-\/\.\#\+]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Tokenize string and normalize synonyms
 */
export function tokenize(text = '') {
  const cleaned = cleanText(text);
  if (!cleaned) return [];
  
  return cleaned
    .split(/\s+/)
    .map(token => SYNONYMS[token] || token)
    .filter(token => token.length > 0);
}

/**
 * Tokenize and remove stop words (useful for keyword-based score)
 */
export function tokenizeMeaningful(text = '') {
  const tokens = tokenize(text);
  const filtered = tokens.filter(t => !STOP_WORDS.has(t));
  return filtered.length > 0 ? filtered : tokens;
}

/**
 * Extract n-grams (bigrams & trigrams)
 */
export function getNGrams(tokens, n = 2) {
  const ngrams = [];
  for (let i = 0; i <= tokens.length - n; i++) {
    ngrams.push(tokens.slice(i, i + n).join(' '));
  }
  return ngrams;
}
