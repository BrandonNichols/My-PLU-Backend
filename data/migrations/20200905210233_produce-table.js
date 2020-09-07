exports.up = function (knex) {
  return knex.schema.createTable("produce", function (table) {
    table.string("PLU").primary();
    table.string("CATEGORY").notNullable();
    table.string("COMMODITY").notNullable();
    table.string("VARIETY").notNullable();
    table.string("SIZE").notNullable();
    table.string("MEASUREMENTS: NORTH AMERICA");
    table.string("MEASUREMENTS: REST OF WORLD");
    table.string("RESTRICTIONS / NOTES");
    table.string("BOTANICAL NAME").notNullable();
    table.string("AKA");
    table.string("REVISION DATE").notNullable();
    table.string("DATE ADDED").notNullable();
    table.string("GPC");
    table.string("IMAGE");
    table.string("IMAGE_SOURCE");
    table.string("EMPTY_FIELD_1");
    table.string("EMPTY_FIELD_2");
    table.string("EMPTY_FIELD_3");
    table.string("EMPTY_FIELD_4");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("produce");
};
