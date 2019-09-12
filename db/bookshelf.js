const knex = require("./knex");
const bookshelf = require("bookshelf")(knex);
bookshelf.plugin("registry"); //register your models and collections in a central location so you can call them without dependency issues.
module.exports = bookshelf;
