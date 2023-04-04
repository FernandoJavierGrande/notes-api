const noteService = require("../services/notesService");

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await noteService.getAllNotes();
    if (note) {
      res.json({ note });
    } else {
      res.status(204).end();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getNoteById = async (req, res) => {
  const { id } = req.params;
  // console.log(`!!!! id ${id} .. `);
  try {
    const note = await noteService.getNoteByID(id);

    if (note) {
      res.json({ note });
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
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
    const note = await noteService.deleteNote(id);
    res.json(note);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
