const mongoose = require("mongoose");
const { modelSchema, Model } = require("./machineModel.model");

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required",
  },
  description: {
    type: String,
    required: "Description is required",
  },
  image: {
    type: String,
    required: "Image is required",
  },
  solution: {
    type: String,
    required: "Solution is required",
  },
  hint: {
    type: String,
    required: "Hint is required",
  },
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    required: "Level is required",
  },
  order: {
    type: Number,
    required: "order is required",
  },
  type: {
    type: String,
    enum: ["text", "image", "numbers"],
    required: "Type is required",
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  model: {
    type: modelSchema,
    default: Model,
  },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
