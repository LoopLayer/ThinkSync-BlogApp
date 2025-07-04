# 🧠 ThinkSync - AI Powered Blogging Platform

ThinkSync is a full-featured, modern blogging platform built on the **MERN Stack** (MongoDB, Express, React, Node.js), enhanced with **Gemini AI** for smart blog generation. It offers a dynamic platform where users can read, comment, and interact with blog content — while administrators enjoy a powerful dashboard to create, manage, and publish content, even using AI assistance.

## 🚀 Features

### 🌐 User Features
- 📝 **Read and Explore Blogs**: Browse through various categories including Technology, Finance, Startups, Lifestyle, and more.
- 💬 **Commenting System**: Engage in discussions by posting comments under each blog.
- 🔍 **Search and Filter**: Easily find blogs using keywords or category filters.

### 🤖 AI-Powered Capabilities
- ✨ **Generate Blogs Using Gemini AI**: Admins can generate high-quality blog content with one click using Google's Gemini AI integration.
- 🎯 **Topic Suggestions**: Gemini AI provides blog topic suggestions based on categories or trends.

### 🔐 Admin Panel
- 🧑‍💼 **Secure Admin Login**: Only authorized users can access the dashboard.
- 📂 **Create, Edit, and Delete Blogs**: Full CRUD capabilities.
- 🧠 **AI Blog Writer**: Generate content and edit directly from the dashboard.
- 🛠 **Manage Comments**: Monitor and remove inappropriate comments.

---

## 🛠 Tech Stack

| Technology | Description |
|------------|-------------|
| **MongoDB** | NoSQL database for storing blog content, users, and comments. |
| **Express.js** | Server-side framework for handling API requests and routing. |
| **React.js** | Frontend UI library with dynamic rendering and state management. |
| **Node.js** | Backend runtime environment. |
| **Gemini AI** | Google’s generative AI used for content generation and suggestions. |
| **JWT Auth** | For secure user/admin authentication. |
| **Axios** | For API calls between frontend and backend. |

## ⚙️ Setup Instructions

### 🔧 Prerequisites

- Node.js and npm installed
- MongoDB database
- Gemini AI API key
- Git

### 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/LoopLayer/ThinkSync-BlogApp.git
cd ThinkSync-BlogApp
```
2. **Install server dependencies:**

```bash
cd server
npm install
```

3. **Install client dependencies:**

```bash
cd ../client
npm install
```
4. **Create .env files:**
   #### 📄 Example `.env` file for the server:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

5. **Run the application:**
    #### Start backend:
```bash
cd server
npm run dev
```
#### Start frontend:
```bash
cd client
npm start
```
## 👤 Author

### 👨‍💻 Kishan Sisodiya

🚀 Passionate Full Stack Developer focused on building scalable web apps.  
💡 Loves working with the MERN stack and exploring AI integrations.  
📚 Constantly learning new technologies and improving problem-solving skills.  
🌍 Based in India  

---

### 📫 Connect With Me

- 📧 Email: [kishansisodiya.work@gmail.com](mailto:kishansisodiya.work@gmail.com)  
- 💼 LinkedIn: [linkedin.com/in/kishansisodiya-fsd](https://www.linkedin.com/in/kishansisodiya-fsd)  
- 💻 GitHub: [github.com/LoopLayer](https://github.com/LoopLayer)
