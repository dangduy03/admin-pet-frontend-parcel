import React, { useEffect, useState } from "react";
import HeaderAdmin from "../components/header.admin";
import SlidebarAdmin from "../components/slidebar.admin";
import "../style/pages/style.admin.css";
import apiService from "../services/apiService";
import { API_ENDPOINTS } from "../utils/apiRoute";
import Search from "../components/search";

function CategoryAdmin() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [currentCategory, setCurrentCategory] = useState(null);
  // const [type, setType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await apiService.get(API_ENDPOINTS.CATEGORY.BASE);
        setCategories(categoryResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const resetForm = () => {
    setCategoryId("");
    setName("");
    setCurrentCategory(null);
  };

  const createCategory = async (event) => {
    event.preventDefault();
    const data = {
      type: name 
    };
  
    try {
      const response = await apiService.post(API_ENDPOINTS.CATEGORY.BASE, data);
      alert("Thêm danh mục thành công");
      resetForm();
      document.getElementById("categoryForm").querySelector(".btn-close").click();
      setCategories([...categories, response.data]); 
    } catch (error) {
      alert("Thêm danh mục thất bại");
      console.error(error);
    }
  };
  
  const updateCategory = async (event) => {
    event.preventDefault();
    if (!categoryId) {
      alert("Không có danh mục nào được chọn để cập nhật.");
      return;
    }
  
    const data = {
      name: name // Sử dụng name thay vì type nếu bạn lưu tên danh mục trong trường name
    };
  
    try {
      const response = await apiService.put(`${API_ENDPOINTS.CATEGORY.BASE}/${categoryId}`, data);
      alert("Cập nhật danh mục thành công");
      const updatedCategories = categories.map(category => 
        category._id === categoryId ? response.data : category // Cập nhật danh mục tương ứng trong mảng
      );
      setCategories(updatedCategories);
      resetForm();
      document.getElementById("categoryForm").querySelector(".btn-close").click();
    } catch (error) {
      alert("Cập nhật danh mục thất bại");
      console.error(error);
    }
  };

  const deleteCategory = async (categoryId) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
      return;
    }

    try {

      await apiService.delete(`${API_ENDPOINTS.CATEGORY.BASE}/${categoryId}`);
      alert("Xóa danh mục thành công");
      setCategories(categories.filter(category => category._id !== categoryId));
    } catch (error) {
      alert("Xóa danh mục thất bại");
      console.error(error);
    }
  };

  const openEditForm = (category) => {
    setCurrentCategory(category);
    setName(category.name);
    setCategoryId(category._id);

    const modal = new bootstrap.Modal(document.getElementById("categoryForm"));
    modal.show();
  };

  const dogCategories = categories.filter(category => category.type === "DOG");
  // Lọc danh mục mèo
  const catCategories = categories.filter(category => category.type === "CAT");
  const CatcategoriesWithSTT =catCategories.map((category, index) => ({
    ...category,
    stt: index + 1,
  }));
  const dogCategoriesWithSTT = dogCategories.map((category, index) => ({
    ...category,
    stt: index + 1,
  }));

  return (
    <div className="grid-container">
      <HeaderAdmin />
      <SlidebarAdmin />
      <div className="container mt-3 text-center adminProduct-content">
        <div className="main-title">
          <h2 style={{ color: "aliceblue" }}>DANH MỤC</h2>
        </div>
        <div className="input-btn mt-3">
          <input className="form-control" id="myInput" type="text" placeholder="Search.." />
          <button
            className="btn btn-primary text-white newUser"
            onClick={resetForm}
            data-bs-toggle="modal"
            data-bs-target="#categoryForm"
          >
            Thêm danh mục <i className="bi bi-people"></i>
          </button>
        </div>
        <br />
        <div className="modal fade" id="categoryForm">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Fill the Form</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form action="#" id="myForm" onSubmit={currentCategory ? updateCategory : createCategory}>
                  <div className="inputField">
                    <div>
                      <label htmlFor="name">Tên</label>
                      <input
                        type="text"
                        name=""
                        id="name"
                        required
                        autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="submit" form="myForm" className="btn btn-primary submit">
                  {currentCategory ? "Cập nhật" : "Thêm mới"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <div class="d-flex">
            <div class="table-wrapper">
              <table class="table table-bordered table-category">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên danh mục</th>
                    <th>Chức năng</th>
                  </tr>
                </thead>
                <tbody id="myTable">
                  {CatcategoriesWithSTT.map((category) => (
                    <tr key={category._id}>
                      <td>{category.stt}</td>
                      <td>{category.name}</td>
                      <td>
                        <button class="btn-handle" onClick={() => openEditForm(category)}>
                          Sửa
                        </button>
                        <button class="btn-handle" onClick={() => deleteCategory(category._id)}>
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div class="table-wrapper">
              <table class="table table-bordered  table-category">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên danh mục</th>
                    <th>Chức năng</th>
                  </tr>
                </thead>
                <tbody id="myTable">
                  {dogCategoriesWithSTT.map((category) => (
                    <tr key={category._id}>
                      <td>{category.stt}</td>
                      <td>{category.name}</td>
                      <td>
                        <button class="btn-handle" onClick={() => openEditForm(category)}>
                          Sửa
                        </button>
                        <button class="btn-handle" onClick={() => deleteCategory(category._id)}>
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Search />
      </div>
    </div>
  );
}

export default CategoryAdmin;
