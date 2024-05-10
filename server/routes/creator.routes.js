const express = require("express");
const { createGame, updateGame } = require("../controllers/game.controller");
const { getAllUsers } = require("../controllers/user.controller");
const router = express.Router();

//games

router.post("/add_game", createGame);
router.put("/update_game/:gameId", updateGame);

//users

router.get("/get_users", getAllUsers);
router.delete("/delete_game/:gameId", deleteGame);
module.exports = router;
