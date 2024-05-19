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
import { imgForm } from "../assets/images/profile-form.jpg"
import postApiHook from "../utils/postApiHook";
import putApiHook from "../utils/putApiHook";

function ProductAdmin() {

  const [products, setProducts] = useState([]);
  const [categorys, setCategory] = useState([])
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [price, setPrice] = useState(0);
  const [gender, setGender] = useState('');
  const [color, setColor] = useState('');
  const [status, setStatus] = useState('');
  const [origin, setOrigin] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [categoryId, setCategoryId] = useState('');



  useEffect(() => {
    getApiHooks(setProducts, API_ENDPOINTS.PRODUCT.BASE);
    getApiHooks(setCategory, API_ENDPOINTS.CATEGORY.BASE);
    putApiHook(setProducts,API_ENDPOINTS.PRODUCT.UPDATE_PRODUCT)
  }, []);

  const createProduct = async (event) => {
    event.preventDefault();
    const data = {
      age,
      name,
      gender,
      color,
      origin,
      status,
      description,
      images: [image],
      categoryId,
      price
    }


    console.log(data);
    await apiService.post(API_ENDPOINTS.PRODUCT.BASE, data).then((data) => {
      alert("success");
      const modal = document.querySelector("#userForm");
      modal.classList.remove("show") ;
    }).catch((error) => {
      alert("failed");
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    })
  }



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
          <button class="btn btn-primary text-white newUser " data-bs-toggle="modal" data-bs-target="#userForm">Add Product<i
            class="bi bi-people"></i></button>
        </div>
        <br />
        <div class="modal fade " id="userForm">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Fill the Form</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div class="modal-body">
                <form action="#" id="myForm" onSubmit={createProduct}>
                  <div class="inputField">
                    <div>
                      <label for="name">Hình ảnh:</label>
                      <input type="text" name="" id="img" required autoComplete="off" onChange={(e) => { setImage(e.target.value) }} />
                    </div>
                    <div>
                      <label for="name">Tên</label>
                      <input type="text" name="" id="name" required autoComplete="off" onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div class="form-group">
                      <label for="sel1">Loại:</label>
                      <select class="form-control" id="sel1" onChange={(e) => { setCategoryId(e.target.value) }}>
                        {categorys.map((item) => (<option value={item._id} >{item.name}</option>))}``
                      </select>
                    </div>
                    <div>
                      <label for="age">Tuổi:</label>
                      <input type="number" name="" id="age" required onChange={(e) => { setAge(e.target.value) }} autoComplete="off" />
                    </div>
                    <div>
                      <label for="age">Giá tiền:</label>
                      <input type="number" name="" id="price" required onChange={(e) => { setPrice(parseInt(e.target.value)) }} autoComplete="off" />
                    </div>
                    <div>
                      <label for="city">Giới tính:</label>
                      <input type="text" name="" id="gender" required autoComplete="off" onChange={(e) => { setGender(e.target.value) }} />
                    </div>
                    <div>
                      <label for="color">Màu:</label>
                      <input type="text" name="" id="color" required autoComplete="off" onChange={(e) => { setColor(e.target.value) }} />
                    </div>
                    <div>
                      <label className="status">Trạng thái:</label>
                      <input className="input-status" type="radio" name="status" id="status_available" value={"AVAILABLE"} checked={status == "AVAILABLE"} onChange={(e) => { setStatus(e.target.value) }} required />AVAILABLE
                      <input className="input-status" type="radio" name="status" id="status_unavailable" value={"UNAVAILABLE"} checked={status == "UNAVAILABLE"} onChange={(e) => { setStatus(e.target.value) }} required />UNAVAILABLE
                    </div>
                    <div>
                      <label for="origin">Xuất xứ:</label>
                      <input type="text" name="" id="origin" onChange={(e) => { setOrigin(e.target.value) }} required />
                    </div>
                    <div>
                      <label for="descrpition">Mô tả:</label>
                      <input type="text" name="" id="descrpition" required onChange={(e) => { setDescription(e.target.value) }} autoComplete="off" />
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
