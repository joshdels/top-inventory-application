require("dotenv").config();
const express = require("express");
const path = require("node:path");
const songsRouter = require("./routers/songsRouters");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", songsRouter);

const PORT = process.env.APP_PORT|| 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Express app listening on port ${PORT}`);
});
