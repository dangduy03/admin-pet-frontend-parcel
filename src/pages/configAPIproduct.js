const productAPI = "http://localhost:3000/product";
console.log (productAPI)
function start() {
  getProducts(renderProducts);
//   handleCreateForm();
}

start();
function renderProducts(products) {
    var listProductsBlock = document.querySelector(".list-product");
    var htmls = products.map((product) => {
        return `
            <tr class="list-product-${product.id}">
                <td>${product.name}</td>
                <td><img src="./images/vscode.png" alt=""></td>
                <td>${product.price}VND</td>
                <td></td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>`;
    });
    listProductsBlock.innerHTML = htmls.join("");
}


// function renderProducts(products) {
//     var listProductsBlock = document.querySelector(".list-product");

//     var htmls = products.map(function (product) {
//       return `
//           <tr>
//               <tr  class="list-product-${product.id}" >
//                   <td>${product.name}</td>
//                   <td><img src="./images/vscode.png" alt=""></td>
//                   <td>${product.price}VND</td>
//                   <td></td>
//                   <td>
//                     <button>Sửa</button>
//                     <button>Xóa</button>
//                   </td>
//               </tr> 
//           </tr>
//   `
//     });
//     listProductsBlock.innerHTML = htmls.join("");
//   }

  
function getProducts(callback) {
  fetch(productAPI)
    .catch(e => {
      console.log("loi roi cu")
      console.log(e)
    })
    .then(function (response) {
      return response.json();
    })
    .then(data => {
      console.log(data)
    });
}

function createProducts(data, callback) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: JSON.stringify(data),
  };
  fetch(productAPI, options)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}

function handelDeleteProducts(id) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(productAPI + "/" + id, options)
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      var courseItems = document.querySelector(".course-items-" + id);
      if (courseItems) {
        courseItems.remove();
        alert("xoa thanh cong ");
      } else {
        alert("xoa that bai");
      }
    });
}

function renderProduct(products) {
    var listProductsBlock = document.querySelector(".list-product");
    var htmls = product.map(function (product) {
      return `
          <tr>
              <tr  class="list-product-${product.id}" >
                  <td>${product.name}</td>
                  <td><img src="./images/vscode.png" alt=""></td>
                  <td>${product.price}VND</td>
                  <td></td>
                  <td>
                  <button>Sửa</button>
                  <button>Xóa</button>
              </td>
              </tr> 
          </tr>
  `;
    });
    listProductsBlock.innerHTML = htmls.join("");
  }
// function renderProducts(Products) {
//   var listCourseBlock = document.querySelector("#list-Products");
//   var htmls = Products.map(function (course) {
//     return `
//             <li class="course-items-${course.id}">
//             <p>${course.name} </p>
//             <p>${course.age} </p>
//             <button onclick="handelDeleteProducts(${course.id}) ">Xoa </button>
//             </li>
//         `;
//   });
//   listCourseBlock.innerHTML = htmls.join("");
// }

// function handleCreateForm() {
//   var submitCoures = document.querySelector("#submit-btn");
//   submitCoures.onclick = function () {
//     var name = document.querySelector('input[name="name"]').value;
//     var age = document.querySelector('input[name="age"]').value;
//     var formData = {
//       name: name,
//       age: age,
//     };
//     createProducts(formData, function () {
//       getProducts(renderProducts);
//     });
//   };
// }
