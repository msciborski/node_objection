const { Model } = require('objection');
const knex = require('../knex/knex');

Model.knex(knex);

class Person extends Model {
  static get tableName() {
    return 'persons';
  }

  static get relationMappings() {
    return {
      cars: {
        relation: Model.HasManyRelation,
        modelClass: Model.Cars,
        join: {
          from: 'persons.id',
          to: 'cars.ownerId',
        },
      },
    };
  }
}

module.exports = Person;
