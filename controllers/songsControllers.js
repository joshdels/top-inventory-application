const db = require("../db/queries");

async function songsListGet(req, res) {
  const songs = await db.getAllSongs();
  const genres = await db.getSongGenre();

  console.log(genres)

  res.render("index", {
    songs: songs,
    genres: genres,
  });
}

async function songsListFilterGet(req, res) {
  const { input } = req.query;
  const filterSongs = await db.getSearchSongname(input);

  res.render("index", {
    songs: filterSongs,
  });
}

async function songsDeleteAllPost(req, res) {
  await db.postDeleteAllSongs();
  res.redirect("/");
}

module.exports = {
  songsListGet,
  songsListFilterGet,
  songsDeleteAllPost,
};
