import { Note } from "../models/note.js";
import {
  create,
  deleteById,
  getAll,
  getByID,
} from "../services/notesService.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await getAll({ uid: req.uid });
    if (notes) {
      res.json({ notes });
    } else {
      res.status(204).end();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await getByID(id);

    if (!note) {
      return res.status(404).json(`Note id: ${id} don't exist`);
    }
    if (!note.uid.equals(req.uid)) {
      return res.status(401).json(`Unauthorized`);
    }
    const { content, important } = note;
    return res.json(content, important);

  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(403).json({ error: "Formato id incorrecto" });
    }
    return res.status(500).json({ error: error.message });
  }
};

export const createNote = async (req, res) => {
  try {
    const { content, important } = req.body;

    const note = new Note({
      content,
      date: Date.now(),
      important,
      uid: req.uid,
    });

    await create(note);

    return res.status(201).json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);

    if (!note) return res.status(404).json({ error: "Note don't exist" });

    if (!note.uid.equals(req.uid))
      return res.status(401).json({ error: "Unauthorized" });

    await Note.findByIdAndDelete(id);

    return res.json({ content: note.content });
  } catch (error) {

    if (error.kind === "ObjectId") {
      return res.status(403).json({ error: "Formato id incorrecto" });
    }

    return res.status(404).json({ error: error.message });
  }
};
