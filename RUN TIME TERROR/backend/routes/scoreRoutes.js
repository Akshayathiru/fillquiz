const express = require("express");
const router = express.Router();
const Score = require("../models/Score");

// SAVE data from frontend
router.post("/add", async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);
    const { name, college, score } = req.body;

    const newScore = new Score({
      name,
      college,
      score,
    });

    await newScore.save();
    res.json({ message: "Score saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all scores
router.get("/", async (req, res) => {
  const scores = await Score.find();
  res.json(scores);
});

module.exports = router;
