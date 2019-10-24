const {INTEGER, STRING} = require('sequelize');
const {sequelize} = require('../libraries');

module.exports = sequelize.define('Tweet', {
  id: {
    type: INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  content: STRING(300),
  userId: {
    type: Sequelize.INTEGER(11),
    allowNull: false
  }
});
