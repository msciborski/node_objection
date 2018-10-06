const tableName = 'garages';

exports.seed = knex => knex(tableName).del()
  .then(() => knex(tableName).insert([
    {
      id: 1,
      address: 'Osiedlowa 24, Poznan',
      capacity: 4,
    },
    {
      id: 2,
      address: 'Testowy adres, Poznan',
      capacity: 3,
    },
    {
      id: 3,
      address: 'Poznanska 24, Swarzedz',
      capacity: 10,
    },
    {
      id: 4,
      address: 'Swarzedzka 69, Poznan',
      capacity: 3,
    },
  ]));
