'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StorageDatas', {
      stt: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      maPallet: {
        type: Sequelize.STRING,
        allowNull: false
      },
      viTriLuu: {
        type: Sequelize.STRING,
        allowNull: false
      },
      soThung: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      loai: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nuocXuatKhau: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tinhTrang: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ngayNhap: {
        type: Sequelize.DATE,
        allowNull: false
      },
      ngayXuat: {
        type: Sequelize.DATE,
        allowNull: true
      },
      thoiGianLuuKho: {
        type: Sequelize.STRING,
        allowNull: false
      }

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('StorageDatas');
  }
};
