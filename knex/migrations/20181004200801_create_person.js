
exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('persons', (table) => {
    table.increments('id').primary();
    table.string('firstName');
  }),
]);


exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTableIfExists('persons'),
]);
