const express = require("express");
const router = express.Router();
const Result = require("../models/Result");

// 🔥 TEST ROUTE — SAVES DATA INTO MONGODB
router.get("/test", async (req, res) => {
  try {
    const newResult = new Result({
      name: "Test User",
      college: "Test College",
      score: 85,
      grade: "B",
    });

    await newResult.save();
    res.send("Test result added");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// ✅ GET ALL RESULTS
router.get("/", async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// ✅ SAVE REAL RESULT FROM FRONTEND
router.post("/submit", async (req, res) => {
  try {
    const { name, college, score } = req.body;

    let grade = "F";
    if (score >= 90) grade = "A";
    else if (score >= 75) grade = "B";
    else if (score >= 60) grade = "C";
    else if (score >= 40) grade = "D";

    const newResult = new Result({
      name,
      college,
      score,
      grade,
    });

    await newResult.save();
    res.json({ message: "Result saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
