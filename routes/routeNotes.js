const express = require("express"); //here i create the all routes

const {
  getAllNotes,
  createNote,
  deleteNote,
  getNoteById,
} = require("../controllers/notesController");

/// midllewares

const router = express.Router();

router.get("/api/notes", getAllNotes);
router.post("/api/crearnota", createNote);
router.delete("/api/eliminar/:id", deleteNote);
router.get("/api/notes/:id", getNoteById);
module.exports = router;
