const pool = require("./pool");

async function getSongGenre() {
  const { rows } = await pool.query("SELECT DISTINCT(genre) FROM songs");
  return rows;
}

async function getSongsByGenre(genre) {
  const { rows } = await pool.query("SELECT * FROM songs WHERE genre = $1", [
    genre,
  ]);
  return rows;
}

async function postNewSong(
  name,
  album,
  artist,
  date_release,
  genre,
  image_url,
) {
  await pool.query(
    `
    INSERT INTO songs (
      name, album, artist, date_release, genre, image_url
    )
    VALUES (
      $1, $2, $3, $4, $5, $6
    )  
  `,
    [name, album, artist, date_release, genre, image_url],
  );
}

async function postDeleteAllSongs() {
  await pool.query("DELETE FROM songs");
}

async function postDeleteSongsById(id) {
  await pool.query("DELETE FROM songs WHERE id = $1", [id]);
}

async function getSongById(id) {
  const { rows } = await pool.query("SELECT * FROM songs WHERE id = $1", [id]);
  return rows[0];
}

async function postEditSongById(
  id,
  name,
  album,
  artist,
  date_release,
  genre,
  image_url,
) {
  await pool.query(
    `
    UPDATE songs 
    SET name= $2, album= $3, artist= $4, date_release = $5, genre = $6, image_url = $7
    WHERE id = $1
    `,
    [id, name, album, artist, date_release, genre, image_url],
  );
}

module.exports = {
  getSongGenre,
  getSongsByGenre,
  postNewSong,
  postDeleteAllSongs,
  postDeleteSongsById,
  getSongById,
  postEditSongById,
};
