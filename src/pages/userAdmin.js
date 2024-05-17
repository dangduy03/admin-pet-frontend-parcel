
import React, { useEffect, useState } from "react";
import HeaderAdmin from "../components/header.admin";
import SlidebarAdmin from "../components/slidebar.admin";
import "../style/pages/style.admin.css"
import HeaderAdmin from "../components/header.admin";
import apiService from "../services/apiService";
import { API_ENDPOINTS } from "../utils/apiRoute";
import getApiHooks from "../utils/getApiHook";
import Search from "../components/search";
function accountUser() {

  const [accountUser, setAccountUser] = useState([]);
  useEffect(() => {

    getApiHooks(setAccountUser, API_ENDPOINTS.USER.BASE)

  }, [])
  return (
    <div class="grid-container">
      <HeaderAdmin />
      <SlidebarAdmin />
      <div class="container mt-3 text-center">
        <div class="main-title">
          <h2 style={{ color: "aliceblue" }}>NGƯỜI DÙNG</h2>
        </div>
        <div class="input-btn mt-3">
          <input class="form-control" id="myInput" type="text" placeholder="Search.." />
          <div class="add-product bg-white text-center ">
            <p>Thêm sản phẩm</p>
          </div>
        </div>
        <br />
        <table class="table table-bordered table-product ">
          <thead>
            <tr>
              <th>Tên người dùng</th>
              <th>Họ và tên </th>
              <th>Email</th>
              <th>Trạng thái</th>
              <th>Địa chỉ</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody id="myTable">
            {accountUser.map((accountUser) => (
              <tr>
                <td>{accountUser.username}</td>
                <td>{accountUser.fullName}</td>
                <td>{accountUser.email}</td>
                <td>{accountUser.role}</td>
                <td>{accountUser.address}</td>
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
  )
}
export default accountUser