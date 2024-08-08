import axios from "axios";

// Tạo một instance của axios với cấu hình cơ bản
const api = axios.create({
  baseURL: "https://api.example.com", // Thay đổi thành URL API của bạn
  timeout: 10000, // Thay đổi timeout nếu cần
});

// Các hàm để gọi API
export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Các hàm khác để gọi API nếu cần
// ...

export default api;
