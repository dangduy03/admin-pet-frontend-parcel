import React, { useEffect, useState } from "react";
import HeaderAdmin from "../components/header.admin";
import SlidebarAdmin from "../components/slidebar.admin";
import "../style/pages/style.admin.css";
import apiService from "../services/apiService";
import { API_ENDPOINTS } from "../utils/apiRoute";
import getApiHooks from "../utils/getApiHook";
import Search from "../components/search";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function billAdmin() {
  const history = useHistory();
  const [bills, setBill] = useState([]);

  useEffect(() => {
    const getBill = async () => {
      const response = await apiService.get(`${API_ENDPOINTS.BILL.BASE}?populate=userId,products.productId`);
      if (response.status >= 200 && response.status <= 299) {
        setBill(response.data);
      }
    }
    getBill();
  }, [history]);

  const updateStatus = async (id) => {
    const data = {
      status: "CONFIRMED"
    }
    await apiService.put(`${API_ENDPOINTS.BILL.BASE}/${id}`, data).then(async (response) => {
      const updateData = await apiService.get(`${API_ENDPOINTS.BILL.BASE}?populate=userId,products.productId`);
      if (updateData.status >= 200 && updateData.status <= 299) {
        setBill(updateData.data);
      }
    }).catch((error) => {
      console.log(error.response)
    })
  }

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
              <th>STT</th>
              <th>Tên người đặt</th>
              <th>Email</th>
              <th>Địa chỉ</th>
              <th>Phương thức đặt hàng</th>
              <th>Số tiền (đơn vị nghìn đồng)</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody id="myTable">
            {bills.map((item, index) => (
              <tr>
                <td>{index}</td>
                <td>{item.userId.fullName}</td>
                <td>{item.userId.email}</td>
                <td>{item.address}</td>
                <td>{item.payMethod == "ONLINE" ? "Trên mạng" : "Trực tiếp"}</td>
                <td>{item.totalPrice}</td>
                <td>
              { item.status == "WAITING" ? (<button className="btn-handle" onClick={updateStatus(item._id)} >Xác nhận hóa đơn</button>) : (<button style={{color:"black"}}>Đơn đã xác nhận</button>)}    
                  {/* <button className="btn-handle">Xóa</button> */}
                </td>
              </tr>
            ))}

            {/* <tr>
              
              <td>mua chó</td>
              <td>ádfghjgfdsadsfghj</td>
              <td>ádfghjgfdsadsfghj</td>
              <td>ádfghjgfdsadsfghj</td>
              <td>111111</td>
              <td>
                <button className="btn-handle">Sửa</button>
                <button className="btn-handle">Xóa</button>
              </td>
            </tr> */}

          </tbody>
        </table>
        <Search />
      </div>
    </div>
  );
}
export default billAdmin;