const {INTEGER, STRING} = require('sequelize');
const {sequelize} = require('../libraries').database;

module.exports = sequelize.define('tweet', {
  id: {
    type: INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  content: STRING(300),
  userId: {
    type: INTEGER(11),
    allowNull: false
  }
});
