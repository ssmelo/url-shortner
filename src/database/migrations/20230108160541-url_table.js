'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('url', {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        primaryKey: true,
      },
      shortURL: {
        type: Sequelize.DataTypes.STRING(2048),
        allowNull: false
      },
      longURL: {
        type: Sequelize.DataTypes.STRING(2048),
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("url");
  }
};
