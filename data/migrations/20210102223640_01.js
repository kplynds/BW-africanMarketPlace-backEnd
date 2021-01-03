exports.up = function (knex) {
  return knex.schema
    .createTable("owners", (tbl) => {
      tbl.increments("owner_id");
      tbl.string("owner_username", 128).notNullable().unique();
      tbl.string("store_name", 128).notNullable();
      tbl.string("owner_password", 128).notNullable();
      tbl.string("store_category", 128).notNullable();
    })
    .createTable("items", (tbl) => {
      tbl.increments("item_id");
      tbl
        .integer("owner_id")
        .unsigned()
        .notNullable()
        .references("owner_id")
        .inTable("owners")
        .onDelete("RESTRICT");
      tbl.string("item_name", 128).notNullable();
      tbl.integer("item_price").notNullable();
      tbl.string("item_description", 500).notNullable();
    })
    .createTable("users", (tbl) => {
      tbl.increments("user_id");
      tbl.string("user_username", 128).notNullable().unique();
      tbl.string("user_password", 128).notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("owners")
    .dropTableIfExists("items")
    .dropTableIfExists("users");
};
