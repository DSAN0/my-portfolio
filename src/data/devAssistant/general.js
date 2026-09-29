export const generalKnowledge = [
  {
    id: "arch-sql-vs-nosql",
    category: "Architecture",
    title: "SQL vs NoSQL Database Architecture Comparison",
    keywords: [
      "sql vs nosql", "relational vs non-relational", "mongodb vs postgresql", "database architecture", "acid vs base"
    ],
    exampleQuestions: [
      "What is the difference between SQL and NoSQL databases?",
      "When should I use PostgreSQL vs MongoDB?",
      "What does ACID compliance mean?"
    ],
    type: "comparison",
    answer: {
      summary: "Relational (SQL) databases offer rigid schemas and strict ACID consistency, while NoSQL databases prioritize horizontal scale and flexible document structures.",
      table: {
        headers: ["Characteristic", "Relational SQL (PostgreSQL, MySQL)", "Document NoSQL (MongoDB)"],
        rows: [
          ["Schema", "Strict predefined table schemas with typed columns", "Dynamic schema-less JSON/BSON documents"],
          ["Relationships", "Optimized complex multi-table JOINs and foreign keys", "Embedded documents or manual reference lookups"],
          ["Scaling", "Vertical scaling (faster CPU/RAM) + read replicas", "Horizontal scaling (sharding across clusters)"],
          ["Transactions", "Strict ACID compliance by default", "Tunable consistency (BASE)"],
          ["Best For", "Financial systems, e-commerce, complex relational data", "Rapid prototyping, real-time analytics, event logs"]
        ]
      },
      notes: [
        "Modern PostgreSQL has first-class `JSONB` support, allowing you to have the best of both SQL and NoSQL in a single database."
      ],
      relatedTopics: ["postgresql-basics", "sql-queries-joins"]
    }
  },
  {
    id: "arch-monolith-vs-microservices",
    category: "Architecture",
    title: "Monolithic vs Microservices Architecture",
    keywords: [
      "monolith vs microservices", "microservices architecture", "system design", "distributed systems"
    ],
    exampleQuestions: [
      "What is the difference between Monolith and Microservices?",
      "When should a project transition to microservices?",
      "What are the pros and cons of microservices?"
    ],
    type: "comparison",
    answer: {
      summary: "A monolith bundles all functionality into a single deployable unit, whereas microservices split domain features into independently deployable services communicating over APIs.",
      table: {
        headers: ["Criteria", "Modular Monolith", "Microservices Architecture"],
        rows: [
          ["Deployment", "Single unit; simple CI/CD pipeline", "Multiple independent deployments (requires Kubernetes / mesh)"],
          ["Debugging", "Single stack trace; centralized in-memory logging", "Distributed tracing required (OpenTelemetry / Jaeger)"],
          ["Team Scaling", "Can create merge bottlenecks across huge teams", "Enables autonomous teams to own individual services"],
          ["Operational Cost", "Low infrastructure overhead", "High operational complexity and network latency"]
        ]
      },
      notes: [
        "Industry Best Practice: Start with a well-structured modular monolith and extract services only when scaling boundaries require it."
      ],
      relatedTopics: ["rest-api-basics", "docker-basics"]
    }
  }
];
