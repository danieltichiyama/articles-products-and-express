//adds a db property to req objects that contains all of the models created;
const Product = require("./models/Product");
const Article = require("./models/Article");

module.exports = function(req, res, next) {
  req.db = {
    Product: Product,
    Article: Article
  };

  next();
};
