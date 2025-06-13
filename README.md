# MERN Notes Application

A full-stack note-taking application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring modern UI design and real-time updates.

## 🚀 Features

- Create, read, update, and delete notes
- Modern and responsive UI using Tailwind CSS
- Real-time updates
- Rate limiting for API protection
- MongoDB database integration
- RESTful API architecture

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- DaisyUI
- React Hot Toast
- Lucide React Icons

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- Upstash Redis for rate limiting
- CORS enabled

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
MernNotes/
├── backend/
│   ├── src/
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    ├── public/
    └── package.json
```

## 🔧 Available Scripts

### Backend

- `npm run dev`: Start development server with nodemon
- `npm test`: Run tests (to be implemented)

### Frontend

- `npm run dev`: Start Vite development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## 🔒 API Security

- Rate limiting implemented using Upstash Redis
- CORS enabled for secure cross-origin requests
- MongoDB connection with proper error handling

## 🎨 UI/UX Features

- Responsive design using Tailwind CSS
- Modern UI components with DaisyUI
- Toast notifications for user feedback
- Intuitive navigation with React Router
- Beautiful icons from Lucide React

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- MongoDB for the database
- Vite for the build tool
- Tailwind CSS for styling
- All other open-source contributors
