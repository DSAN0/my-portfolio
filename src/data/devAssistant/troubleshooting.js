export const troubleshootingKnowledge = [
  {
    id: "troubleshoot-django-migrations",
    category: "Troubleshooting",
    title: "Fix Django Migration Inconsistencies & Conflicts",
    keywords: [
      "django migration error", "migration conflict", "inconsistent migration history",
      "django migrate error", "django fix migrations", "django table already exists"
    ],
    exampleQuestions: [
      "My Django migration isn't working. What should I check?",
      "How do I fix 'InconsistentMigrationHistory' in Django?",
      "How do I fix 'django.db.utils.ProgrammingError: relation already exists'?"
    ],
    type: "troubleshooting",
    answer: {
      summary: "Django migration issues usually occur when model changes conflict across Git branches or the database schema drifts out of sync with migration files.",
      symptoms: [
        "InconsistentMigrationHistory: Migration B is applied before its dependency Migration A",
        "django.db.utils.ProgrammingError: relation 'app_model' already exists",
        "CommandError: Conflicting migrations detected; multiple leaf nodes in the migration graph"
      ],
      likelyCauses: [
        "Multiple team members generated migrations on different branches with the same number prefix (e.g. 0004_...)",
        "Tables were created manually in the database without recording the migration in django_migrations table",
        "Migration files were deleted from disk after having been applied to the live database"
      ],
      fixes: [
        {
          title: "1. Auto-resolve branching migration conflict",
          command: "python manage.py makemigrations --merge",
          explanation: "Django creates a merge migration linking the two branched leaf nodes."
        },
        {
          title: "2. Inspect which migrations are applied vs missing",
          command: "python manage.py showmigrations",
          explanation: "Look for unchecked `[ ]` migrations or missing dependencies."
        },
        {
          title: "3. Fake apply when the database table already exists",
          command: "python manage.py migrate --fake-initial\n# Or for a specific migration:\npython manage.py migrate app_name 0004_auto_fix --fake",
          explanation: "Marks the migration as applied in django_migrations without attempting to re-execute duplicate SQL CREATE TABLE commands."
        }
      ],
      notes: [
        "In development with disposable data, you can reset SQLite by removing db.sqlite3 and recreating migrations with `python manage.py makemigrations && python manage.py migrate`."
      ],
      relatedTopics: ["django-migrations", "django-create-project", "django-postgres"]
    }
  },
  {
    id: "troubleshoot-cors",
    category: "Troubleshooting",
    title: "Fix CORS (Cross-Origin Resource Sharing) Errors in React & Django",
    keywords: [
      "cors error", "access-control-allow-origin", "cors policy", "cors react django", "blocked by cors", "cors preflight"
    ],
    exampleQuestions: [
      "Why is Django giving me a CORS error in React?",
      "How do I fix 'Blocked by CORS policy: No Access-Control-Allow-Origin header'?",
      "How do I configure django-cors-headers?"
    ],
    type: "troubleshooting",
    answer: {
      summary: "CORS errors occur when a frontend app (e.g. at http://localhost:5173) makes an HTTP request to a backend API (e.g. http://localhost:8000) that has not explicitly authorized that origin domain.",
      symptoms: [
        "Console error: 'Access to fetch at ... from origin ... has been blocked by CORS policy'",
        "Preflight OPTIONS request returns 403 or 405 error",
        "Responses in browser lack 'Access-Control-Allow-Origin' headers"
      ],
      likelyCauses: [
        "Backend lacks `django-cors-headers` middleware",
        "Frontend origin URL is missing from `CORS_ALLOWED_ORIGINS`",
        "Custom auth headers (e.g. Authorization) not permitted in CORS preflight"
      ],
      fixes: [
        {
          title: "1. Install and register django-cors-headers in Django",
          command: "pip install django-cors-headers",
          explanation: "Installs the standard Django CORS package."
        },
        {
          title: "2. Add middleware & allowed origins in settings.py",
          command: `# settings.py
INSTALLED_APPS = [
    ...
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware', # MUST be placed as high as possible!
    'django.middleware.common.CommonMiddleware',
    ...
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://your-frontend.vercel.app",
]

CORS_ALLOW_CREDENTIALS = True`,
          explanation: "Ensures the server sends proper CORS response headers to authorized frontend origins."
        }
      ],
      notes: [
        "`CorsMiddleware` MUST precede any middleware that generates responses, such as `CommonMiddleware`."
      ],
      relatedTopics: ["rest-api-basics", "drf-setup", "deployment-backend"]
    }
  },
  {
    id: "troubleshoot-git-rejected",
    category: "Troubleshooting",
    title: "Fix Git Push Rejected (non-fast-forward / fetch first)",
    keywords: [
      "git push rejected", "failed to push some refs", "fetch first", "non-fast-forward", "git push error", "git pull rebase"
    ],
    exampleQuestions: [
      "Git says rejected when pushing. How do I fix it?",
      "How do I fix '[rejected - non-fast-forward] error: failed to push some refs'?",
      "How do I pull and rebase before pushing?"
    ],
    type: "troubleshooting",
    answer: {
      summary: "Git rejects your push when the remote repository has commits that you do not have in your local branch.",
      symptoms: [
        "error: failed to push some refs to 'https://github.com/...'",
        "hint: Updates were rejected because the remote contains work that you do not have locally"
      ],
      likelyCauses: [
        "Another developer pushed to the same branch",
        "You created a README or license file directly on the GitHub website",
        "You amended a previously pushed commit locally"
      ],
      fixes: [
        {
          title: "1. Fetch and rebase remote commits on top of your local work (Recommended)",
          command: "git pull --rebase origin main",
          explanation: "Fetches remote changes and replays your local commits on top cleanly."
        },
        {
          title: "2. Resolve any conflicts if they occur, then push",
          command: "git push origin main",
          explanation: "Now your branch includes both remote commits and your new commits in a straight line."
        },
        {
          title: "3. If you intentionally amended your private branch (Use with care)",
          command: "git push --force-with-lease origin branch-name",
          explanation: "Safely overwrites remote branch only if no one else has pushed since your last fetch."
        }
      ],
      notes: [
        "Never use plain `git push -f` on shared branches like `main`."
      ],
      relatedTopics: ["git-push", "git-rebase", "git-merge-conflicts"]
    }
  },
  {
    id: "troubleshoot-docker-exit",
    category: "Troubleshooting",
    title: "Fix Docker Container Keeps Stopping / Exited with code 0 or 1",
    keywords: [
      "docker container stopping", "docker keeps stopping", "container exited", "docker exit code 0", "docker exit code 1", "docker crash"
    ],
    exampleQuestions: [
      "Why does my Docker container keep stopping immediately?",
      "How do I debug a container that exits with code 0 or 1?",
      "Why won't my Docker container stay running in the background?"
    ],
    type: "troubleshooting",
    answer: {
      summary: "A Docker container runs only as long as its foreground main process (PID 1) remains active. If the process terminates or forks into background, Docker exits.",
      symptoms: [
        "Container appears in `docker ps -a` with status 'Exited (0)' or 'Exited (1)' immediately after `docker run`",
        "No errors thrown in terminal during initial launch"
      ],
      likelyCauses: [
        "The startup command finished immediately (e.g. `CMD [\"echo\", \"done\"]` or web server daemonized)",
        "Missing required environment variables causing application crash on startup",
        "Port conflict on the host machine"
      ],
      fixes: [
        {
          title: "1. Inspect container crash logs",
          command: "docker logs <container-id-or-name>",
          explanation: "Prints stdout and stderr leading up to the container exit."
        },
        {
          title: "2. Run interactively with a shell to debug container file system",
          command: "docker run -it --entrypoint /bin/sh my-image-name",
          explanation: "Overrides entrypoint and keeps an interactive terminal open inside the container."
        },
        {
          title: "3. Ensure web servers stay in foreground (e.g., Nginx / Gunicorn)",
          command: `# Dockerfile CMD example:
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "config.wsgi:application"]`,
          explanation: "Keeps PID 1 alive and listening."
        }
      ],
      notes: [
        "For containers running background daemons, ensure they are not launched with `-d` flags inside the CMD instruction."
      ],
      relatedTopics: ["docker-basics", "docker-compose"]
    }
  },
  {
    id: "troubleshoot-postgres-connection",
    category: "Troubleshooting",
    title: "Fix PostgreSQL Connection Refused (Is the server running on host localhost?)",
    keywords: [
      "postgres connection refused", "could not connect to server", "postgresql port 5432", "postgres server stopped", "psql error"
    ],
    exampleQuestions: [
      "How do I fix 'PostgreSQL connection refused' error?",
      "Why is PostgreSQL not connecting on port 5432?",
      "How do I start the PostgreSQL service on Windows/Linux/macOS?"
    ],
    type: "troubleshooting",
    answer: {
      summary: "This error means the PostgreSQL database daemon is either not running, listening on a different port/IP, or blocked by local firewalls.",
      symptoms: [
        "psql: error: could not connect to server: Connection refused",
        "django.db.utils.OperationalError: could not connect to server: Connection refused"
      ],
      likelyCauses: [
        "PostgreSQL service is stopped",
        "pg_hba.conf is blocking local TCP connections",
        "PostgreSQL is running on a different port than default 5432"
      ],
      fixes: [
        {
          title: "1. Start PostgreSQL service",
          command: "# On Linux (systemd):\nsudo systemctl start postgresql\n\n# On macOS (Homebrew):\nbrew services start postgresql@16\n\n# On Windows (PowerShell as Admin):\nStart-Service postgresql-x64-16",
          explanation: "Spawns the background database server daemon."
        },
        {
          title: "2. Verify port 5432 is actively listening",
          command: "# Linux/Mac:\nnc -zv localhost 5432\n\n# Windows PowerShell:\nTest-NetConnection -ComputerName localhost -Port 5432",
          explanation: "Confirms socket availability before connecting."
        }
      ],
      notes: [
        "If using Docker, ensure your web service connects to `db:5432` rather than `localhost:5432`."
      ],
      relatedTopics: ["postgresql-basics", "django-postgres", "docker-compose"]
    }
  },
  {
    id: "troubleshoot-npm-install",
    category: "Troubleshooting",
    title: "Fix npm install failing (ERESOLVE unable to resolve dependency tree)",
    keywords: [
      "npm install failing", "npm error", "eresolve", "unable to resolve dependency tree", "peer dependencies", "npm audit fix"
    ],
    exampleQuestions: [
      "Why is npm install failing with ERESOLVE?",
      "How do I fix peer dependency conflicts in npm?",
      "How do I resolve npm install errors?"
    ],
    type: "troubleshooting",
    answer: {
      summary: "Modern npm strictly enforces peer dependency version constraints. When different packages require incompatible peer versions of a shared library, npm aborts installation.",
      symptoms: [
        "npm ERR! code ERESOLVE",
        "npm ERR! ERESOLVE unable to resolve dependency tree",
        "npm ERR! While resolving: react-package@1.0.0"
      ],
      likelyCauses: [
        "A 3rd-party library hasn't updated its peer dependency range for React 19 / Node 22",
        "Conflicting sub-dependencies in `package-lock.json`"
      ],
      fixes: [
        {
          title: "1. Install with legacy peer dependencies (Safest workaround)",
          command: "npm install --legacy-peer-deps",
          explanation: "Bypasses strict peer dependency tree validation and installs the package."
        },
        {
          title: "2. Purge cache and lockfile for a clean rebuild",
          command: "rm -rf node_modules package-lock.json\nnpm cache clean --force\nnpm install",
          explanation: "Regenerates lockfile with compatible resolved versions."
        }
      ],
      notes: [
        "Avoid using `--force` unless `--legacy-peer-deps` fails, as `--force` can install multiple conflicting global binaries."
      ],
      relatedTopics: ["npm-scripts", "vite-basics"]
    }
  },
  {
    id: "troubleshoot-vite-build",
    category: "Troubleshooting",
    title: "Fix Vite Build Failed / Rollup Failed to Resolve Import",
    keywords: [
      "vite build failed", "rollup failed to resolve import", "vite build error", "react build fail", "cannot find module vite"
    ],
    exampleQuestions: [
      "Why is my Vite build failing with Rollup error?",
      "How do I debug 'Failed to resolve import' in Vite?",
      "How do I fix Vite production build errors?"
    ],
    type: "troubleshooting",
    answer: {
      summary: "Vite dev server uses unbundled ES modules, so case-sensitivity or missing exports might work in dev but fail when Rollup bundles for production (`npm run build`).",
      symptoms: [
        "[vite]: Rollup failed to resolve import '../components/Navbar' from 'src/App.jsx'",
        "Error: Expression expected or JSX parsing error during vite build"
      ],
      likelyCauses: [
        "File naming case sensitivity (e.g. `navbar.jsx` on disk vs `Navbar.jsx` in import) — Windows is case-insensitive, but Linux deployment hosts (Vercel) are case-sensitive!",
        "Missing export in the imported component file",
        "Dynamic import of non-existent asset path"
      ],
      fixes: [
        {
          title: "1. Match exact file casing on disk",
          command: "# Check filename case in file explorer:\n# If file is 'navbar.jsx', import as './navbar' not './Navbar'",
          explanation: "Eliminates cross-platform case mismatches between Windows and Linux CI/CD environments."
        },
        {
          title: "2. Run Vite build with verbose stack traces",
          command: "npx vite build --debug",
          explanation: "Pinpoints exact line number and token triggering Rollup build failure."
        }
      ],
      notes: [
        "Always test `npm run build` locally before pushing to production."
      ],
      relatedTopics: ["vite-basics", "deployment-frontend", "react-start-vite"]
    }
  },
  {
    id: "troubleshoot-port-in-use",
    category: "Troubleshooting",
    title: "Fix Port Already In Use (EADDRINUSE / Error: listen EADDRINUSE: address already in use)",
    keywords: [
      "port in use", "eaddrinuse", "kill port", "address already in use", "port 3000 in use", "port 8000 in use", "port 5173"
    ],
    exampleQuestions: [
      "How do I fix 'Error: listen EADDRINUSE: address already in use'?",
      "How do I kill a process running on port 8000 or 3000?",
      "How do I free a port in Windows PowerShell or Linux?"
    ],
    type: "troubleshooting",
    answer: {
      summary: "This error indicates another local application or a background orphaned process is already bound to that TCP port.",
      symptoms: [
        "Error: listen EADDRINUSE: address already in use :::3000",
        "Error: That port is already in use (Django runserver)"
      ],
      likelyCauses: [
        "A previous dev server was closed without terminating its background child process",
        "Another service (e.g. Docker, PostgreSQL, another Node app) is using the same port"
      ],
      fixes: [
        {
          title: "Windows PowerShell: Find and kill process by port",
          command: "# 1. Find the PID using port 8000:\nGet-NetTCPConnection -LocalPort 8000\n\n# 2. Kill the process:\nStop-Process -Id <PID> -Force",
          explanation: "Identifies and terminates the process occupying the port on Windows."
        },
        {
          title: "Linux / macOS: Find and kill process by port with lsof",
          command: "# Kill process on port 8000:\nlsof -ti:8000 | xargs kill -9",
          explanation: "Instantly terminates whatever process is holding port 8000."
        },
        {
          title: "Alternative: Specify a different port",
          command: "# React / Vite:\nnpm run dev -- --port 3001\n\n# Django:\npython manage.py runserver 8001",
          explanation: "Runs your server on an alternate available port."
        }
      ],
      notes: [
        "In Vite, if port 5173 is occupied, it will automatically offer port 5174."
      ],
      relatedTopics: ["linux-cli", "django-create-project", "vite-basics"]
    }
  }
];
