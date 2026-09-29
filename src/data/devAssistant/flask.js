export const flaskKnowledge = [
  {
    id: "flask-basics",
    category: "Flask",
    title: "Create a lightweight REST API with Flask",
    keywords: [
      "flask", "create flask app", "flask rest api", "flask route", "flask run", "python flask"
    ],
    exampleQuestions: [
      "How do I create a simple Flask application?",
      "How do I return JSON from a Flask route?",
      "How do I run a Flask development server?"
    ],
    type: "workflow",
    answer: {
      summary: "Flask is a lightweight Python micro-framework ideal for small services, APIs, and quick prototyping.",
      steps: [
        {
          title: "Install Flask",
          command: "pip install Flask python-dotenv",
          explanation: "Installs core Flask and environment loader."
        },
        {
          title: "Create app.py",
          command: `# app.py
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'service': 'flask-api'}), 200

@app.route('/api/echo', methods=['POST'])
def echo():
    data = request.get_json()
    return jsonify({'received': data}), 201

if __name__ == '__main__':
    app.run(debug=True, port=5000)`,
          explanation: "Defines routes and JSON response handlers."
        },
        {
          title: "Run Flask development server",
          command: "flask run --debug --port=5000",
          explanation: "Starts local development server with auto-reload."
        }
      ],
      notes: [
        "In production, always serve Flask behind a WSGI server like Gunicorn: `gunicorn -w 4 app:app`"
      ],
      relatedTopics: ["fastapi-basics", "python-venv", "rest-api-basics"]
    }
  }
];
