exports.up = function (knex) {
  return knex.schema.createTable("produce", function (table) {
    table.string("PLU").primary();
    table.string("CATEGORY").notNullable();
    table.string("COMMODITY").notNullable();
    table.string("VARIETY").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("produce");
};
