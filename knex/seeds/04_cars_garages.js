const tableName = 'cars_garages';

exports.seed = knex => knex(tableName).del()
  .then(() => knex(tableName).insert([
    {
      id: 1,
      garageId: 1,
      carId: 1,
    },
    {
      id: 2,
      garageId: 1,
      carId: 2,
    },
    {
      id: 3,
      garageId: 1,
      carId: 3,
    },
    {
      id: 4,
      garageId: 2,
      carId: 1,
    },
    {
      id: 5,
      garageId: 3,
      carId: 1,
    },
  ]));
