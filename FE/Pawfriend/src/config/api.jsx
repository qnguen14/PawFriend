import axios from "axios";
const baseURL = "http://localhost:8080/pawFund/";

// Tạo một instance của axios với cấu hình mặc định
// const api = axios.create({
//   baseURL:
//     process.env.REACT_APP_API_BASE_URL ||
//     "http://localhost:8080/pawFund/swagger-ui/index.html#/", // Thay thế bằng URL API của bạn
//   timeout: 1000, // Thời gian chờ tối đa cho mỗi request
//   headers: { "Content-Type": "application/json" },
// });

const config = { baseURL: baseURL };
const api = axios.create(config);
api.defaults.baseURL = baseURL;

const handleBefore = (config) => {
  const token = localStorage.getItem("token")?.replaceAll("", "");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
};

api.interceptors.request.use(handleBefore, null);
// Hàm để lấy dữ liệu từ API
export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Hàm để gửi dữ liệu đến API
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

// Hàm để cập nhật dữ liệu trên API
export const updateData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

// Hàm để xóa dữ liệu từ API
export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};

export default api;
