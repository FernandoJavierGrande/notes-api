import mongoose from "mongoose";

const { Schema, model } = mongoose;

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

export const Note = model("Note", noteSchema);
