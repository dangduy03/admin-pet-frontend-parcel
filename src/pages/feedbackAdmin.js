import React, { useEffect, useState } from "react";
import HeaderAdmin from "../components/header.admin";
import SlidebarAdmin from "../components/slidebar.admin";
import Search from "../components/search";
import apiService from "../services/apiService";
import { API_ENDPOINTS } from "../utils/apiRoute";

function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [users, setUsers] = useState({});
  const [products, setProducts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const feedbackResponse = await apiService.get(API_ENDPOINTS.FEEDBACK.BASE);
        const usersResponse = await apiService.get(API_ENDPOINTS.USER.BASE);
        const productsResponse = await apiService.get(API_ENDPOINTS.PRODUCT.BASE);

        setFeedbacks(feedbackResponse.data);
        const usersMap = {};
        usersResponse.data.forEach(user => {
          usersMap[user._id] = user.fullName;
          
        });
        console.log(usersResponse)
        setUsers(usersMap);
        const productsMap = {};
        productsResponse.data.forEach(product => {
          productsMap[product._id] = product.name;
        });
        console.log(productsResponse)
        setProducts(productsMap);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await apiService.delete(`${API_ENDPOINTS.FEEDBACK.BASE}/${id}`);
      setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
      alert("Đã xóa thành công ")
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  const feedbackSTT = feedbacks.map((items, index) => ({
    ...items,
    stt: index + 1,
  }));
  return (
    <div className="grid-container">
      <HeaderAdmin />
      <SlidebarAdmin />
      <div className="container mt-3 text-center">
        <div className="main-title">
          <h2 style={{ color: "aliceblue" }}>BÌNH LUẬN</h2>
        </div>
        <div className="input-btn mt-3">
          <input className="form-control" id="myInput" type="text" placeholder="Search.." />
          {/* <div className="add-product bg-white text-center">
            <p>Thêm sản phẩm</p>
          </div> */}
        </div>
        <br />
        <table className="table table-bordered table-product text-center">
          <thead>
            <tr >
              <th>STT</th>
              <th>Tên người dùng</th>
              <th>Tên sản phẩm</th>
              <th>Nội dung</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody id="myTable">
          {feedbackSTT.map(feedback => (
          <tr key={feedback.id}>
            <td>{feedback.stt}</td>
            <td>{users[feedback.userId] || 'Không xác định'}</td>
            <td>{products[feedback.productId]}</td>
            <td>{feedback.description}</td>
            <td>
              <button className="btn-handle" onClick={() => handleEdit(feedback.id)}>Sửa</button>
              <button className="btn-handle" onClick={() => handleDelete(feedback.id)}>Xóa</button>
            </td>
          </tr>
        ))}
          </tbody>
        </table>
        <Search />
      </div>
    </div>
  );
}

export default Feedback;
