import React, { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function HandleLogout() {
    const history = useHistory();
    useEffect(() => {
        const token = localStorage.removeItem("token");
        print(token)
        if (token == undefined || token == null) {
            history.push("/");
        }
    },[])  
    return <div></div>
}

export default HandleLogout;