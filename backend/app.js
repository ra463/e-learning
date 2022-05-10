const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload")

if (process.env.NODE_URL !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// using middleware

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// import routes

const user = require("./routes/UserRoutes");

app.use("/api/v1", user);

module.exports = app;
