export const djangoKnowledge = [
  {
    id: "django-create-project",
    category: "Django",
    title: "Create and initialize a new Django project",
    keywords: [
      "create django project", "django-admin startproject", "start django", "django setup",
      "install django", "new django", "startproject"
    ],
    exampleQuestions: [
      "How do I create a Django project?",
      "What are the commands to start a new Django app?",
      "How do I set up Django from scratch?"
    ],
    type: "workflow",
    answer: {
      summary: "Create a Python virtual environment, install Django, and scaffold your project with `django-admin`.",
      steps: [
        {
          title: "Create and activate virtual environment",
          command: "python -m venv venv\nsource venv/bin/activate  # On Windows: .\\venv\\Scripts\\activate",
          explanation: "Isolates Django dependencies from your global Python environment."
        },
        {
          title: "Install Django",
          command: "pip install django",
          explanation: "Downloads and installs the latest stable Django package."
        },
        {
          title: "Create the Django project structure",
          command: "django-admin startproject config .",
          explanation: "Creates project settings in 'config/' directory with manage.py in current folder."
        },
        {
          title: "Create your first Django app",
          command: "python manage.py startapp core",
          explanation: "Generates app directory with models.py, views.py, and admin.py."
        },
        {
          title: "Apply initial database migrations & run dev server",
          command: "python manage.py migrate\npython manage.py runserver",
          explanation: "Sets up SQLite database tables and starts server at http://127.0.0.1:8000."
        }
      ],
      notes: [
        "Don't forget to register your new app in `INSTALLED_APPS` inside `settings.py`."
      ],
      relatedTopics: ["django-postgres", "django-migrations", "drf-setup", "python-venv"]
    }
  },
  {
    id: "django-postgres",
    category: "Django",
    title: "Connect Django to PostgreSQL database",
    keywords: [
      "django postgres", "connect django postgresql", "django psycopg2", "django database settings",
      "postgres django connection", "postgresql django configuration"
    ],
    exampleQuestions: [
      "How do I connect Django to PostgreSQL?",
      "What is the DATABASES configuration for PostgreSQL in Django?",
      "What database driver does Django use for PostgreSQL?"
    ],
    type: "workflow",
    answer: {
      summary: "Install the `psycopg2-binary` (or modern `psycopg`) adapter and configure the `DATABASES` dictionary in `settings.py`.",
      steps: [
        {
          title: "Install PostgreSQL adapter for Python",
          command: "pip install psycopg2-binary dj-database-url python-dotenv",
          explanation: "Installs binary driver and database URL parser helper."
        },
        {
          title: "Configure DATABASES in settings.py",
          command: `# settings.py
import os
from pathlib import Path

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('DB_NAME', 'my_portfolio_db'),
        'USER': os.environ.get('DB_USER', 'postgres'),
        'PASSWORD': os.environ.get('DB_PASSWORD', 'secret123'),
        'HOST': os.environ.get('DB_HOST', 'localhost'),
        'PORT': os.environ.get('DB_PORT', '5432'),
    }
}`,
          explanation: "Configures Django's ORM to route database queries to your PostgreSQL instance."
        },
        {
          title: "Run migrations against PostgreSQL",
          command: "python manage.py migrate",
          explanation: "Executes DDL to build all Django core and app tables in Postgres."
        }
      ],
      notes: [
        "Ensure your PostgreSQL server is active and the database specified in 'NAME' has been created with `CREATE DATABASE ...`"
      ],
      relatedTopics: ["postgresql-basics", "django-migrations", "environment-variables"]
    }
  },
  {
    id: "django-migrations",
    category: "Django",
    title: "Django Database Migrations Workflow",
    keywords: [
      "django migrations", "makemigrations", "migrate", "django db migrate", "schema migration", "migration commands"
    ],
    exampleQuestions: [
      "How do Django migrations work?",
      "What is the difference between makemigrations and migrate?",
      "How do I rollback a migration in Django?"
    ],
    type: "workflow",
    answer: {
      summary: "`makemigrations` creates new migration files based on changes in `models.py`, while `migrate` applies those changes to the live database.",
      steps: [
        {
          title: "Generate migration scripts after model edits",
          command: "python manage.py makemigrations",
          explanation: "Inspects models and writes new migration file in app/migrations/."
        },
        {
          title: "Apply migrations to database",
          command: "python manage.py migrate",
          explanation: "Executes SQL statements to update database schema."
        },
        {
          title: "Check status of applied migrations",
          command: "python manage.py showmigrations",
          explanation: "Lists all migrations with [X] for applied and [ ] for unapplied."
        },
        {
          title: "Rollback to a previous migration",
          command: "python manage.py migrate app_name 0002",
          explanation: "Rolls back schema state to migration 0002 (or 0000 to undo all migrations in that app)."
        }
      ],
      notes: [
        "Never delete migration files manually in a production environment."
      ],
      relatedTopics: ["django-create-project", "troubleshoot-django-migrations"]
    }
  },
  {
    id: "django-superuser",
    category: "Django",
    title: "Create superuser and access Django Admin",
    keywords: [
      "createsuperuser", "django admin", "django superuser", "create admin user", "changepassword"
    ],
    exampleQuestions: [
      "How do I create a superuser in Django?",
      "How do I access Django admin portal?",
      "How do I change a user password in Django?"
    ],
    type: "command",
    answer: {
      summary: "Creates an admin account with full permissions to manage models and data via `/admin`.",
      command: "python manage.py createsuperuser",
      language: "bash",
      explanation: "Prompts for username, email, and password in terminal.",
      notes: [
        "To reset password from CLI: `python manage.py changepassword <username>`",
        "Register your models in `admin.py` with `admin.site.register(MyModel)` to make them editable in the portal."
      ],
      relatedTopics: ["django-create-project", "drf-setup"]
    }
  }
];
