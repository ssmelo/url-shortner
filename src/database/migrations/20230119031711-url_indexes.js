'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('url', 'shortURL', {
      type: DataTypes.STRING(2048),
      allowNull: true,
      unique: true
    })
    await queryInterface.changeColumn('url', 'longURL', {
      type: DataTypes.STRING(2048),
      allowNull: false,
      unique: true
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('url', 'shortURL', {
      type: DataTypes.STRING(2048),
      allowNull: true,
      unique: false
    })
    await queryInterface.changeColumn('url', 'longURL', {
      type: DataTypes.STRING(2048),
      allowNull: false,
      unique: false
    })
  }
};
