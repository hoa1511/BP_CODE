import axios from '../axiosConfig'; // Import axios đã cấu hình sẵn từ axiosConfig.js
const API_URL = 'http://localhost:5000/api/auth';
// Hàm đăng ký người dùng
export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });
    return response.data; // Trả về dữ liệu nếu thành công
  } catch (error) {
    // Ném lỗi nếu có lỗi xảy ra
    throw error.response ? error.response.data : new Error('Lỗi không xác định');
  }
};

