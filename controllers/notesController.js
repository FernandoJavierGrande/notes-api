import {create,deleteById, getAll,getByID} from "../services/notesService.js";


export const getAllNotes = async (req, res) => {
  try {
    const notes = await getAll();
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
  const { id } = req.params;
  // console.log(`!!!! id ${id} .. `);
  try {
    const note = await getByID(id);

    if (note) {
      res.json({ note });
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createNote = async (req, res) => {
  try {
    const note = await create(req.body);

    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const deleteNote = async (req, res) => {
  const { id } = req.params; //ver
  try {
    const note = await deleteById(id);
    res.json(note);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
