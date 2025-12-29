
const express = require("express");
const Score = require("../models/Score");   // ✅ Model import
const auth = require("../middleware/auth");

const router = express.Router();

// PLAYER: submit score
router.post("/", auth, async (req, res) => {
  try {
    const { score } = req.body;

    const newScore = new Score({
      userId: req.user.id,
      score,
    });

    await newScore.save();
    res.json({ msg: "Score saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PLAYER: view own scores
router.get("/me", auth, async (req, res) => {
  try {
    const scores = await Score.find({ userId: req.user.id });
    res.json(scores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADMIN: view all scores
router.get("/all", auth, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ msg: "Access denied" });
  }

  const scores = await Score.find().populate("userId", "username");
  res.json(scores);
});

module.exports = router;
