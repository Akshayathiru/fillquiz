const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "player"],
    default: "player",
  },
  collegeName: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);

