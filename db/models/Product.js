const bookshelf = require("../bookshelf");

class Product extends bookshelf.Model {
  get tableName() {
    return "products"; //connects this model to the table
  } //immutable naming convention, bookshelf uses this behind the scenes to apply the User class's "language" to the users table;
  get hasTimestamps() {
    return true;
  } //immutable naming convention, bookshelf uses this behind the scenes to tell SQL that this table has created_at and updated_at;
}

module.exports = bookshelf.model("Product", Product); //adds the User class to the bookshelf.plugin('registry');
