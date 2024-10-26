import axios from 'axios';

// Tạo một instance của axios với cấu hình mặc định
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Đặt base URL từ biến môi trường trong .env
  headers: {
    'Content-Type': 'application/json', // Đặt loại dữ liệu mặc định là JSON
  },
  withCredentials: true // Nếu bạn cần gửi cookie theo yêu cầu, đặt tùy chọn này thành true
});

// Thêm interceptor để xử lý yêu cầu trước khi gửi hoặc phản hồi trước khi trả về
// Bạn có thể bỏ qua nếu chưa cần xử lý

// Xử lý trước khi gửi yêu cầu
instance.interceptors.request.use(
  (config) => {
    // Ví dụ: thêm token vào header nếu có
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Xử lý phản hồi sau khi nhận được
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Xử lý lỗi toàn cục ở đây nếu cần
    if (error.response && error.response.status === 401) {
      // Ví dụ: nếu mã phản hồi là 401, người dùng có thể cần đăng nhập lại
      console.error('Unauthorized, please log in again.');
    }
    return Promise.reject(error);
  }
);

export default instance;
