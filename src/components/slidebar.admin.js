import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../style/pages/style.admin.css"
import RemoveAccount from "./logout.admin";
function SlidebarAdmin() {

  const Sidebar = () => {
    const history = useHistory();

    useEffect(() => {
        const handleLogout = () => {
            alert('aabvd');
            localStorage.removeItem("token");
            history.push('/home');
        };

        const logoutItem = document.getElementById("logout-item");
        if (logoutItem) {
            logoutItem.addEventListener("click", handleLogout);
        } else {
            console.error("Element with ID 'logout-item' not found.");
        }

        // Cleanup function to remove the event listener
        return () => {
            if (logoutItem) {
                logoutItem.removeEventListener("click", handleLogout);
            }
        };
    }, [history]);

  };

  return (
      <aside id="sidebar">
        <div class="sidebar-title">
          <div class="sidebar-brand">
            <span class="material-icons-outlined">shopping_cart</span>
            <Link to="/home"> SHOP
              PET</Link>
          </div>
          <span class="material-icons-outlined" onclick="closeSidebar()">
            close
          </span>
        </div>

        <ul class="sidebar-list">
          <li class="sidebar-list-item">

            <span class="material-icons-outlined">dashboard</span>
            <Link to="/home"> Trang chủ</Link>
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
            <span class="material-icons-outlined"> admin_panel_settings</span>
            <Link to="/accountUser">  Người dùng</Link>
          </li>

          <li class="sidebar-list-item">
              <span class="material-icons-outlined">fact_check</span> 
            <Link to="/bill">Hóa đơn</Link>
          </li>
        <RemoveAccount/>
        </ul>
      </aside>
  )
}

export default SlidebarAdmin;