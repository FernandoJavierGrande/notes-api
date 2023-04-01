const express = require("express");

const { getAllNotes } = require("../controllers/notesController");

/// midllewares

const router = express.Router();

router.get("/api/notes", getAllNotes);

module.exports = router;
