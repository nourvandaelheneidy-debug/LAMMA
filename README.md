# LAMMA — Event Discovery & Booking API

A backend API designed to support an event discovery and booking platform, helping users explore events and manage their event-related activities.

## 📌 Project Overview

LAMMA is a backend project built with Node.js and Express.js. It focuses on creating RESTful APIs and connecting them to a relational database to manage application data.

## ✨ Key Features

- RESTful API architecture
- User authentication and authorization using JWT
- Event management
- Relational database integration
- Request handling and middleware
- API testing using Postman

*Note: Features should reflect the functionality currently implemented in the project.*

## 🛠️ Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — Backend web framework
- **PostgreSQL** — Relational database
- **Sequelize** — ORM for database operations
- **JWT** — Token-based authentication
- **Git & GitHub** — Version control and project hosting
- **Postman** — API testing

## 🏗️ Project Architecture

The backend follows a structured approach to handling HTTP requests:

1. **Routes** — Define API endpoints.
2. **Middleware** — Handle shared request-processing logic.
3. **Controllers** — Handle incoming requests and responses.
4. **Services / Repositories** — Organize business logic and data access, where implemented.
5. **Models** — Represent database entities.
6. **PostgreSQL** — Stores application data.

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git
- Access to a PostgreSQL database

### 1. Clone the repository

```bash
git clone https://github.com/nourvandaelheneidy-debug/LAMMA.git
```

### 2. Navigate to the project directory

```bash
cd LAMMA
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root and add the environment variables required by your application.

Example:

```env
PORT=3000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
```

Replace the example values with your actual configuration. Add other variables if your code requires them.

**Important:** Never upload your real `.env` file, database password, or JWT secret to GitHub.

### 5. Run the application

Use the start script defined in your `package.json`. If it is configured as `start`, run:

```bash
npm start
```

## 🗄️ Database

LAMMA uses PostgreSQL for relational data storage and Sequelize for database interactions.

The database connection is configured through environment variables so credentials can remain outside the source code.

## 🧪 API Testing

You can test the API using Postman by sending requests to the deployed API URL or your local server.

For local development, the base URL may be:

```text
http://localhost:3000
```

Use the routes defined in the project to test authentication and event-related operations.

## ☁️ Deployment

The project is being configured for cloud deployment using:

- **Vercel** — Backend deployment
- **Neon** — Hosted PostgreSQL database

Deployment requires the correct environment variables and a working database connection.

## 🎯 Learning Objectives

This project provides practical experience with:

- Building RESTful APIs
- Structuring a Node.js backend
- Working with relational databases and ORMs
- Implementing authentication
- Managing environment variables
- Testing and deploying backend applications

## 👩‍💻 Author

**Nourvanda El-heneidy**

- GitHub: [nourvandaelheneidy-debug](https://github.com/nourvandaelheneidy-debug)

---

*LAMMA — Backend API Project*
