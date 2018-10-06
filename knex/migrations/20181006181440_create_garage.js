const tableName = 'garages';
const associationTableName = 'cars_garages';

exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    table.string('address');
    table
      .integer('capacity')
      .unsigned();
  }),
  knex.schema.createTable(associationTableName, (table) => {
    table.increments('id').primary();
    table
      .integer('garageId')
      .unsigned()
      .references('id')
      .inTable('garages');
    table
      .integer('carId')
      .unsigned()
      .references('id')
      .inTable('cars');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTableIfExists(tableName),
  knex.schema.dropTableIfExists(associationTableName),
]);
