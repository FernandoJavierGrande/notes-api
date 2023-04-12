// const express = require("express"); 
import express from "express" //here i create all routes

import {
  getAllNotes,
  createNote,
  deleteNote,
  getNoteById,
} from "../controllers/notesController.js";

/// midllewares

const router = express.Router();

router.get("/api/notes", getAllNotes);
router.post("/api/crearnota", createNote);
router.delete("/api/eliminar/:id", deleteNote);
router.get("/api/notes/:id", getNoteById);

export default router;
