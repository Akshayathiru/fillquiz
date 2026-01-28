const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  name: String,
  college: String,
  score: Number,
  grade: String,
});

module.exports = mongoose.model("Result", resultSchema);
