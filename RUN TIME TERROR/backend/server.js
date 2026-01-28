const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ ALLOW FRONTEND REQUESTS
app.use(express.json());
app.use(cors());

//Score Routes
const scoreRoutes = require("./routes/scoreRoutes");
app.use("/api/scores", scoreRoutes);

// routes
const resultRoutes = require("./routes/resultRoutes");
app.use("/api/results", resultRoutes);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => console.log(err));
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
