// constants.js
// const API_BASE_URL = "http://10.147.19.99:3000";
const API_BASE_URL = "http://localhost:3000";

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/sign-in`,
    REGISTER: `${API_BASE_URL}/auth/register`,
    OTP: `${API_BASE_URL}/auth/send-otp`,
    OTP_VERIFY: `${API_BASE_URL}/auth/verified-otp`,
  },
  PRODUCT: {
    BASE: `/product`,
    ADD_PORODUCT: `${API_BASE_URL}/Products/ProductController_create`,
    UPDATE_PRODUCT: `${API_BASE_URL}/product`,
  },
  CATEGORY: {
    BASE: `/category`,
    
  },
  USER: {
    BASE: `/user`
  },
  BILL:{
    BASE: `/bill`
  }

};// nơi khai báo các enpoint route

export default API_BASE_URL;
