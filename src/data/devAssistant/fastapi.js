export const fastapiKnowledge = [
  {
    id: "fastapi-basics",
    category: "FastAPI",
    title: "Build High-Performance Async APIs with FastAPI and Pydantic",
    keywords: [
      "fastapi", "uvicorn", "pydantic", "fastapi swagger", "fastapi async", "fastapi routes", "python fastapi"
    ],
    exampleQuestions: [
      "How do I create an API with FastAPI and Pydantic?",
      "How do I run FastAPI with Uvicorn?",
      "How do I access automatic Swagger docs in FastAPI?"
    ],
    type: "workflow",
    answer: {
      summary: "FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.8+ based on standard Python type hints.",
      steps: [
        {
          title: "Install FastAPI and ASGI server Uvicorn",
          command: "pip install fastapi \"uvicorn[standard]\" pydantic",
          explanation: "Installs FastAPI and the high-speed ASGI server."
        },
        {
          title: "Create main.py with Pydantic validation",
          command: `# main.py
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, Field

app = FastAPI(title="Portfolio API", version="1.0.0")

class Item(BaseModel):
    title: str = Field(..., min_length=2)
    description: str | None = None
    price: float = Field(..., gt=0)

@app.get("/")
async def root():
    return {"message": "FastAPI is running"}

@app.post("/items/", status_code=status.HTTP_201_CREATED)
async def create_item(item: Item):
    return {"item_created": item}`,
          explanation: "Pydantic provides automatic schema validation and auto-generates interactive Swagger documentation."
        },
        {
          title: "Start ASGI server with hot-reload",
          command: "uvicorn main:app --reload --port 8000",
          explanation: "Runs server at http://127.0.0.1:8000. Interactive Swagger UI is available at http://127.0.0.1:8000/docs."
        }
      ],
      notes: [
        "FastAPI leverages Python `async def` for non-blocking I/O operations, making it significantly faster than traditional synchronous frameworks."
      ],
      relatedTopics: ["flask-basics", "drf-setup", "rest-api-basics"]
    }
  }
];
