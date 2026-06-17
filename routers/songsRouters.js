const { Router } = require("express");
const {
  songsListGet,
  songsListFilterGet,
  songsDeleteAllPost,
  songsListGenreFilterPost,
} = require("../controllers/songsControllers");

const songsRouter = Router();

songsRouter.get("/", songsListGet);
songsRouter.get("/search", songsListFilterGet);
songsRouter.get("/delete", songsDeleteAllPost);
songsRouter.post("/filter", songsListGenreFilterPost);

module.exports = songsRouter;
