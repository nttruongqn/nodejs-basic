const express = require("express");
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);

initWebRoute(app);

// app.get("/", (req, res) => {
//   res.render("index.ejs");
// });

app.listen(port, () => {
  console.log(`crush not be long to me at http://localhost:${port}`);
});
