const tableName = 'cars';

exports.seed = knex => knex(tableName).del()
  .then(() => knex(tableName).insert([
    {
      brand: 'Opel',
      year: new Date(2014, 0, 2),
      ownerId: 1,
    },
    {
      brand: 'Mercedes',
      year: new Date(2010, 2, 22),
      ownerId: 1,
    },
    {
      brand: 'Subaru',
      year: new Date(2008, 5, 22),
      ownerId: 2,
    },
    {
      brand: 'Fiat',
      year: new Date(1996, 2, 22),
      ownerId: 3,
    },
  ]));
