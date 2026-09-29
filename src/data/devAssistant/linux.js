export const linuxKnowledge = [
  {
    id: "linux-cli",
    category: "Linux / Terminal",
    title: "Essential Linux Terminal & Bash Commands",
    keywords: [
      "linux", "bash", "terminal commands", "grep", "find", "chmod", "curl", "kill process", "ps", "pipes", "pwd", "mkdir"
    ],
    exampleQuestions: [
      "What are the most essential Linux CLI commands?",
      "How do I search for text inside files using grep?",
      "How do I kill a process running on a specific port in Linux?"
    ],
    type: "workflow",
    answer: {
      summary: "Mastering the Linux shell is essential for server administration, CI/CD automation, and fast local development.",
      table: {
        headers: ["Command", "Description", "Example Syntax"],
        rows: [
          ["grep", "Search text patterns inside files", "grep -rn \"API_KEY\" ./src"],
          ["find", "Find files matching criteria", "find . -name \"*.py\" -type f"],
          ["chmod", "Modify file permissions", "chmod 755 deploy.sh (rwxr-xr-x)"],
          ["curl", "Transfer data over HTTP", "curl -I https://example.com"],
          ["lsof / netstat", "Find process locking a port", "lsof -i :8000 | xargs kill -9"]
        ]
      },
      steps: [
        {
          title: "Inspect directory structure & disk usage",
          command: "ls -la\ndf -h\ndu -sh * | sort -h",
          explanation: "Lists hidden files, disk space, and largest folders."
        },
        {
          title: "Stream and filter live system logs",
          command: "tail -f /var/log/nginx/access.log | grep \"404\"",
          explanation: "Pipes live output from tail to grep to filter 404 status codes."
        },
        {
          title: "Check running processes and kill by ID",
          command: "ps aux | grep node\nkill -9 <PID>",
          explanation: "Inspects running Node processes and forces termination."
        }
      ],
      notes: [
        "Use `man <command>` (e.g. `man grep`) or `<command> --help` to read complete flag manuals."
      ],
      relatedTopics: ["docker-basics", "deployment-backend"]
    }
  }
];
