const Score = require("../models/Score");

// Add score
exports.addScore = async (req, res) => {
  try {
    const { userId, score, results } = req.body;

    const newScore = new Score({
      userId,
      score,
      results: results || []
    });
    await newScore.save();

    res.status(201).json({
      message: "Score added successfully",
      data: newScore,
    });
  } catch (error) {
    console.error("Add Score Error:", error);
    res.status(500).json({ error: error.message });
  }
};

// Get all scores (ADMIN ONLY - includes details)
exports.getAllScores = async (req, res) => {
  try {
    const scores = await Score.find()
      .populate("userId", "username collegeName role")
      .sort({ createdAt: -1 });
    res.status(200).json(scores);
  } catch (error) {
    console.error("Get All Scores Error:", error);
    res.status(500).json({ error: error.message });
  }
};
