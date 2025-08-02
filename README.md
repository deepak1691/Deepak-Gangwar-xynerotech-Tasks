# 🏥 Doctor Management API

A RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage doctor records. This API allows creating, retrieving, updating, and deleting doctor data. It also includes input validation using **Zod** and a custom error-handling system.

---

## 📚 Features

- ✅ Create, read, update, and delete doctors
- ✅ Input validation with Zod
- ✅ Error handling with custom `ExpressError`
- ✅ MongoDB integration via Mongoose
- ✅ Asynchronous wrapper to avoid repetitive try-catch blocks

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)
- **Zod** (input validation)
- **dotenv** (for environment variables)

---

## 📁 Folder Structure

├──backend-Doctor-Appointment
    ├── controllers/
    │ └── doctors.controllers.js # Controller logic for CRUD
    ├── middlewares/
    │ └── validate.middleware.js # Request validation middleware
    ├── models/
    │ └── doctorSchema.js # Mongoose schema for doctors
    ├── routes/
    │ └── doctor.route.js # API endpoints
    ├── utils/
    │ ├── db.js # MongoDB connection
    │ ├── errorhandler.js # Custom error class
    │ ├── wrapAsync.js # Async error handling helper
    │ └── validate.js # Zod schema for validation
    ├── .env # Environment variables
    ├── server.js # Application entry point


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/deepak1691/Deepak-Gangwar-xynerotech-Tasks.git
cd <project-directory> ## backend-Doctor-Appointment


2. Install Dependencies

 npm install

3. Set Up Environment Variables

Create a .env file in the root directory:

PORT=8000
MONGOURI=mongodb://localhost:27017/your-database-name


4. Start the Server

npm run dev
Server will run at: http://localhost:3000

📨 API Endpoints
Base Route

GET /
Response: "hello world"
