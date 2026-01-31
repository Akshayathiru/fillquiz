const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

// CORS configuration - allowing multiple origins if needed
const origins = process.env.FRONTEND_ORIGIN ? process.env.FRONTEND_ORIGIN.split(",") : ["http://localhost:5173", "http://localhost:5174"];

app.use(
  cors({
    origin: origins,
    credentials: true,
  })
);

// Routes
const authRoutes = require("./routes/authRoutes");
const scoreRoutes = require("./routes/scoreRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/scores", scoreRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
