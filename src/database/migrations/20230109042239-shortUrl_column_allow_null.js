'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('url', 'shortURL', {
      type: DataTypes.STRING(2048),
      allowNull: true
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('url', 'shortURL', {
      type: DataTypes.STRING(2048),
      allowNull: false
    })
  }
};
