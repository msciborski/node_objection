const Knex = require('knex');
const { Model } = require('objection');

const knexConfig = require('./config/knexConfig');

const knex = Knex(knexConfig.developemnt);

Model.knex(knex);
