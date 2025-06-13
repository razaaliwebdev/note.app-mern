import express from 'express';
import { createNotes, deleteNote, getAll, getSingle, updateNote } from '../controllers/notesController.js';
import rateLimiter from '../middlewares/rateLimiter.js';

const router = express.Router();

// Create Note Route
router.post("/notes", createNotes);

// Get all the notes route
router.get("/notes", rateLimiter, getAll);

// Get single note route
router.get("/notes/:id", getSingle);

// Update the note route
router.put("/notes/:id", updateNote);

// Delete the note route
router.delete("/notes/:id", deleteNote);



export default router;