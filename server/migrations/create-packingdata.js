'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PackingDatas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      chuyen: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      keHoach: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      soThung: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dat: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      loi: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tong: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      chenhLech: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hieuSuat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      station: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PackingDatas');
  }
};
