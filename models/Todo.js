const sequelize = require('sequelize');
const {sequelize} = require('../libraries');

module.exports = sequelize.define('Todo', {
  id: {
    type: sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: sequelize.STRING(120),
    allowNull: false
  },
  description: {
    type: sequelize.STRING(420),
    allowNull: false
  },
});