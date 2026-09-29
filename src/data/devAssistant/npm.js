export const npmKnowledge = [
  {
    id: "npm-scripts",
    category: "npm / Node.js",
    title: "npm Package Management, Scripts & Dependencies",
    keywords: [
      "npm", "npm install", "package.json", "npm run", "npm uninstall", "dependencies vs devdependencies", "npm ci"
    ],
    exampleQuestions: [
      "What is the difference between npm install and npm ci?",
      "What is the difference between dependencies and devDependencies?",
      "How do I clean npm cache and reinstall node_modules?"
    ],
    type: "workflow",
    answer: {
      summary: "npm manages Node.js packages, dependencies, semantic versioning, and build scripts defined in `package.json`.",
      steps: [
        {
          title: "Install a production dependency",
          command: "npm install axios lucide-react",
          explanation: "Adds package to dependencies (required at application runtime)."
        },
        {
          title: "Install development-only dependency",
          command: "npm install -D tailwindcss eslint prettier",
          explanation: "Adds package to devDependencies (used only for testing, bundling, or linting)."
        },
        {
          title: "Clean install based strictly on package-lock.json (CI/CD best practice)",
          command: "npm ci",
          explanation: "Deletes existing node_modules and installs exact locked versions without modifying lockfile."
        },
        {
          title: "Fresh reinstall when dependencies are corrupt",
          command: "rm -rf node_modules package-lock.json\nnpm cache clean --force\nnpm install",
          explanation: "Purges cached artifacts and rebuilds the dependency tree cleanly."
        }
      ],
      notes: [
        "Always commit `package-lock.json` to ensure identical builds across different developers and deployment servers."
      ],
      relatedTopics: ["vite-basics", "troubleshoot-npm-install", "node-basics"]
    }
  }
];
