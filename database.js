const Sequelize = require('sequelize');
const chalk = require('chalk');
const config = require('./config/config');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    operatorsAliases: config.operatorsAliases
  }
)
  .authenticate()
  .then(() => {
    console.log(chalk.green('Database Connection Successful'));
  })
  .catch(error => {
    console.log(chalk.red('Database Connection Failed'), error);
  });

module.exports = sequelize;
