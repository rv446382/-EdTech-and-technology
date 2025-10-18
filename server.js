import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import "express-async-errors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

await connectDB();
app.get("/", (req, res) => res.send("Resume System Backend is running!!"));

app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!!`)
});
