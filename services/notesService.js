import {Note} from "../models/note.js";

export const getAll = async () => {
  return await Note.find();
};

export const getByID = async (id) => {
  return await Note.findById(id);
};

export const create = async (note) => {
  return await Note.create(note);
};

export const deleteById = async (id) => {
  return await Note.findByIdAndDelete(id);
};
