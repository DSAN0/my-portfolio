export const pythonKnowledge = [
  {
    id: "python-venv",
    category: "Python",
    title: "Create and activate Python Virtual Environments",
    keywords: [
      "python venv", "virtualenv", "create virtual environment", "activate venv",
      "python virtual environment", "source venv bin activate", "venv activate"
    ],
    exampleQuestions: [
      "How do I create a Python virtual environment?",
      "How do I activate my virtual environment on Windows or Mac?",
      "Why should I use a virtual environment in Python?"
    ],
    type: "workflow",
    answer: {
      summary: "Virtual environments isolate project packages from global Python installations, preventing dependency conflicts.",
      steps: [
        {
          title: "Create virtual environment folder (venv)",
          command: "python -m venv venv",
          explanation: "Creates an isolated environment containing a Python binary and fresh pip."
        },
        {
          title: "Activate on macOS / Linux",
          command: "source venv/bin/activate",
          explanation: "Sets shell PATH to point to project's virtual environment."
        },
        {
          title: "Activate on Windows (PowerShell / CMD)",
          command: ".\\venv\\Scripts\\Activate.ps1  # PowerShell\n# or\n.\\venv\\Scripts\\activate.bat   # Command Prompt",
          explanation: "Activates venv in Windows terminal (prompt prefix will display (venv))."
        },
        {
          title: "Deactivate virtual environment when finished",
          command: "deactivate",
          explanation: "Restores normal global terminal environment."
        }
      ],
      notes: [
        "If PowerShell gives an execution policy error on Windows: run `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`."
      ],
      relatedTopics: ["python-pip-requirements", "django-create-project", "fastapi-basics"]
    }
  },
  {
    id: "python-pip-requirements",
    category: "Python",
    title: "Manage dependencies with pip and requirements.txt",
    keywords: [
      "pip install", "requirements.txt", "pip freeze", "install requirements", "freeze requirements", "python dependencies"
    ],
    exampleQuestions: [
      "How do I install dependencies from requirements.txt?",
      "How do I save all installed packages to requirements.txt?",
      "How do I upgrade a pip package?"
    ],
    type: "workflow",
    answer: {
      summary: "Use `pip freeze` to record installed package versions and `pip install -r` to restore them in any environment.",
      steps: [
        {
          title: "Install packages listed in requirements.txt",
          command: "pip install -r requirements.txt",
          explanation: "Installs exact version pins for the whole team."
        },
        {
          title: "Save current virtual environment dependencies",
          command: "pip freeze > requirements.txt",
          explanation: "Exports installed packages and version numbers into requirements.txt."
        },
        {
          title: "Install or upgrade a specific package",
          command: "pip install --upgrade requests",
          explanation: "Fetches and updates to the latest release."
        }
      ],
      notes: [
        "Always commit `requirements.txt` to version control and ignore `venv/` in `.gitignore`."
      ],
      relatedTopics: ["python-venv", "deployment-backend"]
    }
  }
];
