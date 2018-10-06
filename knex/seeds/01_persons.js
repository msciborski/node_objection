const tableName = 'persons';

exports.seed = knex => knex(tableName).del()
  .then(() => knex(tableName).insert([
    {
      id: 1,
      firstName: 'Michal',
    },
    {
      id: 2,
      firstName: 'Norbert',
    },
    {
      id: 3,
      firstName: 'Arek',
    },
  ]));
