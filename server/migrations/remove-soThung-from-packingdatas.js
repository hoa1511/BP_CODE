'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Remove the 'soThung' column from the 'PackingDatas' table
    await queryInterface.removeColumn('PackingDatas', 'soThung');
  },

  down: async (queryInterface, Sequelize) => {
    // Re-add the 'soThung' column to the 'PackingDatas' table if this migration is rolled back
    await queryInterface.addColumn('PackingDatas', 'soThung', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  }
};
