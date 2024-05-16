
import React, { useEffect, useState } from "react";
import HeaderAdmin from "../components/header.admin";
import SlidebarAdmin from "../components/slidebar.admin";
import "../style/pages/style.admin.css"
import HeaderAdmin from "../components/header.admin";
import apiService from "../services/apiService";
import { API_ENDPOINTS } from "../utils/apiRoute";

function categoryAdmin() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategoryData = async () => {
      const response = await apiService.get(API_ENDPOINTS.CATEGORY.BASE);
      if (response.status >= 200 && response.status <= 299) {
        setCategory(response.data)
      }
    }
    getCategoryData();
  } 
  , [])


  return (
    <div class="grid-container">
      <HeaderAdmin />
      <SlidebarAdmin />
      <div class="container mt-3 text-center">
        <div class="main-title">
          <h2 style={{ color: "aliceblue" }}>DANH MỤC</h2>
        </div>
        <div class="input-btn mt-3">
          <input class="form-control" id="myInput" type="text" placeholder="Search.." />
          <div class="add-product bg-white text-center ">
            <p>Thêm danh mục</p>
          </div>
        </div>
        <br />
        <table class="table table-bordered table-product ">
          <thead>
            <tr>
              <th>Tên danh mục</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody id="myTable">
            {category.map ((category)=>(
            <tr>
              <td>{category.name}</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}
export default categoryAdmin;