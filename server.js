"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();

const productRoutes = require("./routes/products");

const PORT = 8080;

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(productRoutes); //uses products.js router

app.listen(PORT, () => {
  console.log(`Server started on PORT:${PORT}`);
});
