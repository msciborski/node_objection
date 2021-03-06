const { Model } = require('objection');
const knex = require('../knex/knex');
const Car = require('./car');

Model.knex(knex);

class Person extends Model {
  static get tableName() {
    return 'persons';
  }

  static get relationMappings() {
    return {
      cars: {
        relation: Model.HasManyRelation,
        modelClass: Car,
        join: {
          from: 'persons.id',
          to: 'cars.ownerId',
        },
      },
    };
  }
}

module.exports = Person;
