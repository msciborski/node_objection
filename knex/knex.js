const Knex = require('knex');

const knexConfig = require('../knexfile');

module.exports = Knex(knexConfig.development);
