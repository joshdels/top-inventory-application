const pool = require("./pool");

async function getAllSongs() {
  const { rows } = await pool.query("SELECT * FROM songs");
  return rows;
}

async function getSearchSongname() {
  const { rows } = await pool.query("SELECT * FROM songs WHERE LIKE $1", [
    `%${input}%`,
  ]);

  return rows
}

async function postDeleteAllSongs() {
  await pool.query("DELETE FROM usernames");
}


