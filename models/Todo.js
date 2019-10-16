const Sequeize = require('sequelize');
const {sequelize} = require('../libraries');

module.exports = sequelize.define('Todo', {
  id: {
    type: Sequeize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequeize.STRING(120),
    allowNull: false
  },
  description: {
    type: Sequeize.STRING(420),
    allowNull: false
  },
});