const tableName = 'persons';

exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    table.string('firstName');
  }),
]);


exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTableIfExists(tableName),
]);
