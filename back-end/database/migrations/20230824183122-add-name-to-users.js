'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Users',
      'name',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    );
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'Users',
      'name',
    );
  }
};
