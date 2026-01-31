const express = require("express");
const router = express.Router();
const scoreController = require("../controllers/scoreController");

// Add score
router.post("/add", scoreController.addScore);

// Get all scores
router.get("/", scoreController.getAllScores);

module.exports = router;
