import React from "react";
import "../style/pages/style.admin.css";
import { Link } from "react-router-dom";
function homePageAdmin() {
  return (
    <div class="grid-container">
      <header class="header">
        <div class="menu-icon" onclick="openSidebar()">
          <span class="material-icons-outlined">menu</span>
        </div>
        <div class="header-left"></div>
        <div class="header-right">
          <span class="material-icons-outlined">notifications</span>
          <span class="material-icons-outlined">email</span>
          <div class="logout">
            <span id="logoutAdmin" class="material-icons-outlined">
              account_circle
            </span>
          </div>
        </div>
      </header>

      <aside id="sidebar">
        <div class="sidebar-title">
          <div class="sidebar-brand">
            <a href="">
              <span class="material-icons-outlined">shopping_cart</span> SHOP
              PET
            </a>
          </div>
          <span class="material-icons-outlined" onclick="closeSidebar()">
            close
          </span>
        </div>

        <ul class="sidebar-list">
          <li class="sidebar-list-item">
            <a href="#">
              <span class="material-icons-outlined">dashboard</span> Trang chủ
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href="./src/pages/productAdmin.html">
              <span class="material-icons-outlined">inventory_2</span> Sản phẩm
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href="./src/pages/categoryAdmin.html">
              <span class="material-icons-outlined">category</span>Danh mục
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href="./src/pages/feedbackAdmin.html">
              <span class="material-icons-outlined">feedback</span> Bình luận
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href="./src/pages/userAdmin.html">
              <span class="material-icons-outlined">fact_check</span> Người dùng
            </a>
          </li>

          <li class="sidebar-list-item">
            <a href="#">
              <span class="material-icons-outlined">settings</span> Cài đặt
            </a>
          </li>
        </ul>
      </aside>

      <main class="main-container">
        <div class="main-title">
          <h2>TRANG CHỦ</h2>
        </div>

        <div class="main-cards">
          <div class="card">
            <div class="card-inner">
              <h3>SẢN PHẨM</h3>
              <span class="material-icons-outlined">inventory_2</span>
            </div>
            <h1>249</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h3>DANH MỤC</h3>
              <span class="material-icons-outlined">category</span>
            </div>
            <h1>25</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h3>KHÁCH HÀNG</h3>
              <span class="material-icons-outlined">groups</span>
            </div>
            <h1>1500</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h3>DOANH THU</h3>
              <span class="material-icons-outlined">fact_check</span>
            </div>
            <h1>56</h1>
          </div>
        </div>

        <div class="charts">
          <div class="charts-card">
            <h2 class="chart-title">Top 5 Sản phẩm</h2>
            <div id="bar-chart"></div>
          </div>

          <div class="charts-card">
            <h2 class="chart-title">Mua và bán hàng</h2>
            <div id="area-chart"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default homePageAdmin;
