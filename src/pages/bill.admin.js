import React, { useEffect, useState } from "react";
import HeaderAdmin from "../components/header.admin";
import SlidebarAdmin from "../components/slidebar.admin";
import "../style/pages/style.admin.css";
import apiService from "../services/apiService";
import { API_ENDPOINTS } from "../utils/apiRoute";
import getApiHooks from "../utils/getApiHook";
import Search from "../components/search";

// const [bills,setBill] = useState([]);

// useEffect(() => {
//   getApiHooks(setBill, API_ENDPOINTS.BILL.BASE);
// }, []); 

function billAdmin (){

    return (
        <div className="grid-container">
          <HeaderAdmin />
          <SlidebarAdmin />
          <div className="container mt-3 text-center">
            <div className="main-title">
              <h2 style={{ color: "aliceblue" }}>HÓA ĐƠN</h2>
            </div>
            <div className="input-btn mt-3">
              <input className="form-control" id="myInput" type="text" placeholder="Search.." />
              <div className="add-product bg-white text-center">
                <p>Thêm hóa đơn</p>
              </div>
            </div>
            <br />
            <table className="table table-bordered table-product">
              <thead>
                <tr>
                  <th>Tên hóa đơn</th>
                  <th>Nội dung</th>
                  <th>Số tiền</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody id="myTable">
              {/* {bills.map((bill) => ( */}
                  <tr>
                    {/* <td>{bill.name} Nmae</td>
                    <td>{bill.conten}</td>
                    <td>{bill.price}</td> */}
                   <td>mua chó</td>
                   <td>ádfghjgfdsadsfghj</td>
                   <td>111111</td>
                    <td>
                      <button className="btn-handle">Sửa</button>
                      <button className="btn-handle">Xóa</button>
                    </td>
                  </tr>
                 {/* ))} */}
              </tbody>
            </table>
            <Search />
          </div>
        </div>
      );
}
export default billAdmin;