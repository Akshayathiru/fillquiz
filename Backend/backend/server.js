const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
    credentials: false,
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
  .catch((err) => console.log(err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
