// const Note = require("../models/note"); // change to service
// const leerNotes = async (req, res) => {
//   try {
//     const notes = await Note.find().lean();
//     res.json(notes);
//   } catch (error) {
//     console.log(error);
//   }
// };

const noteService = require("../services/notesService");

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await noteService.getAllNotes();
    res.json({ notes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
