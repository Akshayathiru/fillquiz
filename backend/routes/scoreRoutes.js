const express = require("express");
const router = express.Router();
const scoreController = require("../controllers/scoreController");
const authMiddleware = require("../middleware/authMiddleware");

// Add score (protected route)
router.post("/add",scoreController.addScore);

// Get all scores (protected route - admin only)
router.get("/", scoreController.getAllScores);

module.exports = router;
