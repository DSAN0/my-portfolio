export const drfKnowledge = [
  {
    id: "drf-setup",
    category: "DRF",
    title: "Setup Django REST Framework with ModelViewSet and Routers",
    keywords: [
      "drf", "django rest framework", "modelserializer", "modelviewset", "drf router", "drf setup", "create api django"
    ],
    exampleQuestions: [
      "How do I set up Django REST Framework?",
      "How do I create a REST API endpoint in Django?",
      "How do ModelSerializer and DefaultRouter work in DRF?"
    ],
    type: "workflow",
    answer: {
      summary: "Install `djangorestframework`, create a `ModelSerializer`, configure a `ModelViewSet`, and register routes with `DefaultRouter`.",
      steps: [
        {
          title: "Install DRF package",
          command: "pip install djangorestframework",
          explanation: "Add `'rest_framework'` to `INSTALLED_APPS` in `settings.py`."
        },
        {
          title: "Define ModelSerializer in serializers.py",
          command: `# serializers.py
from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'tech_stack', 'created_at']`,
          explanation: "Converts complex Django model instances into native Python datatypes that easily serialize to JSON."
        },
        {
          title: "Define ModelViewSet in views.py",
          command: `# views.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Project
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]`,
          explanation: "Automatically provides CRUD actions: list, create, retrieve, update, and destroy."
        },
        {
          title: "Register endpoints with DefaultRouter in urls.py",
          command: `# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')

urlpatterns = [
    path('api/', include(router.urls)),
]`,
          explanation: "Generates standard RESTful URL patterns for all CRUD actions under `/api/projects/`."
        }
      ],
      notes: [
        "DRF includes a browsable HTML API for testing endpoints directly in the browser."
      ],
      relatedTopics: ["django-create-project", "auth-jwt", "rest-api-basics"]
    }
  },
  {
    id: "drf-jwt-auth",
    category: "DRF",
    title: "Configure SimpleJWT Authentication in DRF",
    keywords: [
      "drf jwt", "django simplejwt", "djangorestframework-simplejwt", "drf token auth", "refresh token django"
    ],
    exampleQuestions: [
      "How do I add JWT authentication to Django REST Framework?",
      "How do I generate access and refresh tokens in Django?",
      "What is djangorestframework-simplejwt configuration?"
    ],
    type: "workflow",
    answer: {
      summary: "Use `djangorestframework-simplejwt` to provide JSON Web Token authentication with access and refresh tokens.",
      steps: [
        {
          title: "Install SimpleJWT",
          command: "pip install djangorestframework-simplejwt",
          explanation: "Adds JWT backend handlers for Django REST Framework."
        },
        {
          title: "Configure REST_FRAMEWORK settings in settings.py",
          command: `# settings.py
from datetime import timedelta

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ROTATE_REFRESH_TOKENS': True,
}`,
          explanation: "Configures default auth class and token expiration rules."
        },
        {
          title: "Add token endpoints to urls.py",
          command: `# urls.py
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]`,
          explanation: "Provides `/api/token/` for login credentials and `/api/token/refresh/` for renewal."
        }
      ],
      notes: [
        "Store tokens securely on the frontend (prefer HTTP-only cookies for refresh tokens)."
      ],
      relatedTopics: ["drf-setup", "auth-jwt", "troubleshoot-cors"]
    }
  }
];
