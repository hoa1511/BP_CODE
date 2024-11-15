'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PackingData extends Model {
    static associate(models) {
      // Định nghĩa các mối quan hệ ở đây nếu cần thiết.
      // Ví dụ: User.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
    }
  }

  PackingData.init({
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    chuyen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    keHoach: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dat: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    loi: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tong: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    chenhLech: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hieuSuat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    station: {
      type: DataTypes.STRING,
      allowNull: false,  // không thể thiếu thông tin trạm
    }
  }, {
    sequelize, // Đối tượng kết nối Sequelize mà bạn truyền vào
    modelName: 'PackingData', // Tên của mô hình (model name), sẽ dùng để tham chiếu khi Sequelize tạo bảng
    tableName: 'PackingDatas', // Tên bảng trong database, nếu không chỉ định, Sequelize sẽ tự động lấy theo số nhiều của model name
    timestamps: false, // Bật thuộc tính này để Sequelize tự động thêm các cột createdAt và updatedAt
    underscored: true // Nếu bật, tên các cột sẽ sử dụng kiểu snake_case thay vì camelCase (e.g., created_at thay vì createdAt)
  });

  return PackingData;
};
