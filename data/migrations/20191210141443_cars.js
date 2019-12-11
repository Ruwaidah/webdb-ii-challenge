exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("VIN", 255)
      .unique()
      .notNullable();

    tbl.string("model", 255).notNullable();

    tbl.integer("make").notNullable();

    tbl.integer("year").notNullable();

    tbl.integer("mileage").notNullable();

    tbl.string("title");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
