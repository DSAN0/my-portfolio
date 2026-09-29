export const viteKnowledge = [
  {
    id: "vite-basics",
    category: "Vite",
    title: "Vite Tooling, Scripts, Environment Variables & Config",
    keywords: [
      "vite", "vite config", "import.meta.env", "vite environment variables", "vite build", "vite preview", "vite aliases"
    ],
    exampleQuestions: [
      "How do environment variables work in Vite?",
      "How do I configure path aliases (@) in Vite?",
      "What is the difference between npm run dev and npm run preview in Vite?"
    ],
    type: "concept",
    answer: {
      summary: "Vite is a next-generation build tool that serves code via native ES modules during dev and bundles with Rollup for production.",
      command: `// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true
  }
});`,
      language: "javascript",
      explanation: "Vite provides lightning-fast Hot Module Replacement (HMR) by avoiding full bundle recompilation during development.",
      notes: [
        "Client-exposed environment variables must be prefixed with `VITE_` (e.g., `VITE_API_URL`) and accessed via `import.meta.env.VITE_API_URL`.",
        "Use `.env.local` for local secrets (ensure it is in `.gitignore`)."
      ],
      relatedTopics: ["react-start-vite", "npm-scripts", "environment-variables"]
    }
  }
];
