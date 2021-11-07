const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("crush not be long to me");
});

app.listen(port, () => {
  console.log(`crush not be long to me at http://localhost:${port}`);
});
