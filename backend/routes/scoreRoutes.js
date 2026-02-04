const express = require("express");
const router = express.Router();
const scoreController = require("../controllers/scoreController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/admin");

// Add score (protected route)
router.post("/add", authMiddleware, scoreController.addScore);

// Get top scores for public leaderboard (no auth required)
router.get("/leaderboard", scoreController.getLeaderboard);

// Get all scores (protected route - admin only)
router.get("/", authMiddleware, adminMiddleware, scoreController.getAllScores);

module.exports = router;
