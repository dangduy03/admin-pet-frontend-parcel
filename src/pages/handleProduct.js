import { useEffect } from "react";
import ProductAdmin from "./productAdmin";
function HandleProduct() {
    <button class="btn btn-primary newUser " data-bs-toggle="modal" data-bs-target="#userForm">Add User<i
                        class="bi bi-people"></i></button>
    const handleProduct = () => {
        var form = document.getElementById("myForm"),
  imgInput = document.querySelector(".img"),
  file = document.getElementById("imgInput"),
  userName = document.getElementById("name"),
  age = document.getElementById("age"),
  email = document.getElementById("email"),
  phone = document.getElementById("phone"),
  sDate = document.getElementById("sDate"),
  submitBtn = document.querySelector(".submit"),
  userInfo = document.getElementById("data"),
  modal = document.getElementById("userForm"),
  modalTitle = document.querySelector("#userForm .modal-title"),
  newUserBtn = document.querySelector(".newUser"),
  getData = localStorage.getItem("userProfile")
    ? JSON.parse(localStorage.getItem("userProfile"))
    : [],
  isEdit = false,
  editId;

// showInfo();

newUserBtn.addEventListener("click", () => {
  submitBtn.innerText = "Submit";
  modalTitle.innerText = "Fill the Form";
  isEdit = false;
  imgInput.src = "./image/Profile Icon.webp";
  form.reset();
});

file.onchange = function () {
  if (file.files[0].size < 1000000) {
    var fileReader = new FileReader();

    fileReader.onload = function (e) {
      imgUrl = e.target.result;
      imgInput.src = imgUrl;
    };

    fileReader.readAsDataURL(file.files[0]);
  } else {
    alert("This file is too large!");
  }
};
      
    };

    useEffect(() => {
        document.querySelector(".newUser").addEventListener("click", handleProduct);

        
    }, []);

    // Trả về null hoặc một phần tử JSX nếu cần
    return null;
}

export default HandleProduct;
