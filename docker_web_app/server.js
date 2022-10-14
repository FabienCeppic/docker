"use strict";

const express = require("express");

// Constants
const PORT = 3478;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Bonjour");
});

app.listen(PORT, HOST, () => {
  console.log(`Tourne sur http://${HOST}:${PORT}`);
});
