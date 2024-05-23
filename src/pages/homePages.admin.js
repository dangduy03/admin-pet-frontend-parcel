import React, { useContext, useEffect, useState } from "react";
import "../style/pages/style.admin.css";
import HeaderAdmin from "../components/header.admin";
import SlidebarAdmin from "../components/slidebar.admin";
import ChartAdmin from "./chart";
import apiService from "../services/apiService";
import { API_ENDPOINTS } from "../utils/apiRoute";
import getApiHooks from "../utils/getApiHook";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function HomePageAdmin() {
  const history = useHistory();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [accountUser, setAccountUser] = useState([]);
  const [bill, setBill] = useState([])
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        getApiHooks(setProduct, API_ENDPOINTS.PRODUCT.BASE),
        getApiHooks(setCategory, API_ENDPOINTS.CATEGORY.BASE),
        getApiHooks(setAccountUser, API_ENDPOINTS.USER.BASE),
      ]);
    }

    const billData = async () => {
      try {
        const response = await apiService.get(API_ENDPOINTS.BILL.BASE);
        if (response.status >= 200 && response.status <= 299) {
          setBill(response.data);

          const result = response.data;
          let totalPrice = 0;

          for (let i = 0; i < result.length; i++) {
            if (result[i].status == "CONFIRMED") {
              totalPrice = totalPrice + result[i].totalPrice;
            }
          }
          setPrice(totalPrice);
          console.table(result)
        } else {
          console.error("Failed to fetch bill data");
        }
      } catch (error) {
        console.error("Error while fetching bill data:", error.message);
      }
    }

    fetchData();
    billData();

    const unlisten = async () => {
      await fetchData();
      await billData();

    }

    return () => {
      unlisten();
    }
  }, [history]);

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
              <p>SẢN PHẨM</p>
              <span class="material-icons-outlined">inventory_2</span>
            </div>
            <p>{product.length}</p>
          </div>

          <div class="card">
            <div class="card-inner">
              <p>DANH MỤC</p>
              <span class="material-icons-outlined">category</span>
            </div>
            <p>{category.length}</p>
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
            <p style={{ fontSize: "15px" }}>{price}.000VNĐ</p>
          </div>
        </div>
        <div class="charts  ">
          <div class="charts-card ">
            <h2 class="chart-title">Thống kê theo danh mục</h2>
            <ChartAdmin />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePageAdmin;
