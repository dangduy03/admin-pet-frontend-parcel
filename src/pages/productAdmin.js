import React, { useEffect, useState } from "react";
import HeaderAdmin from "../components/header.admin";
import SlidebarAdmin from "../components/slidebar.admin";
import apiService from "../services/apiService";
import { API_ENDPOINTS } from "../utils/apiRoute";
import Search from "../components/search";
import HandleProduct from "./handleProduct";
import "../style/pages/style.admin.css";


function ProductAdmin() {
  const [products, setProducts] = useState([]);
  const [categorys, setCategory] = useState([]);
  const [_id, setId] = useState("");
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
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await apiService.get(API_ENDPOINTS.PRODUCT.BASE);
        setProducts(productResponse.data);

        const categoryResponse = await apiService.get(API_ENDPOINTS.CATEGORY.BASE);
        setCategory(categoryResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const resetForm = () => {
    setId("");
    setName('');
    setAge('');
    setPrice(0);
    setGender('');
    setColor('');
    setStatus('');
    setOrigin('');
    setDescription('');
    setImage(null);
    setCategoryId('');
    setCurrentProduct(null);
  };

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
      price,
    };

    try {
      await apiService.post(API_ENDPOINTS.PRODUCT.BASE, data);
      alert("Thêm sản phẩm thành công");
      const modal = new bootstrap.Modal(document.getElementById('userForm'));
      modal.hide();
      resetForm();
      const productResponse = await apiService.get(API_ENDPOINTS.PRODUCT.BASE);
      setProducts(productResponse.data);
    } catch (error) {
      alert("Thêm sản phẩm thất bại");
      console.error(error);
    }
  };

  const updateProduct = async (event) => {
    event.preventDefault();
    if (!currentProduct || !currentProduct._id) {
      alert("Không có sản phẩm nào được chọn để cập nhật.");
      return;
    }

    const data = {
      id: currentProduct._id,
      age,
      name,
      gender,
      color,
      origin,
      status,
      description,
      images: [image],
      categoryId,
      price,
    };

    try {
      const response = await apiService.put(`${API_ENDPOINTS.PRODUCT.UPDATE_PRODUCT}/${currentProduct._id}`, data);
      alert("Cập nhật sản phẩm thành công");
      const updatedProductIndex = products.findIndex(product => product._id === currentProduct._id);
      if (updatedProductIndex !== -1) {
        const updatedProducts = [...products];
        updatedProducts[updatedProductIndex] = response.data;
        setProducts(updatedProducts);
      }
      resetForm();
    } catch (error) {
      alert("Cập nhật sản phẩm thất bại");
      console.error(error);
    }
  };

  const deleteProduct = async (productId) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      return;
    }

    try {
      await apiService.delete(`${API_ENDPOINTS.PRODUCT.BASE}/${productId}`);
      alert("Xóa sản phẩm thành công");
      setProducts(products.filter(product => product._id !== productId));
    } catch (error) {
      alert("Xóa sản phẩm thất bại");
      console.error(error);
    }
  };

  const openEditForm = (product) => {
    setCurrentProduct(product);
    setName(product.name);
    setAge(product.age);
    setPrice(product.price);
    setGender(product.gender);
    setColor(product.color);
    setStatus(product.status);
    setOrigin(product.origin);
    setDescription(product.description);
    setImage(product.images[0]);
    setCategoryId(product.categoryId);

    const modal = new bootstrap.Modal(document.getElementById('userForm'));
    modal.show();
  };

  const filteredCategorys = categorys.filter((category) => {
    return category.type === "CAT" || category.type === "DOG";
  });

  const productsWithSTT = Array.isArray(products) ? products.map((product, index) => ({
    ...product,
    stt: index + 1
  })) : [];

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
          <button
            className="btn btn-primary text-white newUser"
            onClick={resetForm}
            data-bs-toggle="modal"
            data-bs-target="#userForm"
          >
           Thêm sản phẩm <i className="bi bi-people"></i>
          </button>
        </div>
        <br />
        <div className="modal fade" id="userForm">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Fill the Form</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form action="#" id="myForm" onSubmit={currentProduct ? updateProduct : createProduct}>
                  <div className="inputField">
                    <div>
                      <label htmlFor="name">Hình ảnh:</label>
                      <input type="text" name="" id="img" required autoComplete="off" value={image || ''} onChange={(e) => { setImage(e.target.value) }} />
                    </div>
                    <div>
                      <label htmlFor="name">Tên</label>
                      <input type="text" name="" id="name" required autoComplete="off" value={name || ''} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="sel1">Loại:</label>
                      <select
                        className="form-control"
                        id="sel1"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                      >
                        {filteredCategorys.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item.type === 'CAT' ? 'CAT' : 'DOG'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="age">Tuổi:</label>
                      <input type="number" name="" id="age" required value={age || ''} onChange={(e) => { setAge(e.target.value) }} autoComplete="off" />
                    </div>
                    <div>
                      <label htmlFor="age">Giá tiền:</label>
                      <input type="number" name="" id="price" required value={price || ""} onChange={(e) => { setPrice(parseInt(e.target.value)) }} autoComplete="off" />
                    </div>
                    <div>
                      <label htmlFor="city">Giới tính:</label>
                      <input type="text" name="" id="gender" required autoComplete="off" value={gender || ''} onChange={(e) => { setGender(e.target.value) }} />
                    </div>
                    <div>
                      <label htmlFor="color">Màu:</label>
                      <input type="text" name="" id="color" required autoComplete="off" value={color || ''} onChange={(e) => { setColor(e.target.value) }} />
                    </div>
                    <div>
                      <label className="status">Trạng thái:</label>
                      <input className="input-status" type="radio" name="status" id="status_available" value={"AVAILABLE"} checked={status === "AVAILABLE"} onChange={(e) => { setStatus(e.target.value) }} required />AVAILABLE
                      <input className="input-status" type="radio" name="status" id="status_unavailable" value={"UNAVAILABLE"} checked={status === "UNAVAILABLE"} onChange={(e) => { setStatus(e.target.value) }} required />UNAVAILABLE
                    </div>
                    <div>
                      <label htmlFor="origin">Xuất xứ:</label>
                      <input type="text" name="" id="origin" required value={origin || ''} onChange={(e) => { setOrigin(e.target.value) }} />
                    </div>
                    <div>
                      <label htmlFor="descrpition">Mô tả:</label>
                      <input type="text" name="" id="descrpition" required autoComplete="off" value={description || ''} onChange={(e) => { setDescription(e.target.value) }} />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" form="myForm" className="btn btn-primary submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-bordered table-product">
          <thead>
            <tr>
              <th>STT</th>
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
            {productsWithSTT.map((product) => (
              <tr className="list-product" key={product._id}>
                <td>{product.stt}</td>
                <td>{product.name}</td>
                <td><img src={product.images[0]} alt="" /></td>
                <td>{product.price} VND</td>
                <td>{product.origin}</td>
                <td>{product.color}</td>
                <td>{product.status}</td>
                <td className="table-decreption">{product.description}</td>
                <td id="descriptionPopup" className="hidden">{product.description}</td>
                <td>
                  <button className="btn-handle" onClick={() => openEditForm(product)}>Sửa</button>
                  <button className="btn-handle" onClick={() => deleteProduct(product._id)}>Xóa</button>
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
