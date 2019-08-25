"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();
const methodOverride = require("method-override");

const productRoutes = require("./routes/products");
const articleRoutes = require("./routes/articles");

const PORT = 8080;

app.use(express.static("./public"));

app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({ extended: false }));
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use("/", articleRoutes); //uses articles.js router

app.use("/", productRoutes); //uses products.js router

app.listen(PORT, () => {
  console.log(`Server started on PORT:${PORT}`);
});
