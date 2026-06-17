const db = require("../db/queries");

async function songsListGet(req, res) {
  const songs = await db.getAllSongs();
  const genres = await db.getSongGenre();

  res.render("index", {
    songs: songs,
    genres: genres,
    selectedGenres: Array.isArray(genres) ? genres : [genres],
  });
}

async function songsListFilterGet(req, res) {
  const { input } = req.query;
  const filterSongs = await db.getSearchSongname(input);
  const genres = await db.getSongGenre();

  res.render("index", {
    songs: filterSongs,
    genres: genres,
    selectedGenres: Array.isArray(genres) ? genres : [genres],
  });
}

async function songsListGenreFilterPost(req, res) {
  let { genres } = req.body;

  if (!genres) {
    return res.redirect("/");
  }

  const songsByGenre = await db.postSongsbyGenre(genres);
  const allGenres = await db.getSongGenre();

  res.render("index", {
    songs: songsByGenre,
    genres: allGenres,
    selectedGenres: Array.isArray(genres) ? genres : [genres],
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
  songsListGenreFilterPost,
};
