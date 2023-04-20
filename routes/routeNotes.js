import { Router } from "express"; //here i create all routes

import {
  getAllNotes,
  createNote,
  deleteNote,
  getNoteById,
  updateNote,
  makeImportant,
} from "../controllers/notesController.js";
import { requireToken } from "../middlewares/requireToken.js";
import { paramNoteValidator } from "../middlewares/validatorManager.js";

/// midllewares

const router = Router();

router.get("/notes", requireToken, getAllNotes);
router.post("/notes", requireToken, createNote);
router.delete("/notes/:id", requireToken, paramNoteValidator, deleteNote);
router.get("/:id", requireToken, paramNoteValidator, getNoteById);
router.patch("/:id", requireToken, paramNoteValidator, updateNote);
router.patch("/important/:id", requireToken, paramNoteValidator, makeImportant);

export default router;
