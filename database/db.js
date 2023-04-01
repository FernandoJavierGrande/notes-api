const mongoose = require("mongoose");

mongoose
  .connect(process.env.URI)
  .then(() => console.log("database connected"))
  .catch((e) => console.log("error " + e));
