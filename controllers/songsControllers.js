const db = require("../db/queries");

async function songsGenreListGet(req, res) {
  const genres = await db.getSongGenre();

  res.render("index", {
    genres: genres,
  });
}

async function songsByGenreGet(req, res) {
  const { genre } = req.params;
  console.log(genre);

  const songs = await db.getSongsByGenre(genre);
  console.log(songs);

  res.render("genre", {
    genre: genre,
    songs: songs,
  });
}

async function songAddGet(req, res) {
  res.render("songForm")
}

async function songAddPost(req, res) {
  const { name, album, artist, date_release, genre, image_url } = req.params;

  await db.postNewSong(name, album, artist, date_release, genre, image_url);

  res.redirect("/");
}



// reference and cleaned
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

async function songsDeleteAllPost(req, res) {
  await db.postDeleteAllSongs();
  res.redirect("/");
}

async function songsEditGet(req, res) {
  const songs = await db.getAllSongs();

  res.render("edit", {
    songs: songs,
  });
}

// ID // edit a song maybe?
async function songEditGet(req, res) {
  const { id } = req.params;

  await db.getSongbyId(id);

  res.render("editSong", {
    songs: songs,
  });
}



module.exports = {
  songsGenreListGet,
  songsByGenreGet,
  songAddGet,
  songAddPost,
};
