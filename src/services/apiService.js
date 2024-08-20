import axios from "axios";

// Tạo một instance của axios với cấu hình cơ bản
const api = axios.create({
  baseURL: "http://localhost:8888/api", // Thay đổi thành URL API của bạn
});

// Các hàm để gọi API
export const getData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async (endpoint) => {
  try {
    const response = await api.post(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Các hàm khác để gọi API nếu cần
// ...

export default api;
