const { Model } = require('objection');
const knex = require('../knex/knex');
const Person = require('./person');

Model.knex(knex);

class Car extends Model {
  static getTableName() {
    return 'cars';
  }

  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: Person,
        join: {
          from: 'cars.ownerId',
          to: 'persons.id',
        },
      },
    };
  }
}

module.exports = Car;
