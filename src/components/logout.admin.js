
import React from "react";
import { useHistory } from "react-router-dom";
import { handleLogout } from "../pages/handleLogout";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const RemoveAccount = () => {
    const history = useHistory();

    const handleLogOut =  () => {
        localStorage.removeItem("token");
        history.push('/login');
    }


    return (
        <li className="sidebar-list-item" onClick={handleLogOut}>
            <span id="logout-item" className="material-icons-outlined">logout</span> Đăng xuất
        </li>
    );
};

export default RemoveAccount;
