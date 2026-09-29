export const testingKnowledge = [
  {
    id: "testing-pytest",
    category: "Testing",
    title: "Python Unit & Integration Testing with Pytest and Django TestCase",
    keywords: [
      "pytest", "django test", "unit testing", "mocking", "api testing python", "test assertions"
    ],
    exampleQuestions: [
      "How do I write unit tests with pytest?",
      "How do I run tests in Django with manage.py test?",
      "How do I test DRF API endpoints with APITestCase?"
    ],
    type: "workflow",
    answer: {
      summary: "Automated testing ensures stability, prevents regressions, and validates application logic across edge cases.",
      command: `# test_api.py (DRF APITestCase example)
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from core.models import Project

class ProjectAPITests(APITestCase):
    def setUp(self):
        self.project = Project.objects.create(
            title="Portfolio System",
            description="Testing suite"
        )
        self.url = reverse('project-list')

    def test_get_projects_list(self):
        """Ensure endpoint returns HTTP 200 and valid list structure"""
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(len(response.data) > 0)`,
      language: "python",
      steps: [
        {
          title: "Run Django test suite",
          command: "python manage.py test",
          explanation: "Creates an isolated test database, runs all tests, and tears down test data."
        },
        {
          title: "Run with pytest and coverage report",
          command: "pytest --cov=. --cov-report=html",
          explanation: "Generates interactive HTML code coverage report."
        }
      ],
      notes: [
        "Follow the Arrange-Act-Assert (AAA) pattern when structuring test methods."
      ],
      relatedTopics: ["drf-setup", "django-create-project"]
    }
  }
];
