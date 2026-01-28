const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST: save form data
router.post("/", async (req, res) => {
  try {
    const { fullName, collegeName, year, course, phoneNumber } = req.body;

    const newUser = new User({
      fullName,
      collegeName,
      year,
      course,
      phoneNumber,
    });

    await newUser.save();

    res.status(201).json({
      message: "User details saved successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: view all entries (for YOU)
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
