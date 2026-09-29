export const environmentKnowledge = [
  {
    id: "environment-variables",
    category: "Environment",
    title: "Environment Variables, .env Files & Secrets Management",
    keywords: [
      "environment variables", "dotenv", ".env", "import.meta.env", "process.env", "secrets", "api keys security"
    ],
    exampleQuestions: [
      "How do I manage .env files securely?",
      "What is the difference between frontend and backend environment variables?",
      "How do I load environment variables in Python and Node.js?"
    ],
    type: "concept",
    answer: {
      summary: "Environment variables separate sensitive credentials and runtime configuration from your application codebase.",
      table: {
        headers: ["Stack", "Load Method", "Public / Client Prefix Rules"],
        rows: [
          ["Vite / React", "import.meta.env.VITE_VAR", "Must start with VITE_ to be exposed to client bundle"],
          ["Next.js", "process.env.NEXT_PUBLIC_VAR", "Must start with NEXT_PUBLIC_ for client side"],
          ["Python / Django", "os.environ.get('VAR') / python-dotenv", "Private to server runtime; safe for DB secrets and API keys"],
          ["Node.js", "process.env.VAR / dotenv", "Private to server runtime"]
        ]
      },
      command: `# .env (Never commit to Git!)
DATABASE_URL=postgresql://user:pass@localhost:5432/mydb
SECRET_KEY=super-secret-key-123
VITE_API_URL=http://localhost:8000/api

# .env.example (Safe to commit as documentation template)
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
SECRET_KEY=replace-with-random-secret
VITE_API_URL=http://localhost:8000/api`,
      language: "bash",
      explanation: "Provide a `.env.example` in version control so new team members know which variables need to be defined.",
      notes: [
        "CRITICAL: Any environment variable bundled into a frontend React app is visible in plain text to end users. Never put database passwords or private API keys in client-side code!"
      ],
      relatedTopics: ["github-gitignore", "vite-basics", "django-create-project"]
    }
  }
];
