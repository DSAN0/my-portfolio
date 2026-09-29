export const postgresqlKnowledge = [
  {
    id: "postgresql-basics",
    category: "PostgreSQL",
    title: "PostgreSQL Database Administration, Users & psql Commands",
    keywords: [
      "postgresql", "postgres", "psql", "create database postgres", "create user postgres", "grant privileges", "postgres commands"
    ],
    exampleQuestions: [
      "How do I create a database and user in PostgreSQL?",
      "How do I connect to PostgreSQL with psql command line?",
      "How do I grant permissions in PostgreSQL?"
    ],
    type: "workflow",
    answer: {
      summary: "PostgreSQL is an enterprise-grade open-source object-relational database system with advanced indexing, JSON support, and transactions.",
      steps: [
        {
          title: "Log into PostgreSQL shell as superuser (postgres)",
          command: "sudo -u postgres psql  # On Linux/macOS\n# Or on Windows:\npsql -U postgres",
          explanation: "Opens the interactive psql terminal."
        },
        {
          title: "Create a dedicated project user and password",
          command: "CREATE USER dev_user WITH PASSWORD 'StrongPassword123!';",
          explanation: "Creates a new database role with login credentials."
        },
        {
          title: "Create project database and set owner",
          command: "CREATE DATABASE portfolio_db OWNER dev_user;",
          explanation: "Creates an isolated database owned by your new user."
        },
        {
          title: "Grant schema privileges",
          command: "GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO dev_user;",
          explanation: "Ensures the user has full read/write permissions."
        },
        {
          title: "Useful psql shortcuts",
          command: "\\l       -- List all databases\n\\c dbname -- Connect to database\n\\dt      -- List all tables\n\\d table -- Describe table schema\n\\q       -- Quit psql",
          explanation: "Essential psql navigation commands."
        }
      ],
      notes: [
        "Default PostgreSQL port is `5432`."
      ],
      relatedTopics: ["sql-queries-joins", "django-postgres", "docker-compose"]
    }
  },
  {
    id: "postgresql-backup-restore",
    category: "PostgreSQL",
    title: "PostgreSQL Backup & Restore with pg_dump",
    keywords: [
      "pg_dump", "postgres backup", "restore postgres", "export database", "import sql postgres", "pg_restore"
    ],
    exampleQuestions: [
      "How do I backup a PostgreSQL database with pg_dump?",
      "How do I restore a .sql dump file into PostgreSQL?",
      "How do I export my production database?"
    ],
    type: "workflow",
    answer: {
      summary: "Use `pg_dump` to create logical SQL or custom archive backups and `psql` / `pg_restore` to restore them.",
      steps: [
        {
          title: "Export database to SQL dump file",
          command: "pg_dump -U postgres -h localhost -d portfolio_db > backup.sql",
          explanation: "Exports table schemas and data into plain-text SQL statements."
        },
        {
          title: "Restore SQL dump into a database",
          command: "psql -U postgres -h localhost -d new_portfolio_db < backup.sql",
          explanation: "Executes the backup SQL commands to recreate tables and insert records."
        },
        {
          title: "Compressed custom format backup (Recommended for large DBs)",
          command: "pg_dump -U postgres -F c -b -v -f backup.dump portfolio_db\n# Restore with:\npg_restore -U postgres -d new_portfolio_db -v backup.dump",
          explanation: "Uses PostgreSQL compressed binary format with multi-threaded restore capabilities."
        }
      ],
      notes: [
        "Ensure the target database exists prior to restoring."
      ],
      relatedTopics: ["postgresql-basics", "deployment-backend"]
    }
  }
];
