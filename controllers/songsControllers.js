const db = require("../db/queries");

async function songsGenreListGet(req, res) {
  const genres = await db.getSongGenre();

  res.render("index", {
    genres: genres,
  });
}

async function songsByGenreGet(req, res) {
  const { genre } = req.params;
  const songs = await db.getSongsByGenre(genre);

  res.render("genre", {
    genre: genre,
    songs: songs,
  });
}

async function songAddGet(req, res) {
  const { genre } = req.params;

  res.render("songForm", {
    genre: genre,
  });
}

async function songAddPost(req, res) {
  const { name, album, artist, date_release, image_url } = req.body;
  const { genre } = req.params;

  await db.postNewSong(name, album, artist, date_release, genre, image_url);

  res.redirect("/");
}

async function songsDeleteAllPost(req, res) {
  await db.postDeleteAllSongs();
  res.redirect("/");
}

async function songsDeleteById(req, res) {
  const { id, genre } = req.params;

  await db.postDeleteSongsById(id);
  res.redirect(`/songs/${genre}`);
}

async function songsEditByIdGet(req, res) {
  const { id, genre } = req.params;
  const song = await db.getSongById(id);

  res.render("editForm", {
    song: song,
    genre: genre,
  });
}

async function songsEditByIdPost(req, res) {
  try {
    const { id, genre } = req.params;
    const { name, album, artist, date_release, image_url } =
      req.body;

    await db.postEditSongById(
      id,
      name,
      album,
      artist,
      date_release,
      genre,
      image_url,
    );

    res.redirect(`/songs/${genre}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Update failed");
  }
}

module.exports = {
  songsGenreListGet,
  songsByGenreGet,
  songAddGet,
  songAddPost,
  songsDeleteAllPost,
  songsDeleteById,
  songsEditByIdGet,
  songsEditByIdPost,
};
