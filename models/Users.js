const {INTEGER, STRING} = require('sequelize');
const {sequelize} = require('../libraries');

module.exports = sequelize.define('User', {
  id: {
    type: INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: STRING(35),
    allowNull: false,
    unique: true
  },
  password: {
    type: STRING(20),
    allowNull: false,
    unique: true
  }
});
