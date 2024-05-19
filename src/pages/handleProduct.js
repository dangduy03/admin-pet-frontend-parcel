import { useEffect } from "react";
import ProductAdmin from "./productAdmin";
function HandleProduct() {
  <button class="btn btn-primary newUser " data-bs-toggle="modal" data-bs-target="#userForm">Add User<i
    class="bi bi-people"></i></button>
  const handleProduct = () => {
    var form = document.getElementById("myForm"),
      imgInput = document.querySelector("#img"),
      // file = document.querySelector("imgInput"),
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
    //       const form = document.getElementById("myForm");
    // const imgInput = document.querySelector(".img");
    // const file = document.getElementById("imgInput");
    // const userName = document.getElementById("name");
    // const age = document.getElementById("age");
    // const price = document.getElementById("price");
    // const gender = document.getElementById("gender");
    // const color = document.getElementById("color");
    // const statusAvailable = document.querySelector('input[name="origin"][value="AVAILABLE"]');
    // const statusUnavailable = document.querySelector('input[name="origin"][value="UNAVAILABLE"]');
    // const origin = document.getElementById("origin");
    // const description = document.getElementById("descrpition");
    // const submitBtn = document.querySelector(".submit");
    // const userInfo = document.getElementById("data");
    // const modal = document.getElementById("userForm");
    // const modalTitle = document.querySelector("#userForm .modal-title");
    // const newUserBtn = document.querySelector(".newUser");

    // // Get user data from localStorage if it exists
    // const getData = localStorage.getItem("userProfile") ? JSON.parse(localStorage.getItem("userProfile")) : [];

    // // Set initial states for edit mode and edit ID
    // let isEdit = false;
    // let editId;

    // showInfo();

    newUserBtn.addEventListener("click", () => {
      submitBtn.innerText = "Submit";
      modalTitle.innerText = "Fill the Form";
      isEdit = false;
      form.reset();
    });

    // file.onchange = function () {
    //   if (file.files[0].size < 1000000) {
    //     var fileReader = new FileReader();

    //     fileReader.onload = function (e) {
    //       imgUrl = e.target.result;
    //       imgInput.src = imgUrl;
    //     };

    //     fileReader.readAsDataURL(file.files[0]);
    //   } else {
    //     alert("This file is too large!");
    //   }
    // };

  };

  useEffect(() => {
    document.querySelector(".newUser").addEventListener("click", handleProduct);

  }, []);

  return null;
}

export default HandleProduct;
