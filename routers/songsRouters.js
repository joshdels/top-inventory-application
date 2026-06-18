const { Router } = require("express");
const {
  songsGenreListGet,
  songsByGenreGet,
  songAddPost,
  songAddGet,
} = require("../controllers/songsControllers");

const songsRouter = Router();

songsRouter.get("/", songsGenreListGet);
songsRouter.get("/songs/:genre", songsByGenreGet);
songsRouter.get("add-song/:genre", songAddGet);
// songsRouter.post("add", songAddPost);

module.exports = songsRouter;
