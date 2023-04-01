const noteModel = require("../models/note");

const getAllNotes = async () => {
  return await noteModel.find();
};

module.exports = { getAllNotes };
