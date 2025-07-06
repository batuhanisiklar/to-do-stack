
<div align="center">
  <h1>✅ ToDoStack - Fullstack To-Do App with Docker Compose</h1>
</div>

<p align="center">
  <em>A containerized full-stack To-Do application with separate frontend and backend services, orchestrated using Docker Compose.</em>
</p>

---

## 📌 Overview

**ToDoStack** is a modular and scalable to-do list application designed with separation of concerns.  
It features a modern frontend, one or more backend services, and uses Docker Compose to manage the entire development environment with ease.

---

## 🧰 Tech Stack

- 🌐 Frontend: React / Vue / Angular *(inside `frontend/`)*
- 🐍 Backend: Python (Flask / FastAPI) *(inside `services/`)*
- 🐳 Docker & Docker Compose
- 🐙 Git for version control
- 📁 `.venv` for virtual environment (Python)

---

## 📁 Project Structure

```
todo-stack/
│
├── frontend/                  # Frontend application (e.g., React)
├── services/                  # Backend services (API, DB connectors, etc.)
├── .gitignore                 # Files to be ignored by Git
└── todo-docker-compose.yaml   # Docker Compose configuration
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- (Optional) Python 3.x if developing services locally

---

### 🧪 Running the Project

```bash
docker-compose -f todo-docker-compose.yaml up --build
```

This command will:
- Build the frontend and backend images
- Launch containers as defined in `todo-docker-compose.yaml`

---

## 🎯 Features

- ✅ Add, edit, and delete to-do tasks
- 📋 Organized frontend and backend structure
- 🐳 Easily containerized development
- 🔄 Scalable microservice-ready architecture

---

## 🛠️ Customization

- Modify `frontend/` to change UI behavior and styling
- Modify `services/` to change backend logic or API endpoints
- Edit `todo-docker-compose.yaml` to add volumes, environment variables, or databases

---

## 📄 License

This project is open-source and available for educational or personal use.  
Feel free to fork and adapt it to your own needs.

---

## 🙋‍♂️ Author

| Platform | Info |
|----------|------|
| 📧 Email | [batuhanisiklar0@gmail.com](mailto:batuhanisiklar0@gmail.com) |
| 💼 LinkedIn | [Batuhan Işıklar](https://www.linkedin.com/in/batuhanisiklar/) |

---

> Made with ☕ and 💻 by Batuhan Işıklar
