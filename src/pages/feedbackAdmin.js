import React from "react"
import HeaderAdmin from "../components/header.admin"
import SlidebarAdmin from "../components/slidebar.admin"
function feedback() {
  return (
    <div class="grid-container">
      <HeaderAdmin />
      <SlidebarAdmin />
    <div class="container mt-3 text-center">
      <div class="main-title">
        <h2 style={{ color: "aliceblue" }}>BÌNH LUẬN</h2>
      </div>
      <div class="input-btn mt-3">
        <input class="form-control" id="myInput" type="text" placeholder="Search.."/>
          <div class="add-product bg-white text-center ">
            <p>Thêm sản phẩm</p>
          </div> 
      </div>
      <br/>
        <table class="table table-bordered table-product ">
          <thead>
            <tr>
              <th>Tên người dùng</th>
              <th>Email</th>
              <th>Nội dung</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody id="myTable">
            <tr>
              <td>Trương Công Non</td>
              <td>nontruong@gmail.com</td>
              <td>mèo đẹp quá</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
            <tr>
              <td>Trương Công Non</td>
              <td>nontruong@gmail.com</td>
              <td>mèo đẹp quá</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
            <tr>
              <td>Trương Công Non</td>
              <td>nontruong@gmail.com</td>
              <td>mèo đẹp quá</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
</div>
    </div>
  )
}
export default feedback