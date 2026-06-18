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
  'https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Blinding_Lights_%28Country_Version%29.jpeg/250px-Blinding_Lights_%28Country_Version%29.jpeg'
),
(
  'Flowers',
  'Endless Summer Vacation',
  'Miley Cyrus',
  '2023-01-12',
  'Pop',
  'https://m.media-amazon.com/images/M/MV5BYzU3ZTFkZDctYmNlNi00ZjMxLTgwNGItYTI1YjdmOWJiNTQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
),
(
  'Espresso',
  'Short n'' Sweet',
  'Sabrina Carpenter',
  '2024-04-11',
  'Pop',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFaIj696Hx3AiLaiwHIrfsRJOgIJMhJVG6IA&s'
),
(
  'Shape of You',
  '÷ (Divide)',
  'Ed Sheeran',
  '2017-01-06',
  'Pop',
  'https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png'
),
(
  'Bad Guy',
  'When We All Fall Asleep, Where Do We Go?',
  'Billie Eilish',
  '2019-03-29',
  'Electropop',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjodsW5KE5C0acg3ke1LYpaX5kN7clERS8_w&s'
);
`;

async function main() {
  console.log("Seeding...");

  if (process.env.NODE_ENV === "production") {
    console.log("Producation");

    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
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
  } else {
    console.log("Development");
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
}

main();
