export const restApiKnowledge = [
  {
    id: "rest-api-basics",
    category: "REST APIs",
    title: "RESTful API Design: HTTP Verbs, Status Codes & Best Practices",
    keywords: [
      "rest api", "http status codes", "http methods", "get post put patch delete", "restful design", "api pagination", "cors"
    ],
    exampleQuestions: [
      "What is the difference between PUT and PATCH in REST APIs?",
      "What are the standard HTTP status codes (200, 201, 400, 401, 403, 404, 500)?",
      "What are best practices for designing REST API endpoints?"
    ],
    type: "concept",
    answer: {
      summary: "REST (Representational State Transfer) is an architectural style for stateless, client-server communication using standard HTTP methods.",
      table: {
        headers: ["HTTP Code", "Category", "Standard Meaning & Use Case"],
        rows: [
          ["200 OK", "Success", "Standard response for successful GET, PUT, or PATCH"],
          ["201 Created", "Success", "Resource was successfully created via POST"],
          ["204 No Content", "Success", "Action succeeded (e.g. DELETE), no response body"],
          ["400 Bad Request", "Client Error", "Invalid input or malformed payload"],
          ["401 Unauthorized", "Client Error", "Missing or invalid authentication credentials/token"],
          ["403 Forbidden", "Client Error", "Authenticated, but lacks permissions to access resource"],
          ["404 Not Found", "Client Error", "Requested resource URI does not exist"],
          ["500 Server Error", "Server Error", "Unhandled exception crashed server logic"]
        ]
      },
      command: `// RESTful Endpoint Design Conventions:
GET    /api/v1/projects          // Retrieve paginated list
POST   /api/v1/projects          // Create a new project
GET    /api/v1/projects/:id      // Retrieve single project
PUT    /api/v1/projects/:id      // Full replacement update
PATCH  /api/v1/projects/:id      // Partial field update
DELETE /api/v1/projects/:id      // Delete project`,
      language: "http",
      explanation: "Always use plural nouns for collections (`/projects`, `/users`) and reserve HTTP verbs for actions.",
      notes: [
        "`PUT` should replace the entire resource entity, while `PATCH` updates only the specified subset of fields."
      ],
      relatedTopics: ["auth-jwt", "drf-setup", "fastapi-basics", "troubleshoot-cors"]
    }
  }
];
