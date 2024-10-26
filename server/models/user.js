'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Định nghĩa các mối quan hệ ở đây nếu cần thiết.
      // Ví dụ: User.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
    }
  }

  User.init({
    // Thuộc tính 'name' của người dùng
    name: {
      type: DataTypes.STRING, // Kiểu dữ liệu là chuỗi (string)
      allowNull: false // Không được phép null, tức là giá trị bắt buộc
    },
    // Thuộc tính 'email' của người dùng
    email: {
      type: DataTypes.STRING, // Kiểu dữ liệu là chuỗi (string)
      allowNull: false, // Không được phép null, tức là giá trị bắt buộc
      unique: true, // Giá trị phải là duy nhất trong toàn bộ bảng (không có email trùng lặp)
      validate: {
        isEmail: true // Xác thực định dạng phải là email hợp lệ
      }
    },
    // Thuộc tính 'password' của người dùng
    password: {
      type: DataTypes.STRING, // Kiểu dữ liệu là chuỗi (string)
      allowNull: false // Không được phép null, tức là giá trị bắt buộc
    }
  }, {
    sequelize, // Đối tượng kết nối Sequelize mà bạn truyền vào
    modelName: 'User', // Tên của mô hình (model name), sẽ dùng để tham chiếu khi Sequelize tạo bảng
    tableName: 'Users', // Tên bảng trong database, nếu không chỉ định, Sequelize sẽ tự động lấy theo số nhiều của model name
    timestamps: true, // Bật thuộc tính này để Sequelize tự động thêm các cột createdAt và updatedAt
    underscored: true // Nếu bật, tên các cột sẽ sử dụng kiểu snake_case thay vì camelCase (e.g., created_at thay vì createdAt)
  });

  return User;
};
