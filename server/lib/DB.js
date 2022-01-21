const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const URI = process.env.URI || null;

const dbConnection = async () => {
  if (!URI) console.log("[DB] URI is Required on .env file");
  else {
    await mongoose
      .connect(URI)
      .then(() => {
        console.log("[DB] Connected");
      })
      .catch((err) => {
        console.log("[DB Error]" + err);
      });
  }
};

module.exports = dbConnection;
