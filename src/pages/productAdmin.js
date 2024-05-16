// Trong ProductAdmin.js
import React, { useEffect, useState } from "react";
import HeaderAdmin from "../components/header.admin";
import SlidebarAdmin from "../components/slidebar.admin";
import Search from "../components/search"; // Đảm bảo đường dẫn đúng
import apiService from "../services/apiService";
import { API_ENDPOINTS } from "../utils/apiRoute";
import getApiHooks from "../utils/getApiHook";
import handleProduct from "./handleProduct";

function ProductAdmin() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getApiHooks(setProduct, API_ENDPOINTS.PRODUCT.BASE);
  }, []);

  return (
    <div className="grid-container">
      <HeaderAdmin />
      <SlidebarAdmin />
      <div className="container mt-3 text-center adminProduct-content">
        <div className="main-title">
          <h2 style={{ color: "aliceblue" }}>SẢN PHẨM</h2>
        </div>
        <div className="input-btn mt-3">
          <input className="form-control" id="myInput" type="text" placeholder="Search.." />
          <div className="add-product bg-white text-center ">
            <p>Thêm sản phẩm</p>
          </div>
        </div>
        <br />
        <table className="table table-bordered table-product">
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá tiền</th>
              <th>Xuất xứ</th>
              <th>Mô tả</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody id="myTable">
            {product.map((product) => (
              <tr className="list-product" key={product.id}>
                <td>{product.name}</td>
                <td><img src={product.images[0]} alt="" /></td>
                <td>{product.price} VND</td>
                <td>{product.origin}</td>
                <td>{product.description}</td>
                <td>
                  <button onClick={() => handleProduct(product.id)}>Sửa</button>
                  <button id={`deleteProduct${product.id}`} onClick={() => handleDelete(product.id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Search />
    </div>
  );
}

export default ProductAdmin;