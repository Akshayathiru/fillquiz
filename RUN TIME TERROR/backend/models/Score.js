const mongoose = require("mongoose");
const { scoreSchema } = require("./scoreSchema");

module.exports = mongoose.model("Score", scoreSchema);
