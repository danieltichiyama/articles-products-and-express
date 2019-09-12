exports.up = function(knex, Promise) {
  return knex.schema.createTable("articles", table => {
    table.string("title").notNullable();
    table.string("author").notNullable();
    table.text("body").notNullable();
    table.timestamps(true, true);
    table
      .string("urlTitle")
      .notNullable()
      .primary();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("articles");
};
