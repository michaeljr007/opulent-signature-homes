const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome home");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server listening"));
