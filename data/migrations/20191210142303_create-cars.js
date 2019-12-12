exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.text('VIN', 128).unique().notNullable();
    tbl.text('make', 128).index().notNullable();
    tbl.text('model', 128).index().notNullable();
    tbl.decimal('mileage', 128).notNullable();
    tbl.text('transmission_type', 128)
    tbl.text('status_of_title', 128)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
