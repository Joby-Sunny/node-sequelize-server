const Sequelize = require('sequelize');
const chalk = require('chalk');
const config = require('./config/config');
const database = {};

function sequelizeLogging(string) {
  console.log(
    chalk.blue('Sequelize : ') + chalk.yellow('[' + string + ']') + '\n'
  );
}

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
    logging: sequelizeLogging
  }
);

database['sequelize'] = sequelize;
database['Sequelize'] = Sequelize;

module.exports = database;
