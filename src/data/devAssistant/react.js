export const reactKnowledge = [
  {
    id: "react-start-vite",
    category: "React",
    title: "Create and run a React project with Vite",
    keywords: [
      "start react", "create react app", "react vite", "npm create vite", "vite react setup",
      "install react", "new react project", "react initialize"
    ],
    exampleQuestions: [
      "How do I start a React Vite project?",
      "How do I create a new React app with Vite?",
      "What is the modern way to set up React?"
    ],
    type: "workflow",
    answer: {
      summary: "Use Vite to scaffold a lightning-fast React application with Hot Module Replacement (HMR).",
      steps: [
        {
          title: "Scaffold a new React project with Vite",
          command: "npm create vite@latest my-react-app -- --template react",
          explanation: "Creates project directory using the official React JavaScript template (or use --template react-ts for TypeScript)."
        },
        {
          title: "Navigate into project and install dependencies",
          command: "cd my-react-app\nnpm install",
          explanation: "Installs React, ReactDOM, and Vite build tooling."
        },
        {
          title: "Start development server",
          command: "npm run dev",
          explanation: "Launches the local Vite dev server (usually at http://localhost:5173)."
        },
        {
          title: "Build for production",
          command: "npm run build",
          explanation: "Compiles optimized production bundle into the /dist directory."
        }
      ],
      notes: [
        "Vite is significantly faster than the deprecated `create-react-app`."
      ],
      relatedTopics: ["vite-basics", "react-hooks-usestate", "npm-scripts"]
    }
  },
  {
    id: "react-hooks-usestate",
    category: "React",
    title: "State management with useState hook",
    keywords: [
      "usestate", "react state", "state hook", "setstate", "react usestate example", "update state"
    ],
    exampleQuestions: [
      "How does the useState hook work in React?",
      "How do I manage state in a React component?",
      "What is the syntax for useState?"
    ],
    type: "concept",
    answer: {
      summary: "`useState` declares a state variable and an updater function inside a functional component.",
      command: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Functional update avoids stale closures
    setCount(prev => prev + 1);
  };

  return (
    <button onClick={increment} className="btn">
      Count: {count}
    </button>
  );
}`,
      language: "jsx",
      explanation: "Whenever `setCount` is called, React schedules a re-render of the component with the new state value.",
      notes: [
        "Always use functional updates `setCount(prev => prev + 1)` when the next state depends on the previous state."
      ],
      relatedTopics: ["react-hooks-useeffect", "react-forms"]
    }
  },
  {
    id: "react-hooks-useeffect",
    category: "React",
    title: "Side effects and lifecycle with useEffect hook",
    keywords: [
      "useeffect", "react effect", "api call react", "fetch on mount", "useeffect cleanup", "lifecycle"
    ],
    exampleQuestions: [
      "How do I fetch data in React using useEffect?",
      "How does useEffect dependency array work?",
      "How do I clean up subscriptions in useEffect?"
    ],
    type: "concept",
    answer: {
      summary: "`useEffect` performs side effects like data fetching, subscriptions, timers, or DOM mutations in functional components.",
      command: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        if (!isCancelled) {
          setUser(data);
          setLoading(false);
        }
      });

    // Cleanup function runs on unmount or before next effect run
    return () => {
      isCancelled = true;
    };
  }, [userId]); // Re-runs effect whenever userId changes

  if (loading) return <div>Loading user profile...</div>;
  return <h1>{user?.name}</h1>;
}`,
      language: "jsx",
      explanation: "An empty array `[]` runs only on mount. An array with values `[a, b]` runs when those dependencies change.",
      notes: [
        "Always clean up timers, event listeners, or abort controllers in the return function to prevent memory leaks."
      ],
      relatedTopics: ["react-custom-hooks", "react-hooks-usestate"]
    }
  },
  {
    id: "react-custom-hooks",
    category: "React",
    title: "Create reusable Custom Hooks in React",
    keywords: [
      "custom hook", "react custom hooks", "useFetch hook", "reuse logic react", "hook pattern"
    ],
    exampleQuestions: [
      "How do I create a custom hook in React?",
      "Why should I create custom hooks?",
      "Can you give an example of a custom useFetch hook?"
    ],
    type: "concept",
    answer: {
      summary: "Custom hooks are JavaScript functions whose names start with `use` and can call other built-in React hooks to share reusable logic.",
      command: `import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetch(url, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(\`HTTP error! status: \${res.status}\`);
        return res.json();
      })
      .then(setData)
      .catch(err => {
        if (err.name !== 'AbortError') setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}`,
      language: "jsx",
      explanation: "Extracts repetitive data fetching or window size logic into a testable, modular function.",
      notes: [
        "Custom hooks must follow the Rules of Hooks (only call at top level, only in React functions)."
      ],
      relatedTopics: ["react-hooks-useeffect", "react-hooks-usestate"]
    }
  },
  {
    id: "react-performance-memo",
    category: "React",
    title: "Optimize performance with useMemo & useCallback",
    keywords: [
      "usememo", "usecallback", "react memo", "react performance", "optimize react", "prevent re-render"
    ],
    exampleQuestions: [
      "What is the difference between useMemo and useCallback?",
      "When should I use useMemo?",
      "How do I prevent unnecessary component re-renders in React?"
    ],
    type: "concept",
    answer: {
      summary: "`useMemo` memoizes expensive calculated values, while `useCallback` memoizes function instances between renders.",
      table: {
        headers: ["Hook", "Memoizes", "Primary Purpose"],
        rows: [
          ["useMemo", "Computed Return Value", "Avoid expensive recalculations (e.g. sorting large lists)"],
          ["useCallback", "Function Reference", "Prevent passing new function references to memoized children"],
          ["React.memo", "Component", "Skips re-rendering a component if its props have not changed"]
        ]
      },
      command: `// useMemo caches a calculated value
const sortedList = useMemo(() => {
  return hugeArray.sort((a, b) => b.score - a.score);
}, [hugeArray]);

// useCallback caches a function instance
const handleClick = useCallback((id) => {
  console.log("Clicked item:", id);
}, []);`,
      language: "jsx",
      explanation: "Do not prematurely optimize every value; use them when profiling reveals tangible performance bottlenecks.",
      notes: [
        "Memoization has overhead. Only apply when dealing with heavy computation or deep prop equality checks."
      ],
      relatedTopics: ["react-hooks-usestate", "javascript-arrays"]
    }
  }
];
