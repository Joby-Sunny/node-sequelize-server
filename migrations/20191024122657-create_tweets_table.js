'use strict';
const TWEETS_TABLE = 'tweets';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(TWEETS_TABLE, {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      content: Sequelize.STRING(300),
      userId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(TWEETS_TABLE);
  }
};
