// AppAdmin.js
import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import homePageAdmin from "./pages/homePages.admin";
import LoginAdmin from "./loginAdmin";
// import Register from "./page/register";
// import Otp from "./page/otp";

function AppAdmin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập từ localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    history.push("/");
  };

  return (
    <div>
      <Switch>
        <Route path="/login">
          <LoginAdmin onLogin={handleLogin} />
        </Route>
        <PrivateRoute path="/" exact component={homePageAdmin} isLoggedIn={isLoggedIn} />
        <Route path="/" component={homePageAdmin} />
        {/* <Route path="/otp" component={Otp} /> */}
      </Switch>
    </div>
  );
}

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default AppAdmin;
