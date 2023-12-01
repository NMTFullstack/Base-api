var cors = require("cors");
var path = require("path");
var logger = require("morgan");
const dotenv = require("dotenv");
const express = require("express");
var createError = require("http-errors");
var cookieParser = require("cookie-parser");
const { default: mongoose } = require("mongoose");

dotenv.config();

const app = express();
const post = process.env.PORT;
var qlcRouter = require("./routers/qlc");

app.get("/", qlcRouter);
const DB_URL = "mongodb://localhost:27017/";
mongoose
  .connect(DB_URL)
  .then(() => console.log("App: DB Connected!"))
  .catch((error) =>
    console.log("App QLC: DB connection error:", error.message)
  );
app.listen(post, () => {
  console.log(`[server]: Server is running at http://localhost:8001`);
});
