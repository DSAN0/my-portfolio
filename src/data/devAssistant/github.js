export const githubKnowledge = [
  {
    id: "github-connect-local",
    category: "GitHub",
    title: "Connect existing local project to GitHub",
    keywords: [
      "connect github", "push existing project github", "link local to github",
      "git remote add origin", "upload existing folder github", "new github repo existing code"
    ],
    exampleQuestions: [
      "How do I connect an existing local project to GitHub?",
      "How do I push a local folder to a new GitHub repository?",
      "What are the commands to link my project to GitHub?"
    ],
    type: "workflow",
    answer: {
      summary: "Initialize a local repository, link it to the remote GitHub repository URL, and push the initial branch.",
      steps: [
        {
          title: "Initialize Git in your folder (if not done)",
          command: "git init -b main",
          explanation: "Initializes local repository with 'main' as default branch."
        },
        {
          title: "Stage and commit all project files",
          command: "git add .\ngit commit -m \"Initial commit\"",
          explanation: "Creates the initial snapshot of your project."
        },
        {
          title: "Add GitHub repository as remote origin",
          command: "git remote add origin https://github.com/your-username/your-repo-name.git",
          explanation: "Links your local repository to the empty GitHub repo you created."
        },
        {
          title: "Push and set upstream tracking",
          command: "git push -u origin main",
          explanation: "Pushes your code and binds local 'main' to 'origin/main'."
        }
      ],
      notes: [
        "Create the repository on GitHub first without checking 'Add README' to avoid fast-forward conflicts."
      ],
      relatedTopics: ["git-push", "github-ssh", "github-gitignore"]
    }
  },
  {
    id: "github-ssh-setup",
    category: "GitHub",
    title: "Configure SSH Keys for GitHub Authentication",
    keywords: [
      "github ssh", "ssh key github", "ssh setup", "id_ed25519", "ssh-keygen", "permission denied publickey"
    ],
    exampleQuestions: [
      "How do I set up SSH keys for GitHub?",
      "How do I fix Permission denied (publickey) on GitHub?",
      "How do I authenticate to GitHub using SSH?"
    ],
    type: "workflow",
    answer: {
      summary: "SSH keys provide passwordless, secure cryptographic authentication for pushing and cloning repositories.",
      steps: [
        {
          title: "Generate a new ED25519 SSH key",
          command: 'ssh-keygen -t ed25519 -C "your_email@example.com"',
          explanation: "Generates public/private keypair (press Enter to accept default path)."
        },
        {
          title: "Start SSH agent and add your private key",
          command: "eval $(ssh-agent -s)\nssh-add ~/.ssh/id_ed25519",
          explanation: "Loads your private key into memory."
        },
        {
          title: "Copy the public key content to clipboard",
          command: "cat ~/.ssh/id_ed25519.pub",
          explanation: "Output is your public key. Copy the entire line."
        },
        {
          title: "Add to GitHub Account Settings",
          command: "# Navigate to: GitHub Settings -> SSH and GPG Keys -> New SSH Key",
          explanation: "Paste the key, title it (e.g., 'Work Laptop'), and click Save."
        },
        {
          title: "Test SSH connection",
          command: "ssh -T git@github.com",
          explanation: "Should return: 'Hi username! You've successfully authenticated...'"
        }
      ],
      notes: [
        "On Windows PowerShell, use `Get-Content ~/.ssh/id_ed25519.pub | clip` to copy directly."
      ],
      relatedTopics: ["git-clone", "github-connect-local"]
    }
  },
  {
    id: "github-actions-basics",
    category: "GitHub",
    title: "GitHub Actions CI/CD workflow setup",
    keywords: [
      "github actions", "ci cd", "workflow yml", "github ci", "automate testing github", "actions yaml"
    ],
    exampleQuestions: [
      "How do I set up GitHub Actions for CI/CD?",
      "Where do I place GitHub Actions workflow files?",
      "How do I run automated tests on GitHub pull requests?"
    ],
    type: "concept",
    answer: {
      summary: "GitHub Actions automates your build, test, and deployment pipeline right inside your repository.",
      command: `# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests & linter
        run: |
          npm run lint
          npm run test`,
      language: "yaml",
      explanation: "Place YAML workflow files in `.github/workflows/` at the root of your project.",
      notes: [
        "GitHub Actions triggers automatically whenever code is pushed or a PR is submitted."
      ],
      relatedTopics: ["deployment-frontend", "testing-pytest"]
    }
  },
  {
    id: "github-pull-request",
    category: "GitHub",
    title: "Create and merge Pull Requests (PRs)",
    keywords: [
      "pull request", "create pr", "merge pr", "github pull request", "open pr", "review code"
    ],
    exampleQuestions: [
      "How do I create a Pull Request on GitHub?",
      "What is a Pull Request?",
      "How do I merge a Pull Request cleanly?"
    ],
    type: "concept",
    answer: {
      summary: "A Pull Request (PR) proposes changes from a feature branch to be reviewed and merged into the main target branch.",
      steps: [
        {
          title: "Push feature branch to remote",
          command: "git push -u origin feature/new-component",
          explanation: "Sends your branch to GitHub."
        },
        {
          title: "Open PR in GitHub interface",
          command: "# Click 'Compare & pull request' button on GitHub repo page",
          explanation: "Write a clear description of changes, link related issues (#12), and assign reviewers."
        },
        {
          title: "Pass CI checks & merge",
          command: "# Choose 'Squash and merge' or 'Create a merge commit'",
          explanation: "Once approved, merge the PR and delete the feature branch."
        }
      ],
      notes: [
        "Squash and merge combines all commits from the feature branch into 1 clean commit on main."
      ],
      relatedTopics: ["git-branch", "git-merge", "git-push"]
    }
  },
  {
    id: "github-gitignore",
    category: "GitHub",
    title: "Proper .gitignore configuration",
    keywords: [
      ".gitignore", "gitignore", "ignore files git", "ignore node_modules", "ignore .env"
    ],
    exampleQuestions: [
      "What should I put in .gitignore?",
      "How do I prevent .env or node_modules from being committed?",
      "How do I untrack a file already committed to Git?"
    ],
    type: "concept",
    answer: {
      summary: "A `.gitignore` file tells Git which files or directories to ignore and never track in version control.",
      command: `# Dependencies
node_modules/
venv/
__pycache__/
*.pyc

# Environment Secrets & Credentials
.env
.env.local
*.pem
secrets.json

# Build Outputs
dist/
build/
.next/

# IDE & OS files
.DS_Store
.vscode/
.idea/`,
      language: "text",
      explanation: "Place the `.gitignore` file in your project root.",
      notes: [
        "If a file is already tracked by Git before adding to .gitignore, remove it from the index with: `git rm --cached <file>`"
      ],
      relatedTopics: ["git-status", "environment-variables"]
    }
  }
];
