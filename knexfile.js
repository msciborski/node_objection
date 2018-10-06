const mysqlConfig = require('./config/mysqlConfig');

module.exports = {
  development: {
    client: 'mysql',
    useNullAsDefault: true,
    connection: mysqlConfig.development,
    migrations: {
      directory: './knex/migrations',
    },
    seeds: {
      directory: './knex/seeds',
    },
  },
};
