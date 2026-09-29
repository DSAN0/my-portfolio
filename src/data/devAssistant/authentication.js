export const authenticationKnowledge = [
  {
    id: "auth-jwt",
    category: "Authentication",
    title: "JWT Authentication, Tokens vs Sessions & Refresh Token Flow",
    keywords: [
      "authentication", "jwt", "json web token", "sessions vs jwt", "refresh token", "access token", "oauth2", "password hashing"
    ],
    exampleQuestions: [
      "How do JWT access and refresh tokens work?",
      "What is the difference between Session-based and JWT Token authentication?",
      "Where should I securely store JWT tokens on the frontend?"
    ],
    type: "concept",
    answer: {
      summary: "JSON Web Tokens (JWT) are self-contained stateless tokens consisting of a Header, Payload (claims), and Signature.",
      table: {
        headers: ["Aspect", "Session Cookies", "JWT Tokens"],
        rows: [
          ["State Storage", "Server memory / Redis session store", "Stateless; decoded via server secret key"],
          ["Scalability", "Requires shared cache across multiple server nodes", "Naturally horizontally scalable"],
          ["Revocation", "Instant revocation by deleting session ID in Redis", "Difficult before expiration unless using blocklist"],
          ["Storage", "HttpOnly, SameSite Cookies", "HttpOnly Cookie (recommended) or in-memory"]
        ]
      },
      command: `// Typical JWT Structure:
header.payload.signature

// Authorization Header in API Requests:
Authorization: Bearer <access_token>`,
      language: "http",
      explanation: "Access tokens typically have short lifetimes (e.g. 15 minutes) and are renewed automatically using a long-lived Refresh Token.",
      notes: [
        "Never store sensitive tokens in `localStorage` if your app is vulnerable to XSS attacks. Prefer `HttpOnly; Secure; SameSite=Strict` cookies."
      ],
      relatedTopics: ["drf-jwt-auth", "rest-api-basics"]
    }
  }
];
