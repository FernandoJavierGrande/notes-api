const mongoose = require("mongoose");

const { Schema } = mongoose;

const noteSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  important: {
    type: Boolean,
    required: true,
  },
});

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
