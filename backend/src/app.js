import express from 'express';
import notesRotuer from '../src/routes/NotesRoutes.js';
import rateLimiter from './middlewares/rateLimiter.js';
import cors from 'cors';

const app = express();

//  MIDDLEWARES
app.use(cors({
    origin: "http://localhost:5173",
    // credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);


// app.use("/", (req, res, next) => {
//     console.log(`Req Method: ${req.method} and Req Url: ${req.url}`);
//     next();
// });


// Register the routes
app.use("/api", notesRotuer);



export default app;