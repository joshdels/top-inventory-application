const pool = require("./pool");

async function getSongGenre() {
  const { rows } = await pool.query("SELECT DISTINCT(genre) FROM songs");
  return rows;
}

async function getSongsByGenre(genre) {
  const { rows } = await pool.query("SELECT * FROM songs WHERE genre = $1", [genre]);
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
  await pool.query(`
    INSERT INTO songs (
      name, album, artist, date_release, genre, image_url
    )
    VALUES (
    '${name}', '${album}', '${artist}', '${date_release}', '${genre}', '${image_url} 
    )  
  `);
}





// reference


async function postSongsbyGenre(genres) {
  const { rows } = await pool.query(
    `
    SELECT * FROM songs
    WHERE genre = ANY($1)
    `,
    [Array.isArray(genres) ? genres : [genres]],
  );

  return rows;
}

async function getSongbyId(id) {
  const { rows } = await pool.query("SELECT * FROM songs WHERE  id = $1", [id]);
  return rows;
}



async function postDeleteSongById() {
  await pool.query()
}

async function postDeleteAllSongs() {
  await pool.query("DELETE FROM songs");
}



module.exports = {
  getSongGenre,
  getSongsByGenre,
  postNewSong,



  postDeleteAllSongs,
  postSongsbyGenre,
  getSongbyId,
};
