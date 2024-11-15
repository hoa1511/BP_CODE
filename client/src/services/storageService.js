import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/storage';

// Hàm để lấy dữ liệu bảng lưu kho
export const fetchStorageData = async (page, pageSize, filters) => {
  try {
    const response = await axios.get(`${BASE_URL}/data`, {
      params: { 
        page, 
        pageSize, 
        ...filters 
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching storage data:', error);
    throw error;
  }
};

// Hàm để lấy dữ liệu biểu đồ
export const fetchChartData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/chartData`);
    return response.data;
  } catch (error) {
    console.error('Error fetching chart data:', error);
    throw error;
  }
};
