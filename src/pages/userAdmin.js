
import React, { useEffect, useState } from "react";
import HeaderAdmin from "../components/header.admin";
import SlidebarAdmin from "../components/slidebar.admin";
import "../style/pages/style.admin.css"
import HeaderAdmin from "../components/header.admin";
import apiService from "../services/apiService";
import { API_ENDPOINTS } from "../utils/apiRoute";
import getApiHooks from "../utils/getApiHook";
import Search from "../components/search";
function accountUser() {

  const [accountUser, setAccountUser] = useState([]);
  const [fullname, setFullName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("")
  const [address, setAddress] = useState([])
  const [password, setPassword] = useState([]);
  const [phone, setPhone] = useState("");
  const [habbit, setHabbit] = useState("");
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await apiService.get(API_ENDPOINTS.USER.BASE);
        setAccountUser(userResponse.data);
        console.log(userResponse.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const resetForm = () => {
    setFullName('');
    setName("");
    setEmail('');
    setAddress('')
    setRole('');
    setAvatar("");
    setPhone('');
    setHabbit('');
    setPassword('');
  };

  const createAccount = async (event) => {
    event.preventDefault();

    const data = {
      fullname,
      name,
      email,
      address,
      role,
      phone,
      password, habbit, avatar
    };

    try {
      const response = await apiService.post(API_ENDPOINTS.USER.ADD_USER, data);
      alert("Thêm tài khoản thành công");
      console.log(response.data)
      resetForm();
      document.getElementById("userForm").querySelector(".btn-close").click();
    } catch (error) {
      alert("Thêm tài khoản thất bại");
      console.error(error);
    }
  };


  const updateUser = async (event, userId) => {
    event.preventDefault();
    const data = {
      name,
      fullname,
      email,
      role,
      address,
      phone,
      habbit, password, avatar
    };
    try {
      const response = await apiService.put(`${API_ENDPOINTS.USER.UPDATE_USER}/${userId}`, data);
      alert("Cập nhật tài khoản thành công");
      const updatedUsers = users.map(user =>
        user._id === userId ? response.data : user
      );
      setUsers(updatedUsers);
      resetForm();
      document.getElementById("userForm").querySelector(".btn-close").click();
      console.log(response.data)
    } catch (error) {
      alert("Cập nhật tài khoản thất bại");
      console.error(error);
    }
  };

  const deleteUser = async (userId) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa tài khoản này?")) {
      return;
    }

    try {
      await apiService.delete(`${API_ENDPOINTS.USER.BASE}/${userId}`);
      alert("Xóa tài khoản thành công");
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  const openEditForm = (user) => {
    setName(user.username)
    setFullName(user.fullName);
    setEmail(user.email);
    setRole(user.role);
    setAddress(user.address);
    setPhone(user.phoneNumber);
    setHabbit(user.habbit);
    setPassword(user.password);
    setAvatar(user.avatar);

    const modal = new bootstrap.Modal(document.getElementById("userForm"));
    modal.show();
  };

  const userWithSTT = accountUser.map((account, index) => ({
    ...account,
    stt: index + 1,
  }));

  return (
    <div className="grid-container">
      <HeaderAdmin />
      <SlidebarAdmin />
      <div className="container mt-3 text-center">
        <div className="main-title">
          <h2 style={{ color: "aliceblue" }}>Quản lý người dùng</h2>
        </div>
        <div className="input-btn mt-3">
          <input className="form-control" id="myInput" type="text" placeholder="Tìm kiếm.." />
          {/* <button
            className="btn btn-primary text-white newUser"
            onClick={resetForm}
            data-bs-toggle="modal"
            data-bs-target="#userForm"
          >
            {/* Thêm người dùng <i className="bi bi-people"></i> 
          </button> */}
        </div>
        <br />
        <div className="modal fade" id="userForm">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Fill the form</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form id="myForm" onSubmit={createAccount}>
                  <div className="inputField">
                    <div>
                      <label htmlFor="name">Tên tài khoản:</label>
                      <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="fullName">Họ và tên:</label>
                      <input type="text" id="fullName" required value={fullname} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="status">Trạng thái:</label>
                      <select
                        className="form-control"
                        id="status"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        {accountUser
                          .filter(option => option.role === 'USER' || option.role === 'ADMIN')
                          .map((option) => (
                            <option key={option._id} value={option.role}>
                              {option.role}
                            </option>
                          ))}
                      </select>
                      {/* Rest of your component JSX */}
                    </div>
                    <div>
                      <label htmlFor="password">Mật khẩu:</label>
                      <input
                        type="password"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="habbit">Sở thích:</label>
                      <input
                        type="text"
                        id="habbit"
                        value={habbit}
                        onChange={(e) => setHabbit(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="avatar">Avatar:</label>
                      <input
                        type="text"
                        id="avatar"
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone">Số điện thoại:</label>
                      <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="address">Địa chỉ:</label>
                      <input type="text" id="address" required value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" form="myForm" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <table class="table table-bordered table-product ">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên tài khoản</th>
              <th>Họ và tên </th>
              <th>Email</th>
              <th>Trạng thái</th>
              <th>Địa chỉ</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody id="myTable">
            {userWithSTT.map((accountUser) => (
              <tr key={accountUser}>
                <td>{accountUser.stt}</td>
                <td>{accountUser.username}</td>
                <td>{accountUser.fullName}</td>
                <td>{accountUser.email}</td>
                <td>{accountUser.role}</td>
                <td>{accountUser.address}</td>
                <td>
                  <button className="btn-handle" onClick={() => openEditForm(accountUser)}>Sửa</button>
                  <button className="btn-handle" onClick={() => deleteUser(accountUser._id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Search />
      </div>
    </div>

  )
}
export default accountUser