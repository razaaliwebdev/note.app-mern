import express from 'express';
import notesRotuer from '../src/routes/NotesRoutes.js';
import rateLimiter from './middlewares/rateLimiter.js';
import cors from 'cors';
import path from 'path';

const app = express();
const __dirname = path.resolve();

//  MIDDLEWARES
if (process.env.NODE_ENV !== "production") {
    app.use(cors({
        origin: "http://localhost:5173",
        // credentials: true
    }));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);


// app.use("/", (req, res, next) => {
//     console.log(`Req Method: ${req.method} and Req Url: ${req.url}`);
//     next();
// });


// Register the routes
app.use("/api", notesRotuer);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

if (process.env.NODE_ENV === "production") {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}


export default app;