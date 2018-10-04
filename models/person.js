const { Model } = require('objection');
const knex = require('../knex/knex');

Model.knex(knex);

class Person extends Model {
  static get tableName() {
    return 'persons';
  }
}

module.exports = Person;
