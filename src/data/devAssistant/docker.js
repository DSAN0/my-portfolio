export const dockerKnowledge = [
  {
    id: "docker-basics",
    category: "Docker",
    title: "Build and Run Docker Containers with Dockerfile",
    keywords: [
      "docker", "docker build", "docker run", "dockerfile", "build docker image", "container", "docker ps", "docker images"
    ],
    exampleQuestions: [
      "How do I build a Docker image?",
      "How do I run a Docker container with port mapping and environment variables?",
      "What is the basic syntax for a Dockerfile?"
    ],
    type: "workflow",
    answer: {
      summary: "Docker packages applications and their dependencies into lightweight, standalone container images that execute consistently across all environments.",
      steps: [
        {
          title: "Write a production Dockerfile",
          command: `# Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`,
          explanation: "Uses multi-stage build to produce a minimal, fast container."
        },
        {
          title: "Build the Docker image",
          command: "docker build -t my-app:v1 .",
          explanation: "Builds image tagged as `my-app:v1` using Dockerfile in current folder."
        },
        {
          title: "Run container in background with port mapping",
          command: "docker run -d -p 8080:80 --name running-app --restart unless-stopped my-app:v1",
          explanation: "Maps host port 8080 to container port 80 in detached mode (-d)."
        },
        {
          title: "Inspect running containers and logs",
          command: "docker ps\ndocker logs -f running-app",
          explanation: "Lists active containers and streams real-time console output."
        }
      ],
      notes: [
        "Create a `.dockerignore` file containing `node_modules` and `.git` to speed up builds and reduce image sizes."
      ],
      relatedTopics: ["docker-compose", "troubleshoot-docker-exit", "linux-cli"]
    }
  },
  {
    id: "docker-compose",
    category: "Docker",
    title: "Multi-container orchestration with Docker Compose",
    keywords: [
      "docker compose", "docker-compose.yml", "docker compose up", "docker compose down", "compose postgres django", "orchestration"
    ],
    exampleQuestions: [
      "How do I run multiple services with Docker Compose?",
      "How do I connect a Django app and PostgreSQL database with Docker Compose?",
      "How do I stop and rebuild Docker Compose services?"
    ],
    type: "workflow",
    answer: {
      summary: "Docker Compose allows defining and running multi-container Docker applications with a single YAML configuration file.",
      command: `# docker-compose.yml
services:
  web:
    build: .
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/app
    ports:
      - "8000:8000"
    environment:
      - DB_HOST=db
      - DB_NAME=portfolio_db
      - DB_USER=postgres
      - DB_PASSWORD=postgres
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=portfolio_db
      - POSTGRES_PASSWORD=postgres
    ports:
      - "5432:5432"

volumes:
  postgres_data:`,
      language: "yaml",
      explanation: "Services automatically share an internal DNS network where the hostname matches the service name (e.g. `db`).",
      steps: [
        {
          title: "Start all services in background",
          command: "docker compose up -d --build",
          explanation: "Builds images if necessary and starts all defined containers."
        },
        {
          title: "Execute command inside running service container",
          command: "docker compose exec web python manage.py migrate",
          explanation: "Runs Django migration directly inside the web container."
        },
        {
          title: "Stop services and preserve data volumes",
          command: "docker compose down",
          explanation: "Stops containers gracefully (data persists in postgres_data volume)."
        }
      ],
      notes: [
        "Use `docker compose down -v` if you wish to wipe volume data."
      ],
      relatedTopics: ["docker-basics", "django-postgres", "postgresql-basics"]
    }
  }
];
