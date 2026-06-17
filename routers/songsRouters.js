const { Router } = require("express");
const {
  songsListGet,
  songsListFilterGet,
  songsDeleteAllPost,
} = require("../controllers/songsControllers");

const songsRouter = Router();

songsRouter.get("/", songsListGet);
songsRouter.get("/search", songsListFilterGet);
songsRouter.get("/delete", songsDeleteAllPost);
// songsRouter.get("/new");
// songsRouter.post("/new");
// songsRouter.get("/update");
// songsRouter.post("/update");

module.exports = songsRouter;
