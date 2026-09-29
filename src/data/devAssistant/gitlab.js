export const gitlabKnowledge = [
  {
    id: "gitlab-ci-basics",
    category: "GitLab",
    title: "GitLab CI/CD pipeline configuration (.gitlab-ci.yml)",
    keywords: [
      "gitlab ci", "gitlab-ci.yml", "gitlab pipeline", "gitlab runner", "gitlab merge request", "gitlab"
    ],
    exampleQuestions: [
      "How do I set up GitLab CI/CD?",
      "What is the structure of .gitlab-ci.yml?",
      "How do I create a GitLab pipeline for testing and deploying?"
    ],
    type: "concept",
    answer: {
      summary: "GitLab CI/CD uses a `.gitlab-ci.yml` file placed in the repository root to define stages, jobs, and runner scripts.",
      command: `stages:
  - test
  - build
  - deploy

run_tests:
  stage: test
  image: node:20
  script:
    - npm ci
    - npm test

build_artifact:
  stage: build
  image: node:20
  script:
    - npm run build
  artifacts:
    paths:
      - dist/
    expire_in: 1 week`,
      language: "yaml",
      explanation: "GitLab executes defined jobs sequentially across stages using available GitLab Runners.",
      notes: [
        "In GitLab, pull requests are known as Merge Requests (MRs)."
      ],
      relatedTopics: ["github-actions-basics", "deployment-frontend"]
    }
  }
];
