import axios from 'axios';

// Tạo một instance của axios với cấu hình mặc định
const api = axios.create({
  baseURL: 'https://670a18acaf1a3998baa30805.mockapi.io', // Đặt trực tiếp URL API của bạn
  timeout: 5000, // Thời gian chờ tối đa cho mỗi request
  headers: { 'Content-Type': 'application/json' }
});

// Hàm để lấy dữ liệu từ API
export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Hàm để gửi dữ liệu đến API
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

// Hàm để cập nhật dữ liệu trên API
export const updateData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

// Hàm để xóa dữ liệu từ API
export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};
