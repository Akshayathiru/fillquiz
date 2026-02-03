const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        score: {
            type: Number,
            required: true,
        },
        results: {
            type: Array,
            default: [],
        },
    },
    {
        timestamps: true, // automatically adds createdAt & updatedAt
    }
);

module.exports = mongoose.model("Score", scoreSchema);
