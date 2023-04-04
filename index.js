const express = require("express");
const noteRouter = require("./routes/routeNotes");

require("dotenv").config();
require("./database/db");

const app = express();

app.use(express.json());
app.use("/", noteRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server running on port  ${PORT}`);
});
