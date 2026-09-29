export const nodeKnowledge = [
  {
    id: "node-basics",
    category: "npm / Node.js",
    title: "Node.js Version Management with nvm & Modern ES Modules",
    keywords: [
      "node", "nodejs", "nvm", "node version", "nvm use", "es modules vs commonjs", "node.js server"
    ],
    exampleQuestions: [
      "How do I switch Node.js versions with nvm?",
      "How do I use ES Modules (import/export) in Node.js?",
      "How do I check my current Node.js and npm version?"
    ],
    type: "workflow",
    answer: {
      summary: "Node.js is an asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
      steps: [
        {
          title: "Check current versions",
          command: "node -v\nnpm -v",
          explanation: "Prints installed Node.js and npm release versions."
        },
        {
          title: "Install and switch Node version with NVM",
          command: "nvm install 20\nnvm use 20\nnvm alias default 20",
          explanation: "Installs LTS Node version 20 and sets it as default."
        },
        {
          title: "Enable ES Modules in package.json",
          command: `// package.json\n{\n  "type": "module"\n}`,
          explanation: "Allows using `import/export` instead of CommonJS `require()`."
        }
      ],
      notes: [
        "In modern full-stack development, keeping your local Node LTS aligned with production servers prevents subtle runtime incompatibilities."
      ],
      relatedTopics: ["npm-scripts", "javascript-async-await"]
    }
  }
];
