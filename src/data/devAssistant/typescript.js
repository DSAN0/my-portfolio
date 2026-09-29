export const typescriptKnowledge = [
  {
    id: "typescript-basics",
    category: "TypeScript",
    title: "TypeScript Type Definitions, Interfaces vs Types & Generics",
    keywords: [
      "typescript", "interface vs type", "generics typescript", "typescript props", "tsconfig", "ts types"
    ],
    exampleQuestions: [
      "What is the difference between Interface and Type in TypeScript?",
      "How do Generics work in TypeScript?",
      "How do I define React component props in TypeScript?"
    ],
    type: "concept",
    answer: {
      summary: "TypeScript adds static type definitions to JavaScript, catching bugs at compile-time before deployment.",
      command: `// 1. Interface (Ideal for objects, classes & declaration merging)
interface User {
  id: string;
  name: string;
  email?: string; // Optional property
}

// 2. Type Alias (Great for unions, primitives & tuples)
type Status = 'idle' | 'loading' | 'success' | 'error';
type UserWithRole = User & { role: 'admin' | 'member' };

// 3. Generics (Reusable type-safe functions)
function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

// 4. React Props Example
interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}`,
      language: "typescript",
      explanation: "Interfaces can be extended with `extends`, while Type Aliases use intersection `&` and support union types.",
      notes: [
        "In modern TypeScript, `interface` and `type` can both describe object shapes, but use `type` when declaring unions or primitives."
      ],
      relatedTopics: ["javascript-modern-syntax", "react-start-vite"]
    }
  }
];
