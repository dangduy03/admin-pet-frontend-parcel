// Trong ProductAdmin.js
import React, { useEffect, useState } from "react";
import HeaderAdmin from "../components/header.admin";
import SlidebarAdmin from "../components/slidebar.admin";
import apiService from "../services/apiService";
import { API_ENDPOINTS } from "../utils/apiRoute";
import getApiHooks from "../utils/getApiHook";
import Search from "../components/search";
import HandleProduct from "./handleProduct";
import "../style/pages/style.admin.css"
import {imgForm} from"../assets/images/profile-form.jpg"
function ProductAdmin() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getApiHooks(setProducts, API_ENDPOINTS.PRODUCT.BASE);
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
          <button class="btn btn-primary text-white newUser " data-bs-toggle="modal" data-bs-target="#userForm">Add User<i
                        class="bi bi-people"></i></button>
        </div>
        <br/>
        <div class="modal fade" id="userForm">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Fill the Form</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div class="modal-body">

                <form action="#" id="myForm">

                  <div class="card imgholder">
                    <label for="imgInput" class="upload">
                      <input type="file" name="" id="imgInput" />
                      <i class="bi bi-plus-circle-dotted"></i>
                    </label>
                    <img src={imgForm} alt="" width="100" height="100" class="img" />
                  </div>

                  <div class="inputField">
                    <div>
                      <label for="name">Tên</label>
                      <input type="text" name="" id="name" required />
                    </div>
                    <div>
                      <label for="age">Tuổi:</label>
                      <input type="number" name="" id="age" required />
                    </div>
                    <div>
                      <label for="city">Giới tính:</label>
                      <input type="text" name="" id="gender" required />
                    </div>
                    <div>
                      <label for="color">Màu:</label>
                      <input type="text" name="" id="color" required />
                    </div>
                    <div>
                      <label for="status">Trạng thái:</label>
                      <input type="text" name="" id="status" required />
                    </div>
                    <div>
                      <label for="origin">Xuất xứ:</label>
                      <input type="text" name="" id="origin"required />
                    </div>
                    <div>
                      <label for="descrpition">Mô tả:</label>
                      <input type="text" name="" id="descrpition" required />
                    </div>
                  </div>

                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" form="myForm" class="btn btn-primary submit">Submit</button>
              </div>
            </div>
          </div>
        </div> 
        <table className="table table-bordered table-product">
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá tiền</th>
              <th>Xuất xứ</th>
              <th>Màu</th>
              <th>Trạng thái</th>
              <th>Mô tả</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody id="myTable">
            {products.map((product) => (
              <tr className="list-product" key={product.id}>
                <td>{product.name}</td>
                <td><img src={product.images[0]} alt="" /></td>
                <td>{product.price} VND</td>
                <td>{product.origin}</td>
                <td>{product.color}</td>
                <td>{product.status}</td>
                <td className="table-decreption">{product.description}</td>
                <td id="descriptionPopup" className=" hidden">{product.description}</td>
                <td>
                  <button className="btn-handle">Sửa</button>
                  <button className="btn-handle" id="deleteProduct">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <HandleProduct />
      <Search />
    </div>
  );
}

export default ProductAdmin;
