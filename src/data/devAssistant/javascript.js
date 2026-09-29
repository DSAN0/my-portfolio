export const javascriptKnowledge = [
  {
    id: "js-async-await",
    category: "JavaScript",
    title: "Async/Await and Promise Error Handling with Try/Catch",
    keywords: [
      "async await", "javascript promises", "try catch async", "fetch javascript", "promise all", "handle async error"
    ],
    exampleQuestions: [
      "How do I use async/await in JavaScript?",
      "How do I handle errors with async/await and try/catch?",
      "How do I run multiple promises in parallel with Promise.all?"
    ],
    type: "concept",
    answer: {
      summary: "`async/await` is syntactic sugar over Promises, allowing asynchronous code to be written and read like synchronous code.",
      command: `async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`Request failed with status \${response.status}\`);
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Failed to fetch user:", error.message);
    throw error;
  }
}

// Executing multiple parallel requests
const [users, posts] = await Promise.all([
  fetchUserData(1),
  fetch('/api/posts').then(res => res.json())
]);`,
      language: "javascript",
      explanation: "`await` pauses the execution of the async function until the promise settles (resolves or rejects).",
      notes: [
        "Remember that `fetch` only rejects on network failure, not on 404 or 500 status codes. Always check `response.ok`."
      ],
      relatedTopics: ["react-hooks-useeffect", "rest-api-basics"]
    }
  },
  {
    id: "js-array-methods",
    category: "JavaScript",
    title: "Essential Array Methods: map, filter, reduce & find",
    keywords: [
      "array methods", "map filter reduce", "javascript map", "javascript filter", "javascript reduce", "javascript find"
    ],
    exampleQuestions: [
      "What is the difference between map, filter, and reduce?",
      "How do I use reduce in JavaScript?",
      "How do I transform an array in JavaScript?"
    ],
    type: "concept",
    answer: {
      summary: "Higher-order array functions iterate through elements immutably, returning transformed data structures.",
      command: `const numbers = [1, 2, 3, 4, 5];

// 1. map(): transform each item (returns new array of same length)
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// 2. filter(): keep items meeting condition
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// 3. reduce(): accumulate elements into a single value/object
const totalSum = numbers.reduce((acc, curr) => acc + curr, 0); // 15

// 4. find(): return first matching element or undefined
const found = numbers.find(n => n > 3); // 4`,
      language: "javascript",
      explanation: "These methods do not mutate the original array, making them ideal for React state management.",
      notes: [
        "In React JSX, `array.map()` is standard for rendering dynamic lists with unique `key` props."
      ],
      relatedTopics: ["react-hooks-usestate", "typescript-basics"]
    }
  },
  {
    id: "js-modern-syntax",
    category: "JavaScript",
    title: "Modern ES6+ Syntax: Destructuring, Spread, Optional Chaining & Nullish Coalescing",
    keywords: [
      "es6", "destructuring", "spread operator", "optional chaining", "nullish coalescing", "rest operator", "arrow functions"
    ],
    exampleQuestions: [
      "How do optional chaining (?.) and nullish coalescing (??) work?",
      "How do I use object and array destructuring?",
      "What does the spread operator (...) do?"
    ],
    type: "concept",
    answer: {
      summary: "Modern ECMAScript features simplify safe property access, object cloning, and clean parameter extraction.",
      command: `// 1. Destructuring & Defaults
const user = { name: 'Dumindu', role: 'Engineer', location: { city: 'Colombo' } };
const { name, role, isOnline = true } = user;

// 2. Spread Operator (shallow clone / merge)
const updatedUser = { ...user, active: true };

// 3. Optional Chaining (?.)
const country = user?.location?.country ?? 'Sri Lanka';

// 4. Nullish Coalescing (??) vs Logical OR (||)
// ?? only falls back on null/undefined, not on 0 or empty string ""
const port = process.env.PORT ?? 3000;`,
      language: "javascript",
      explanation: "Optional chaining prevents `Cannot read properties of undefined` runtime crashes.",
      notes: [
        "`??` handles falsy values like `0` or `false` safely without accidentally triggering fallback values."
      ],
      relatedTopics: ["typescript-basics", "react-hooks-usestate"]
    }
  }
];
