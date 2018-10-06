// const Knex = require('knex');
// const { Model } = require('objection');

// const knexConfig = require('./knexfile');

// const knex = Knex(knexConfig.development);

// Model.knex(knex);

const Person = require('./models/person');

const main = async () => {
  // const cars = await Car.query();
  const person = await Person
    .query()
    .join('cars', 'persons.id', 'cars.ownerId')
    .where('cars.brand', 'Subaru')
    .first();
  const personWithCarInGarage2 = await Person
    .query()
    .join('cars', 'persons.id', 'cars.ownerId')
    .join('cars_garages', 'cars_garages.carId', 'cars.id')
    .join('garages', 'garages.id', 'cars_garages.garageId')
    .where('garages.id', 2)
    .first();
  // console.log(cars.length);
  console.log(personWithCarInGarage2);
};

main();
