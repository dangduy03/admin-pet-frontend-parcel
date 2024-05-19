import React, { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function HandleHomePage() {
    const history = useHistory();
    useEffect(() => {
        const token = localStorage.getItem("token");        
        if (token != undefined || token != null) {
            history.push("/home");
        } else {
            history.push("/login")
        }
    },[])  
    return <div></div>
}

export default HandleHomePage;