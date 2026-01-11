
const express = require("express");
const router = express.Router();
const Score = require("../models/Score");

// Add score
router.post("/add", async (req, res) => {
  try {
    const { userId, score } = req.body;
    const newScore = new Score({ userId, score });
    await newScore.save();
    res.status(201).json(newScore);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all scores
router.get("/", async (req, res) => {
  const scores = await Score.find().populate("userId");
  res.json(scores);
});

module.exports = router;