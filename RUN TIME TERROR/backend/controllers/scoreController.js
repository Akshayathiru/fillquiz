const Score = require("../models/Score");

// Add score
exports.addScore = async (req, res) => {
  try {
    const { name, college, score } = req.body;

    const newScore = new Score({ name, college, score });
    await newScore.save();

    res.status(201).json({
      message: "Score added successfully",
      data: newScore,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Get all scores (ADMIN ONLY)
exports.getAllScores = async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1 });
    res.status(200).json(scores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
