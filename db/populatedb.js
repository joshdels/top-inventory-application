require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS songs (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255),
  album VARCHAR(255),
  artist VARCHAR(255),
  date_release DATE,
  genre VARCHAR(255),
  image_url VARCHAR(255)
);

INSERT INTO songs (
  name,
  album,
  artist,
  date_release,
  genre,
  image_url
)
VALUES
(
  'Blinding Lights',
  'After Hours',
  'The Weeknd',
  '2019-11-29',
  'Synth-pop',
  'https://example.com/blinding-lights.jpg'
),
(
  'Flowers',
  'Endless Summer Vacation',
  'Miley Cyrus',
  '2023-01-12',
  'Pop',
  'https://example.com/flowers.jpg'
),
(
  'Espresso',
  'Short n'' Sweet',
  'Sabrina Carpenter',
  '2024-04-11',
  'Pop',
  'https://example.com/espresso.jpg'
),
(
  'Shape of You',
  '÷ (Divide)',
  'Ed Sheeran',
  '2017-01-06',
  'Pop',
  'https://example.com/shape-of-you.jpg'
),
(
  'Bad Guy',
  'When We All Fall Asleep, Where Do We Go?',
  'Billie Eilish',
  '2019-03-29',
  'Electropop',
  'https://example.com/bad-guy.jpg'
);
`;

async function main() {
  console.log("Seeding...");

  const client = new Client({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
  });

  try {
    await client.connect();

    await client.query(SQL);

    console.log("Done");
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
