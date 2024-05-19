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
import accountUser from "./userAdmin";

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
  
  const filteredCategorys = category.reduce((acc, category) => {
    if (
      !acc.some((item) => item.type === category.type) &&
      (category.type === "DOG" || category.type === "CAT")
    ) {
      acc.push(category);
    }
    return acc;
  }, []);

  return (
    <div class="grid-container">
      <HeaderAdmin />
      <SlidebarAdmin />
      <main class="main-container">
        <div class="main-title">
          <h2 className="title-homepage">TRANG CHỦ</h2>
        </div>

        <div class="main-cards">
          <div class="card">
            <div class="card-inner">
              <p >SẢN PHẨM</p>
              <span class="material-icons-outlined">inventory_2</span>
            </div>
            <p>{product.length}</p>
          </div>

          <div class="card">
            <div class="card-inner">
              <p>DANH MỤC</p>
              <span class="material-icons-outlined">category</span>
            </div>
            <p>{filteredCategorys.length}</p>
          </div>

          <div class="card">
            <div class="card-inner">
              <p>NGƯỜI DÙNG</p>
              <span class="material-icons-outlined">groups</span>
            </div>
            <p>{accountUser.length}</p>
          </div>

          <div class="card">
            <div class="card-inner">
              <p>DOANH THU</p>
              <span class="material-icons-outlined">fact_check</span>
            </div>
            <p>56</p>
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
