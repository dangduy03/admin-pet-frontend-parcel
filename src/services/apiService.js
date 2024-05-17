// apiService.js
import axios from "axios";
import API_BASE_URL from "../utils/apiRoute";
const bearToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNmMjRiYzZiZjczM2ZmZjU5ZWFkZTQiLCJ1c2VybmFtZSI6ImRhbmdkdXkwMSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcxNTc0MjUwMiwiZXhwIjoxNzE2MzQ3MzAyfQ._upZnOlUhHCDnVzsohQsf57q_U5bm_hETatOnlMO2hM'
const token = localStorage.getItem("token");
const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${token}`,
    // Thêm các headers khác nếu cần
  },
});

// Đặt token vào header Authorization
export const setAuthToken = (token) => {
  if (token) {
    apiService.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
  } else {
    delete apiService.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  }
};

export default apiService;
