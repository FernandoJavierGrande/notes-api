
import noteRouter from "./routes/routeNotes.js";
import "dotenv/config";
import "./database/db.js";
import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";a
import authRoutes from "./routes/auth.route.js";



const app = express();

app.use(express.json());
app.use("/", noteRouter);
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server running on port  ${PORT}`);
});
