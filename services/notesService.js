const noteModel = require("../models/note");

const getAllNotes = async () => {
  return await noteModel.find();
};

const getNoteByID = async (id) => {
  return await noteModel.findById(id);
};

const createNote = async (note) => {
  return await noteModel.create(note);
};

const deleteNote = async (id) => {
  return await noteModel.findByIdAndDelete(id);
};

module.exports = { getAllNotes, createNote, deleteNote, getNoteByID };
