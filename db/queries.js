const pool = require("./pool");

async function getAllSongs() {
  const { rows } = await pool.query("SELECT * FROM songs");
  return rows;
}

async function getSearchSongname(input) {
  const { rows } = await pool.query("SELECT * FROM songs WHERE name ILIKE $1", [
    `%${input}%`,
  ]);

  return rows;
}

async function getSongGenre() {
  const { rows } = await pool.query("SELECT DISTINCT(genre) FROM songs");
  return rows;
}

async function postFilterGenre(input) {
  const { rows } = await pool.query(
    "SELECT * FROM songs WHERE  genre LIKE $1",
    [`%${input}%`],
  );

  return rows;
}

async function postDeleteAllSongs() {
  await pool.query("DELETE FROM songs");
}

module.exports = {
  getAllSongs,
  getSearchSongname,
  getSongGenre,
  postDeleteAllSongs,
};
