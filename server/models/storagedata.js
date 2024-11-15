'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StorageData extends Model {
    static associate(models) {
      // Định nghĩa các mối quan hệ ở đây nếu cần thiết.
      // Ví dụ: User.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
    }
  }

  StorageData.init({
    stt: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    maPallet: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'maPallet' // Khớp với tên cột trong cơ sở dữ liệu
    },
    viTriLuu: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'viTriLuu' // Khớp với tên cột trong cơ sở dữ liệu
    },
    soThung: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'soThung'
    },
    loai: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'loai'
    },
    nuocXuatKhau: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nuocXuatKhau'
    },
    tinhTrang: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'tinhTrang'
    },
    ngayNhap: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'ngayNhap'
    },
    ngayXuat: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'ngayXuat'
    },
    thoiGianLuuKho: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'thoiGianLuuKho'
    }
  }, {
    sequelize, // Đối tượng kết nối Sequelize mà bạn truyền vào
    modelName: 'StorageData', // Tên của mô hình (model name), sẽ dùng để tham chiếu khi Sequelize tạo bảng
    tableName: 'StorageDatas', // Tên bảng trong database, nếu không chỉ định, Sequelize sẽ tự động lấy theo số nhiều của model name
    timestamps: false, // Bật thuộc tính này để Sequelize tự động thêm các cột createdAt và updatedAt
    underscored: true // Nếu bật, tên các cột sẽ sử dụng kiểu snake_case thay vì camelCase (e.g., created_at thay vì createdAt)
  });

  return StorageData;
};
