
exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('cars', (table) => {
    table.increments('id').primary();
    table.string('brand');
    table.dateTime('year');
    table
      .integer('ownerId')
      .unsigned()
      .references('id')
      .inTable('persons')
      .onDelete('SET NULL');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTableIfExists('cars'),
]);
