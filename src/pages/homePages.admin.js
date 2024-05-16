import React, { useContext, useEffect, useState } from "react";
import "../style/pages/style.admin.css";
import HeaderAdmin from "../components/header.admin";
import SlidebarAdmin from "../components/slidebar.admin";
import ChartAdmin from "./chart"
import apiService from "../services/apiService";
import { API_ENDPOINTS } from "../utils/apiRoute";
import getApiHooks from "../utils/getApiHook";
import accountUser from "./userAdmin";
import handleProduct from "./handleProduct";

function homePageAdmin() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([])
  const [accountUser, setAccountUser] = useState([])

  useEffect(() => {
    const Data = async () => {
      await Promise.all([
        getApiHooks(setProduct, API_ENDPOINTS.PRODUCT.BASE),
        getApiHooks(setCategory, API_ENDPOINTS.CATEGORY.BASE),
        getApiHooks(setAccountUser, API_ENDPOINTS.USER.BASE)
      ]);
    };

    Data();
  }, []);

  return (
    <div class="grid-container">
      <HeaderAdmin />
      <SlidebarAdmin />
      <main class="main-container">
        <div class="main-title">
          <h2>TRANG CHỦ</h2>
        </div>

        <div class="main-cards">
          <div class="card">
            <div class="card-inner">
              <h3 >SẢN PHẨM</h3>
              <span class="material-icons-outlined">inventory_2</span>
            </div>
            <h1>
              {product.length}</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h3>DANH MỤC</h3>
              <span class="material-icons-outlined">category</span>
            </div>
            <h1>{category.length}</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h3>KHÁCH HÀNG</h3>
              <span class="material-icons-outlined">groups</span>
            </div>
            <h1>{accountUser.length}</h1>
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
            <ChartAdmin />
          </div>
        </div>
      </main>
    </div>

  );
}
export default homePageAdmin;
