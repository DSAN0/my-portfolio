export const sqlKnowledge = [
  {
    id: "sql-queries-joins",
    category: "SQL",
    title: "SQL Queries: SELECT, WHERE, GROUP BY, HAVING & JOINs",
    keywords: [
      "sql", "sql join", "inner join", "left join", "group by", "having", "sql select", "aggregate functions", "sql query"
    ],
    exampleQuestions: [
      "What is the difference between INNER JOIN and LEFT JOIN?",
      "What is the difference between WHERE and HAVING in SQL?",
      "How do I use GROUP BY with COUNT and AVG?"
    ],
    type: "concept",
    answer: {
      summary: "SQL (Structured Query Language) manages relational databases with declarative queries for data manipulation and aggregation.",
      table: {
        headers: ["Join Type", "Result Set", "Handling Unmatched Rows"],
        rows: [
          ["INNER JOIN", "Only rows that have matching values in both tables", "Unmatched rows excluded"],
          ["LEFT JOIN", "All rows from left table + matched rows from right", "Right table columns filled with NULL"],
          ["RIGHT JOIN", "All rows from right table + matched rows from left", "Left table columns filled with NULL"],
          ["FULL OUTER JOIN", "All rows when there is a match in either table", "Non-matching columns filled with NULL"]
        ]
      },
      command: `-- Advanced SQL Query Example:
SELECT 
    u.id,
    u.name,
    COUNT(o.id) AS total_orders,
    COALESCE(SUM(o.amount), 0) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.is_active = TRUE
GROUP BY u.id, u.name
HAVING SUM(o.amount) > 500
ORDER BY total_spent DESC
LIMIT 10;`,
      language: "sql",
      explanation: "`WHERE` filters rows BEFORE grouping occurs, whereas `HAVING` filters aggregated group calculations AFTER `GROUP BY`.",
      notes: [
        "Create indexes on foreign keys and frequently filtered columns to maintain sub-millisecond query execution."
      ],
      relatedTopics: ["postgresql-basics", "django-postgres"]
    }
  },
  {
    id: "sql-ddl-dml",
    category: "SQL",
    title: "SQL DDL & DML: CREATE, ALTER, INSERT, UPDATE, DELETE",
    keywords: [
      "sql ddl", "sql dml", "create table", "alter table", "insert into", "update sql", "delete sql", "truncate"
    ],
    exampleQuestions: [
      "How do I create a table with foreign keys in SQL?",
      "How do I add a new column to an existing table in SQL?",
      "What is the difference between DELETE and TRUNCATE?"
    ],
    type: "concept",
    answer: {
      summary: "DDL (Data Definition Language) manages schema structures, while DML (Data Manipulation Language) manages table records.",
      command: `-- 1. Create table with Constraints
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Alter table: Add column & Index
ALTER TABLE projects ADD COLUMN is_featured BOOLEAN DEFAULT FALSE;
CREATE INDEX idx_projects_user_id ON projects(user_id);

-- 3. DML Statements
INSERT INTO projects (title, user_id, is_featured) 
VALUES ('Portfolio AI Engine', 1, TRUE);

UPDATE projects 
SET is_featured = FALSE 
WHERE id = 4;`,
      language: "sql",
      explanation: "`DELETE` removes rows with a WHERE filter and logs transactions. `TRUNCATE` rapidly wipes an entire table without logging per-row deletions.",
      notes: [
        "Always use transactions (`BEGIN; ... COMMIT;`) when running manual UPDATE/DELETE queries in production!"
      ],
      relatedTopics: ["postgresql-basics", "sql-queries-joins"]
    }
  }
];
