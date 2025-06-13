# MERN Notes Application

A full-stack note-taking application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring modern UI design and real-time updates.

## 🚀 Features

- Create, read, update, and delete notes
- Modern and responsive UI using Tailwind CSS
- Real-time updates
- Rate limiting for API protection
- MongoDB database integration
- RESTful API architecture
- Production-ready build configuration

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

### Quick Start

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd MernNotes
   ```
2. Install all dependencies (both frontend and backend):
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the development servers:

   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev

   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

### Manual Setup

#### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with required variables
4. Start the development server:
   ```bash
   npm run dev
   ```

#### Frontend Setup

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

## 🚀 Deployment

### Production Build

To create a production build:

```bash
npm run build
```

This command will:

1. Install backend dependencies
2. Install frontend dependencies
3. Build the frontend application

### Starting Production Server

To start the production server:

```bash
npm start
```

### Deployment Options

#### Backend Deployment

1. **Render**

   - Connect your GitHub repository
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Add environment variables

2. **Railway**

   - Connect your GitHub repository
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Configure environment variables

3. **Heroku**
   - Create a new Heroku app
   - Connect your GitHub repository
   - Enable automatic deploys
   - Add environment variables in Heroku dashboard

#### Frontend Deployment

1. **Vercel**

   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set output directory: `frontend/dist`
   - Configure environment variables

2. **Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `frontend/dist`
   - Configure environment variables

## 🏗️ Project Structure

```
MernNotes/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── middleware/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── utils/
│   ├── public/
│   └── package.json
└── package.json
```

## 🔧 Available Scripts

### Root Directory

- `npm install`: Install all dependencies (frontend and backend)
- `npm run build`: Build the entire application
- `npm start`: Start the production server

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
- Environment variables for sensitive data

## 🎨 UI/UX Features

- Responsive design using Tailwind CSS
- Modern UI components with DaisyUI
- Toast notifications for user feedback
- Intuitive navigation with React Router
- Beautiful icons from Lucide React
- Optimized production builds

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
