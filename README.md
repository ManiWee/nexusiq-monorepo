🚀 NexusIQ

NexusIQ is an Enterprise Meeting Intelligence & Autonomous Workflow Platform. It is designed to ingest meeting audio, generate transcripts, build searchable knowledge graphs of decisions, and trigger multi-agent AI workflows.
This project is built using a modern, event-driven microservices architecture to demonstrate expertise in Fullstack Engineering, AI/ML deployment, and Platform DevOps.

🏗️ Architecture & Tech Stack
NexusIQ is structured as a monorepo utilizing npm workspaces and is fully containerized with Docker.
Frontend (apps/web): React.js, TypeScript, Vite, Tailwind CSS.
Core API Gateway (apps/api): Node.js, Express.js. (Handles routing, auth, and business logic).
AI Engine (apps/ai): Python, FastAPI. (Handles Whisper STT, LangGraph/Haystack agents, and Vector/Graph DB interactions).
Infrastructure: Docker, Docker Compose.

📂 Project Structure
nexusiq-monorepo/
├── apps/
│   ├── web/        # React frontend dashboard
│   ├── api/        # Node.js Core API gateway
│   └── ai/         # Python AI & GenAI service
├── packages/       # Shared configurations and types (Future)
├── docker-compose.yml
└── package.json


🛠️ Getting Started (Local Development)
Follow these steps to boot up the entire microservices architecture on your local machine.
Prerequisites
Docker Desktop installed and running.
Git and VS Code.

Step 1: Clone and Open
Clone this repository to your local machine.
Open the root folder (nexusiq-monorepo) in VS Code.
Open the integrated terminal.

Step 2: Boot the Platform
Run the following command to build and start all three services (React, Node.js API, and Python AI):
docker-compose up --build
(Note: The --build flag ensures Docker catches any recent code changes).

Step 3: Verify the Services
Wait a few moments for the containers to initialize. You should see logs streaming from web, api, and ai.
Click the links below to verify everything is working:
Frontend (React): http://localhost:5173
Core API (Node.js): http://localhost:3001/api/health
AI Engine (Python): http://localhost:8000/api/ai/health

Step 4: Shutting Down
When you are done working, click inside your terminal where the logs are running and press:
Ctrl + C

To completely clean up the containers and network, run:
docker-compose down

🗺️ Roadmap & Upcoming Features
[ ] React Dashboard: Implement file upload drag-and-drop UI with Tailwind CSS.
[ ] Data Persistence: Connect PostgreSQL to the Node.js API for user management.
[ ] Audio Ingestion: Pipe audio files from React -> Node.js -> Python via REST/WebSockets.
[ ] Speech-to-Text: Integrate OpenAI Whisper into the FastAPI service.
[ ] Graph-RAG: Implement semantic search using Milvus/Pinecone and Neo4j.
[ ] Multi-Agent Workflows: Integrate LangGraph to extract actionable insights from transcripts.
