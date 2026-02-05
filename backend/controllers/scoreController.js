const Score = require("../models/Score");

// Add score
exports.addScore = async (req, res) => {
  try {
    const { userId, score, timeSpent, results } = req.body;

    // Check if user has already submitted a score
    const existingScore = await Score.findOne({ userId });
    if (existingScore) {
      return res.status(409).json({
        error: "Score already submitted. You can only submit once."
      });
    }

    const newScore = new Score({
      userId,
      score,
      timeSpent: timeSpent || 0,
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
      .populate("userId", "username collegeName")
      .sort({ score: -1, timeSpent: 1 }); // Sort by score descending, then by time spent ascending

    // Format response with clean user details only
    const formattedScores = scores.map((scoreDoc, index) => ({
      rank: index + 1,
      username: scoreDoc.userId?.username || "Unknown",
      collegeName: scoreDoc.userId?.collegeName || "N/A",
      score: scoreDoc.score,
      timeSpent: scoreDoc.timeSpent
    }));

    res.status(200).json(formattedScores);
  } catch (error) {
    console.error("Get All Scores Error:", error);
    res.status(500).json({ error: error.message });
  }
};

// Get top scores for public leaderboard
exports.getLeaderboard = async (req, res) => {
  try {
    const scores = await Score.find()
      .populate("userId", "username")
      .sort({ score: -1, timeSpent: 1 })
      .limit(10);

    const formattedLeaderboard = scores.map(s => ({
      _id: s._id,
      username: s.userId?.username || "Unknown",
      highestScore: s.score
    }));

    res.status(200).json(formattedLeaderboard);
  } catch (error) {
    console.error("Leaderboard Error:", error);
    res.status(500).json({ error: error.message });
  }
};
// Reset all scores (ADMIN ONLY)
exports.resetScores = async (req, res) => {
  try {
    await Score.deleteMany({});
    res.status(200).json({ message: "Leaderboard cleared successfully" });
  } catch (error) {
    console.error("Reset Scores Error:", error);
    res.status(500).json({ error: error.message });
  }
};
