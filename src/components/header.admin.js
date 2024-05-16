import React from "react";
import reactRouterDom from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../style/pages/style.admin.css"
function HeaderAdmin() {
    return (
        
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
            )
}
            export default HeaderAdmin;