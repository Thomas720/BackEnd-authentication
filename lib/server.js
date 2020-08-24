"use strict";

// Esoteric Resources
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

//Internal Resources
const authRouter = require("./routes/auth-routes.js");

//Application_wide Middleware
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res, next) => {
  res.send(
    '<body bgcolor="#e88282"><h1>This Application is a back-end app only <br> <h2>Authentication</h2><h3 style="color: #f0e9e9;">Express server that implements Basic Authentication.<br> Users should be able to sign up and sign in to my server with thier user data being safely stored in MongoDB.</h3><br><h4 style="color: #1f1a1a;">Author: Thomas Tilahun</h4>'
  );
});

app.use(authRouter);

module.exports = {
  server: app,
  start: (port, mongodb_uri) => {
    app.listen(port, () => {
      console.log("Server is Running Keep Doing Thomas", port);
    });
    let options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    mongoose.connect(mongodb_uri, options);
  },
};
