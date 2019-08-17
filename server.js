"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server started on PORT:${PORT}`);
});
