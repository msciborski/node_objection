const tableName = 'cars';

exports.seed = knex => knex(tableName).del()
  .then(() => knex(tableName).insert([
    {
      id: 1,
      brand: 'Opel',
      year: new Date(2014, 0, 2),
      ownerId: 1,
    },
    {
      id: 2,
      brand: 'Mercedes',
      year: new Date(2010, 2, 22),
      ownerId: 1,
    },
    {
      id: 3,
      brand: 'Subaru',
      year: new Date(2008, 5, 22),
      ownerId: 2,
    },
    {
      id: 4,
      brand: 'Fiat',
      year: new Date(1996, 2, 22),
      ownerId: 3,
    },
  ]));
