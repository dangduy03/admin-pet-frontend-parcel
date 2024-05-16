import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../style/pages/style.admin.css"
function SlidebarAdmin() {
  return (

      <aside id="sidebar">
        <div class="sidebar-title">
          <div class="sidebar-brand">
            <span class="material-icons-outlined">shopping_cart</span>
            <Link to="/"> SHOP
              PET</Link>
          </div>
          <span class="material-icons-outlined" onclick="closeSidebar()">
            close
          </span>
        </div>

        <ul class="sidebar-list">
          <li class="sidebar-list-item">

            <span class="material-icons-outlined">dashboard</span>
            <Link to="/"> Trang chủ</Link>
          </li>
          <li class="sidebar-list-item">
            <span class="material-icons-outlined">inventory_2</span>
            <Link to="/product">Sản phẩm</Link>
          </li>
          <li class="sidebar-list-item">
              <span class="material-icons-outlined">category</span>
            <Link to="/category">Danh mục</Link>
          </li>
          <li class="sidebar-list-item">
            <a href="./src/pages/feedbackAdmin.html">
              <span class="material-icons-outlined">feedback</span> 
            </a>
            <Link to="/feedback">Bình luận</Link>
          </li>
          <li class="sidebar-list-item">
            <a href="./src/pages/userAdmin.html">
             
            </a>
            <span class="material-icons-outlined">fact_check</span>
            <Link to="/accountUser">  Người dùng</Link>
          </li>

          <li class="sidebar-list-item">
            <a href="#">
              <span class="material-icons-outlined">settings</span> Cài đặt
            </a>
          </li>
        </ul>
      </aside>

  )
}
export default SlidebarAdmin;