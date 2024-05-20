import { useEffect } from "react";
import ProductAdmin from "./productAdmin";
function HandleProduct() {
  <button class="btn btn-primary newUser " data-bs-toggle="modal" data-bs-target="#userForm">Add User<i
    class="bi bi-people"></i></button>
  const handleProduct = () => {
    var form = document.getElementById("myForm"),
      imgInput = document.querySelector("#img"),
      userName = document.querySelector("#name"),
      type = document.querySelector("#sel1"),
      age = document.querySelector("#age"),
      price = document.querySelector("#price"),
      gender = document.querySelector("#gander"),
      color = document.querySelector("#color"),
      status = document.querySelector("#color"),
      origin = document.querySelector("#origin "),
      decreption = document.querySelector("#decription"),
      submitBtn = document.querySelector(".submit"),
      userInfo = document.querySelector("data"),
      modal = document.querySelector("userForm"),
      modalTitle = document.querySelector("#userForm .modal-title"),
      newUserBtn = document.querySelector(".newUser"),
      getData = localStorage.getItem("userProfile")
        ? JSON.parse(localStorage.getItem("userProfile"))
        : [],
      isEdit = false,
      editId;


    newUserBtn.addEventListener("click", () => {
      submitBtn.innerText = "Submit";
      modalTitle.innerText = "Fill the Form";
      isEdit = false;
      form.reset();
    });
  };

  useEffect(() => {
    document.querySelector(".newUser").addEventListener("click", handleProduct);

  }, []);

  return null;
}

export default HandleProduct;
