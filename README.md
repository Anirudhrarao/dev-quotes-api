# 💬 DevQuotes API (Pure Node.js – No Express)

A fun and simple RESTful API that serves **random developer quotes**, built using **pure Node.js** without Express or any frameworks. Great for learning core modules, building microservices, or REST API practice.

---

## 🚀 Features

### ✅ GET Endpoints

| Method | Route               | Description                      |
|--------|---------------------|----------------------------------|
| GET    | `/quotes`           | Get all quotes                   |
| GET    | `/quotes?tag=funny` | Filter quotes by tag             |
| GET    | `/quotes/random`    | Get a single random quote        |

All quotes are stored in a local JSON file (`quotes.json`).

---

## 🧠 Quote Format

```json
{
  "id": 1,
  "text": "Talk is cheap. Show me the code.",
  "author": "Linus Torvalds",
  "tag": "code"
}
```
---
## 📁 Project Structure

```bash
dev-quotes-api/
├── server.js                  # Node.js HTTP server
├── data/
│   └── quotes.json            # JSON file with all quotes
├── routes/
│   └── quoteRoutes.js         # Handles route logic
├── services/
│   └── quoteService.js        # Quote read/filter logic
├── utils/
│   └── random.js              # Helper: get random array item
├── package.json
└── README.md
```
