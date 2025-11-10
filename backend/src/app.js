import express from "express";
import projectRoutes from "./routes/projectRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config({ path: "./src/.env" });

const app = express();
const port = process.env.PORT || 3000;

// ✅ Middleware to parse JSON request bodies
app.use(express.json());

// ✅ Then use your routes
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);

connectDB();

app.listen(port, () => {
  console.log("Server is running on port", port);
});
