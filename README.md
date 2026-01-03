# Task Manager API – Cloudflare Workers

This project is a simple Task Manager API built using Cloudflare Workers and D1 database.

## Features
- GET /tasks – Fetch all tasks
- POST /tasks – Add a new task
- Uses Cloudflare D1 (SQLite-based database)
- Deployed using Cloudflare Workers

## Tech Stack
- Cloudflare Workers
- Cloudflare D1 Database
- TypeScript
- Wrangler CLI

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/shreyan513/task-manager-cloudflare.git
cd task-manager-cloudflare

## Install dependies
- npm install

## Login to cloudflare
- wrangler login

## create D1 database
- wrangler d1 create task_db

## create table
wrangler d1 execute task_db --remote --command "
CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  created_at TEXT
);
"

## Run locally
- wrangler dev

## Deploy to cloudflare
- wrangler deploy