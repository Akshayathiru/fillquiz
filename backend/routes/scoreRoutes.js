
const express = require("express");
const router = express.Router();
const Score = require("../models/Score");

// Add score
router.post("/add", async (req, res) => {
  try {
    const { userId, score, results } = req.body;
    const newScore = new Score({ userId, score, results });
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

// Get leaderboard (highest score per user)
router.get("/leaderboard", async (req, res) => {
  try {
    const leaderboard = await Score.aggregate([
      { $sort: { score: -1 } },
      {
        $group: {
          _id: "$userId",
          highestScore: { $first: "$score" },
          date: { $first: "$createdAt" },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      { $unwind: "$userDetails" },
      {
        $project: {
          _id: 1,
          highestScore: 1,
          date: 1,
          username: "$userDetails.username",
        },
      },
      { $sort: { highestScore: -1 } },
    ]);
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;