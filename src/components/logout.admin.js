
import { useHistory } from "react-router-dom/cjs/react-router-dom";
document.addEventListener("DOMContentLoaded",()=>{
    console.log("aaa")
    const logout = document.getElementById("logout-item");
    logout.addEventListener("click",()=>{
        alert('aabvd')
        localStorage.removeItem("token");
        useHistory.push('/home')
        }
        )
})

