export const deploymentKnowledge = [
  {
    id: "deployment-frontend",
    category: "Deployment",
    title: "Deploy React Frontend (Vercel, Netlify, GitHub Pages)",
    keywords: [
      "deploy react", "vercel deploy", "frontend deployment", "build react production", "netlify deploy", "deploy vite"
    ],
    exampleQuestions: [
      "How do I deploy a React Vite frontend?",
      "How do I deploy a project to Vercel or Netlify?",
      "How do I configure Single Page Application (SPA) routing redirects in production?"
    ],
    type: "workflow",
    answer: {
      summary: "Build static production assets (`npm run build`) and deploy the resulting `/dist` folder to modern Edge CDN hosting providers.",
      steps: [
        {
          title: "Verify production build locally",
          command: "npm run build\nnpm run preview",
          explanation: "Builds and tests optimized production assets locally."
        },
        {
          title: "Create SPA rewrite configuration (for React Router / Direct URLs)",
          command: `// vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}`,
          explanation: "Ensures refreshing nested routes (e.g. /projects/1) redirects to index.html instead of returning a 404."
        },
        {
          title: "Deploy via Vercel CLI or Git Integration",
          command: "npm install -g vercel\nvercel",
          explanation: "Connects repository to Vercel for automated CI/CD previews on every push."
        }
      ],
      notes: [
        "Add all client environment variables (e.g. `VITE_API_URL`) in the provider dashboard under Environment Variables."
      ],
      relatedTopics: ["deployment-backend", "react-start-vite", "vite-basics"]
    }
  },
  {
    id: "deployment-backend",
    category: "Deployment",
    title: "Deploy Django / Python Backend (Render, Railway, Gunicorn)",
    keywords: [
      "deploy django", "render deploy", "gunicorn", "backend deployment", "whitenoise django", "production settings django"
    ],
    exampleQuestions: [
      "How do I deploy a Django backend?",
      "How do I configure Gunicorn and WhiteNoise for production Django?",
      "What settings need to change in production for Django?"
    ],
    type: "workflow",
    answer: {
      summary: "Prepare Django for production by turning off DEBUG, configuring WhiteNoise for static files, using Gunicorn WSGI, and connecting a managed PostgreSQL database.",
      steps: [
        {
          title: "Install production WSGI server & WhiteNoise",
          command: "pip install gunicorn whitenoise dj-database-url psycopg2-binary",
          explanation: "Installs production web server and static file handler."
        },
        {
          title: "Configure settings.py for production",
          command: `# settings.py
import os
import dj_database_url

DEBUG = os.environ.get('DEBUG', 'False') == 'True'
ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', '*').split(',')

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware', # Immediately below SecurityMiddleware
    ...
]

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

DATABASES = {
    'default': dj_database_url.config(
        default=os.environ.get('DATABASE_URL'),
        conn_max_age=600
    )
}`,
          explanation: "Enables secure environment configuration and static file compression."
        },
        {
          title: "Define build and release commands",
          command: "# Build Command:\npip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate\n\n# Start Command:\ngunicorn config.wsgi:application --bind 0.0.0.0:$PORT",
          explanation: "Collects static assets, runs database migrations, and binds Gunicorn to the cloud port."
        }
      ],
      notes: [
        "NEVER run with `DEBUG = True` in production as it exposes sensitive environment variables and stack traces."
      ],
      relatedTopics: ["django-create-project", "django-postgres", "troubleshoot-cors"]
    }
  }
];
