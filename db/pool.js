require("dotenv").config();
const { Pool } = require("pg");


if (process.env.NODE_ENV === "production") {
  console.log("Producation")

  module.exports = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  console.log("Development")

  module.exports = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
  });
}
