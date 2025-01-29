const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.send("API runnning");
});

app.listen(PORT, () => {
  console.log("Server running");
});
