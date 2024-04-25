const Game = require("../models/Game.model");
const uploadFile = require("../utils/uploadFile");

const createGame = async (req, res) => {
  try {
    const { name, description, hint, level, type } = req.body;
    const { image, solution } = req.files;
    const imagePath = `games-images/${uploadFile(image, "games-images")}`;
    const solutionPath = `games-solutions/${uploadFile(
      solution,
      "games-solutions"
    )}`;

    const newGame = await Game.create({
      name: name,
      description: description,
      image: imagePath,
      solution: solutionPath,
      hint: hint,
      level: level,
      type: type,
    });

    res.status(201).json(newGame);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating game");
  }
};

const getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching games" });
  }
};

const updateGame = async (req, res) => {
  const { gameId } = req.params;
  const updates = req.body;
  const { image, solution } = req.files;
  let imagePath = "";
  let solutionPath = "";
  if (image) {
    imagePath = `games-images/${uploadFile(image, "games-images")}`;
  }
  if (solution) {
    solutionPath = `games-solutions/${uploadFile(solution, "games-solutions")}`;
  }

  try {
    const updatedGame = await Game.findByIdAndUpdate(
      gameId,
      { ...updates, imagePath, solutionPath },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedGame) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.json(updatedGame);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error updating game" });
  }
};

const deleteGame = async (req, res) => {
  const { gameId } = req.params;

  try {
    const deletedGame = await Game.findByIdAndDelete(gameId);
    if (!deletedGame) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.json({ message: "Game deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting game" });
  }
};

module.exports = { createGame, getAllGames, updateGame, deleteGame };
