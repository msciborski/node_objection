const { Model } = require('objection');
const knex = require('../knex/knex');
const Car = require('./car');

Model.knex(knex);

class Garage extends Model {
  static get tableName() {
    return 'garages';
  }

  static get relationMappings() {
    return {
      cars: {
        relation: Model.ManyToManyRelation,
        modelClass: Car,
        join: {
          from: 'garages.id',
          through: {
            from: 'cars_garages.garagesId',
            to: 'cars_garages.carsId',
          },
        },
        to: 'cars.id',
      },
    };
  }
}

module.exports = Garage;
