import { Router } from "express"; //here i create all routes

import {
  getAllNotes,
  createNote,
  deleteNote,
  getNoteById,
} from "../controllers/notesController.js";
import { requireToken } from "../middlewares/requireToken.js";

/// midllewares

const router = Router();

router.get("/notes", requireToken, getAllNotes);
router.post("/notes", requireToken, createNote);
router.delete("/notes/:id", requireToken, deleteNote);
router.get("/:id", requireToken, getNoteById);

export default router;
