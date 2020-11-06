const config = require('../knexfile.js');
const knex = require('knex');

knex(config);
// knex.migrate.latest([config])
module.exports = knex;
