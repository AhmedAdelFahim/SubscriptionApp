"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const { xss } = require("express-xss-sanitizer");
const cors = require("cors");
const routes = require("../routes/v1/index");
const { ErrorHandler } = require("../middlewares/ErrorHandler");

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(bodyParser.json({ limit: "1kb" }));
// app.use(bodyParser.urlencoded({ extended: true, limit: "1kb" }));
app.use(xss());

// middleware that logs requests method and the url requested.
app.use((req, res, next) => {
  const date = new Date().toISOString().split("T");
  console.log(`\n\n${date[0]} ${date[1]}`);
  console.log(`new request, its method: ${req.method}`);
  console.log(`the url requested: ${req.url}\n`);
  next();
});

app.use("/v1", routes);
app.use(ErrorHandler);
module.exports = app;
