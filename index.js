const express = require("express");
const notesRoute = require("./routes/routeNotes");

require("dotenv").config();
require("./database/db");

const app = express();

app.use(express.json());

app.use("/", notesRoute);

let notes = [
  // {
  //   id: 1,
  //   content: "HTML is easy",
  //   date: "2019-05-30T17:30:31.098Z",
  //   important: true,
  // },
  // {
  //   id: 2,
  //   content: "Browser can execute only Javascript",
  //   date: "2019-05-30T18:39:34.091Z",
  //   important: false,
  // },
  // {
  //   id: 3,
  //   content: "GET and POST are the most important methods of HTTP protocol",
  //   date: "2019-05-30T19:20:14.298Z",
  //   important: true,
  // },
];

// app.get("/", (req, res) => {
//   res.send("<h1>this is a title</h1>");
// });

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

app.get("/api/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.find((n) => n.id === id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  notes = notes.filter((n) => n.id !== id);
  res.status(204).end();
});

app.post("/api/notes", (req, res) => {
  const note = req.body;
  res.json(note);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server running on port  ${PORT}`);
});
