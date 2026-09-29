export const gitKnowledge = [
  {
    id: "git-push",
    category: "Git",
    title: "Push code to remote repository (GitHub/GitLab)",
    keywords: [
      "git push", "push git", "push code", "push to github", "upload code github",
      "send code github", "git push origin main", "push changes", "push local changes"
    ],
    exampleQuestions: [
      "How do I push my code to GitHub?",
      "How can I upload my project to GitHub?",
      "How do I send my local project to GitHub?",
      "What is the command to push to remote?"
    ],
    type: "workflow",
    answer: {
      summary: "Stage your modified files, create a meaningful commit message, and push your branch to the remote repository.",
      steps: [
        {
          title: "Check working directory status",
          command: "git status",
          explanation: "Inspects modified, untracked, and staged files before saving."
        },
        {
          title: "Stage your changes",
          command: "git add .",
          explanation: "Adds all modified and new files to the Git staging index."
        },
        {
          title: "Create a descriptive commit",
          command: 'git commit -m "Add feature and update documentation"',
          explanation: "Saves staged snapshot to local commit history."
        },
        {
          title: "Push commits to remote branch",
          command: "git push origin main",
          explanation: "Uploads your local commits to the remote origin branch."
        }
      ],
      notes: [
        "If your default branch is named 'master', use 'git push origin master'.",
        "For a newly created branch on remote, use 'git push -u origin <branch-name>' to set the upstream tracker."
      ],
      relatedTopics: ["git-status", "git-commit", "git-branch", "git-undo-push"]
    }
  },
  {
    id: "git-init",
    category: "Git",
    title: "Initialize a new Git repository",
    keywords: [
      "git init", "initialize git", "create git repo", "start git", "init git repository", "new git repo"
    ],
    exampleQuestions: [
      "How do I initialize a new Git repository?",
      "How do I start Git in a folder?",
      "What does git init do?"
    ],
    type: "command",
    answer: {
      summary: "Creates an empty Git repository by generating a hidden `.git` directory in the current working directory.",
      command: "git init -b main",
      language: "bash",
      explanation: "Initializes the repository with 'main' as the default initial branch name.",
      notes: [
        "Be sure to add a `.gitignore` file before making your first commit to avoid committing secrets or node_modules."
      ],
      relatedTopics: ["git-status", "git-add", "github-create-repo"]
    }
  },
  {
    id: "git-clone",
    category: "Git",
    title: "Clone an existing Git repository",
    keywords: [
      "git clone", "clone repository", "download git repo", "clone github repo", "git clone url"
    ],
    exampleQuestions: [
      "How do I clone a GitHub repository?",
      "How do I download a Git project to my computer?",
      "What is the git clone command syntax?"
    ],
    type: "command",
    answer: {
      summary: "Downloads a full copy of a remote repository including all history, branches, and commits to your local machine.",
      command: "git clone https://github.com/username/repository-name.git",
      language: "bash",
      explanation: "Clones the project into a folder matching the repository name. You can append a custom folder name at the end.",
      notes: [
        "To clone via SSH: `git clone git@github.com:username/repository.git`"
      ],
      relatedTopics: ["git-pull", "git-remote", "github-ssh"]
    }
  },
  {
    id: "git-branch",
    category: "Git",
    title: "Create, list, switch, and delete branches",
    keywords: [
      "git branch", "create branch", "switch branch", "new branch", "checkout branch",
      "git checkout -b", "git switch", "delete branch", "list branches", "rename branch"
    ],
    exampleQuestions: [
      "How do I create a new Git branch?",
      "How do I switch between branches in Git?",
      "How do I delete a Git branch?",
      "How do I rename a branch in Git?"
    ],
    type: "workflow",
    answer: {
      summary: "Branches allow you to develop features and fixes in isolation without affecting the stable main codebase.",
      steps: [
        {
          title: "Create and switch to a new branch (Modern)",
          command: "git switch -c feature/new-login",
          explanation: "Creates a new branch and immediately switches your workspace to it."
        },
        {
          title: "List all local and remote branches",
          command: "git branch -a",
          explanation: "Shows active branch marked with an asterisk (*)."
        },
        {
          title: "Switch back to main branch",
          command: "git switch main",
          explanation: "Checks out the main branch."
        },
        {
          title: "Delete a local branch",
          command: "git branch -d feature/new-login",
          explanation: "Deletes a safely merged local branch (use -D to force delete unmerged branch)."
        },
        {
          title: "Rename current branch",
          command: "git branch -m new-branch-name",
          explanation: "Renames the current active branch locally."
        }
      ],
      notes: [
        "`git switch` is the modern, cleaner alternative to `git checkout` for branch navigation."
      ],
      relatedTopics: ["git-merge", "git-checkout", "git-rebase"]
    }
  },
  {
    id: "git-undo-commit",
    category: "Git",
    title: "Undo your last Git commit",
    keywords: [
      "undo commit", "git reset", "undo last commit", "cancel commit", "rollback commit",
      "git reset --soft", "git reset HEAD~1", "uncommit"
    ],
    exampleQuestions: [
      "How do I undo my last Git commit?",
      "How can I uncommit without losing my code?",
      "How do I revert my last local commit?"
    ],
    type: "workflow",
    answer: {
      summary: "Use `git reset --soft HEAD~1` to undo the commit while preserving your changes in the staging area.",
      steps: [
        {
          title: "Undo commit and keep code staged (Recommended)",
          command: "git reset --soft HEAD~1",
          explanation: "Moves HEAD back by 1 commit. Your modified files stay staged so you can fix them and recommit."
        },
        {
          title: "Undo commit and keep code unstaged",
          command: "git reset HEAD~1",
          explanation: "Moves HEAD back by 1 commit. Your code remains intact in the working directory as unstaged changes."
        },
        {
          title: "Permanently discard commit and all changes (Destructive)",
          command: "git reset --hard HEAD~1",
          explanation: "Completely obliterates the last commit and all uncommitted working tree changes."
        }
      ],
      notes: [
        "Never use `git reset --hard` unless you are 100% certain you do not need the code."
      ],
      relatedTopics: ["git-revert", "git-stash", "git-status"]
    }
  },
  {
    id: "git-rebase",
    category: "Git",
    title: "Git Rebase vs Git Merge",
    keywords: [
      "git rebase", "rebase", "rebase vs merge", "what does git rebase do",
      "interactive rebase", "rebase main", "squash commits"
    ],
    exampleQuestions: [
      "What does git rebase do?",
      "What is the difference between git merge and git rebase?",
      "When should I use git rebase?"
    ],
    type: "concept",
    answer: {
      summary: "Rebasing takes commits from your branch and replays them on top of another base branch, creating a clean linear history.",
      command: "git checkout feature-branch\ngit rebase main",
      language: "bash",
      explanation: "Instead of creating a merge commit, Git rewrites the commit history by placing your feature commits on top of the latest main commits.",
      table: {
        headers: ["Feature", "Git Merge", "Git Rebase"],
        rows: [
          ["History", "Preserves exact chronological history with merge nodes", "Rewrites history into a clean linear line"],
          ["Traceability", "Non-destructive; shows exact original commit dates", "Modifies commit hashes and replays commits"],
          ["Best For", "Public/shared branches & pull request integration", "Local feature branches before opening a PR"]
        ]
      },
      notes: [
        "Golden Rule of Rebasing: Never rebase commits that have already been pushed to a public/shared branch!"
      ],
      relatedTopics: ["git-merge", "git-cherry-pick", "git-log"]
    }
  },
  {
    id: "git-merge-conflicts",
    category: "Git",
    title: "Resolve Git merge conflicts",
    keywords: [
      "merge conflict", "resolve conflicts", "git conflict", "fix merge conflict",
      "git merge abort", "conflict resolution", "both modified"
    ],
    exampleQuestions: [
      "How do I resolve Git merge conflicts?",
      "What do I do when Git has conflicts?",
      "How do I abort a broken merge?"
    ],
    type: "troubleshooting",
    answer: {
      summary: "Merge conflicts occur when conflicting changes are made to the same lines of a file across different branches.",
      symptoms: [
        "Git prints: 'CONFLICT (content): Merge conflict in <filename>'",
        "File contains conflict markers (<<<<<<< HEAD, =======, >>>>>>> branch)"
      ],
      likelyCauses: [
        "Two developers modified the same line in different commits",
        "One branch deleted a file while another modified it"
      ],
      fixes: [
        {
          title: "1. Locate conflicted files",
          command: "git status",
          explanation: "Look for files labeled 'both modified'."
        },
        {
          title: "2. Edit conflict markers manually or use VS Code merge editor",
          command: "# Open the file and choose Current vs Incoming changes",
          explanation: "Remove <<<<<<<, =======, and >>>>>>> markers after selecting the desired code."
        },
        {
          title: "3. Stage resolved files and finish merge",
          command: "git add .\ngit commit -m \"Resolve merge conflicts\"",
          explanation: "Stages the resolved files and creates the merge resolution commit."
        },
        {
          title: "Emergency escape: Abort merge",
          command: "git merge --abort",
          explanation: "Cancels the merge attempt and returns your branch to the pre-merge state."
        }
      ],
      notes: [
        "If you are rebasing instead of merging, use `git rebase --continue` after staging or `git rebase --abort`."
      ],
      relatedTopics: ["git-merge", "git-rebase", "git-status"]
    }
  },
  {
    id: "git-stash",
    category: "Git",
    title: "Temporarily stash and restore uncommitted changes",
    keywords: [
      "git stash", "stash changes", "save work temporary", "stash pop", "stash apply", "git stash list"
    ],
    exampleQuestions: [
      "How do I temporarily save my uncommitted work in Git?",
      "How does git stash work?",
      "How do I restore stashed changes?"
    ],
    type: "workflow",
    answer: {
      summary: "Git stash saves your local modifications to a dirty working directory onto a stack of unfinished changes.",
      steps: [
        {
          title: "Save changes to stash with a label",
          command: "git stash push -m \"WIP: authentication refactor\"",
          explanation: "Stashes modified tracked files and reverts working directory to clean HEAD."
        },
        {
          title: "List all stored stashes",
          command: "git stash list",
          explanation: "Displays stored stash entries such as stash@{0}, stash@{1}."
        },
        {
          title: "Apply and pop the latest stash",
          command: "git stash pop",
          explanation: "Re-applies the stashed changes to your working branch and removes it from stash stack."
        }
      ],
      notes: [
        "To include untracked new files in your stash, add the `-u` flag: `git stash -u`."
      ],
      relatedTopics: ["git-status", "git-reset", "git-branch"]
    }
  },
  {
    id: "git-log-diff",
    category: "Git",
    title: "Inspect commit history and compare branches",
    keywords: [
      "git log", "git diff", "view commit history", "compare branches",
      "git log oneline", "git log graph", "see changes"
    ],
    exampleQuestions: [
      "How do I view Git commit history cleanly?",
      "How do I compare differences between two branches?",
      "How do I see what changed in my last commit?"
    ],
    type: "command",
    answer: {
      summary: "Use `git log` to inspect past commits with pretty graph formatting and `git diff` to view exact line changes.",
      command: "git log --oneline --graph --decorate --all",
      language: "bash",
      explanation: "Renders an ASCII graph showing branches, tags, and commits in compact one-line format.",
      notes: [
        "Compare two branches: `git diff main..feature-branch`",
        "Inspect changes in working directory: `git diff`",
        "Inspect staged changes: `git diff --staged`"
      ],
      relatedTopics: ["git-status", "git-cherry-pick", "git-show"]
    }
  },
  {
    id: "git-cherry-pick",
    category: "Git",
    title: "Cherry-pick a specific commit into current branch",
    keywords: [
      "git cherry-pick", "cherry pick", "copy commit", "apply specific commit", "cherrypick"
    ],
    exampleQuestions: [
      "How do I copy a single commit from another branch in Git?",
      "How does git cherry-pick work?",
      "What is git cherry-pick?"
    ],
    type: "command",
    answer: {
      summary: "Applies the changes introduced by one or more existing commits to your current active branch.",
      command: "git cherry-pick <commit-hash>",
      language: "bash",
      explanation: "Fetches the diff of the specified commit hash and applies it onto the current branch as a brand-new commit.",
      notes: [
        "Find the commit hash using `git log --oneline` on the source branch.",
        "If conflicts occur during cherry-picking, resolve them and run `git cherry-pick --continue`."
      ],
      relatedTopics: ["git-log", "git-merge", "git-rebase"]
    }
  }
];
