const { Router } = require("express");
const {
  songsGenreListGet,
  songsByGenreGet,
  songAddPost,
  songAddGet,
  songsDeleteAllPost,
  songsDeleteById,
  songsEditByIdGet,
  songsEditByIdPost,
} = require("../controllers/songsControllers");

const songsRouter = Router();

songsRouter.get("/", songsGenreListGet);
songsRouter.get("/songs/:genre", songsByGenreGet);
songsRouter.get("/add-song/:genre", songAddGet);
songsRouter.post("/add-song/:genre", songAddPost);
songsRouter.get("/delete-all", songsDeleteAllPost);
songsRouter.get("/edit-song/:id/:genre", songsEditByIdGet)
songsRouter.post("/edit-song/:id/:genre", songsEditByIdPost);
songsRouter.post("/delete-song/:id/:genre", songsDeleteById);

module.exports = songsRouter;
