import React, { useEffect, useState } from "react";
import HeaderAdmin from "../components/header.admin";
import SlidebarAdmin from "../components/slidebar.admin";
import "../style/pages/style.admin.css";
import apiService from "../services/apiService";
import { API_ENDPOINTS } from "../utils/apiRoute";
import getApiHooks from "../utils/getApiHook";
import Search from "../components/search";
function categoryAdmin() {
  const [categorys, setCategory] = useState([]);

  useEffect(() => {
    getApiHooks(setCategory, API_ENDPOINTS.CATEGORY.BASE);
  }, []);

  return (
    <div className="grid-container">
      <HeaderAdmin />
      <SlidebarAdmin />
      <div className="container mt-3 text-center">
        <div className="main-title">
          <h2 style={{ color: "aliceblue" }}>DANH MỤC</h2>
        </div>
        <div className="input-btn mt-3">
          <input className="form-control" id="myInput" type="text" placeholder="Search.." />
          <div className="add-product bg-white text-center">
            <p>Thêm danh mục</p>
          </div>
        </div>
        <br />
        <table className="table table-bordered table-product">
          <thead>
            <tr>
              <th>Tên danh mục</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody id="myTable">
            {categorys.map((category) => (
              <tr key={category.id}> {/* Thêm key vào mỗi phần tử trong vòng lặp */}
                <td>{category.name}</td>
                <td>
                  <button className="btn-handle">Sửa</button>
                  <button className="btn-handle">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Search/>
      </div>
    </div>
  );
}

export default categoryAdmin;
