const noteService = require("../services/notesService");

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await noteService.getAllNotes();
    res.json({ notes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createNote = async (req, res) => {
  try {
    const note = await noteService.createNote(req.body);

    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deleteNote = async (req, res) => {
  const { id } = req.params; //ver
  try {
    console.log(`id ${id} .. `);
    const note = await noteService.deleteNote(id);
    res.json(note);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
