// AppAdmin.js
import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import homePageAdmin from "./pages/homePages.admin";
import LoginAdmin from "./loginAdmin";
import ProductAdmin from "./pages/productAdmin";
import HandleHomePage from "./pages/handleHomePage";
import categoryAdmin from "./pages/categoryAdmin";
import accountUser from "./pages/userAdmin";
import feedback from "./pages/feedbackAdmin";
import billAdmin from "./pages/bill.admin";

function AppAdmin() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HandleHomePage}/>
        <Route path="/home" component={homePageAdmin} />
        <Route path="/login" component={LoginAdmin} />
        <Route path="/product" component={ProductAdmin}/>
        <Route path="/category" component={categoryAdmin}/>
        <Route path="/accountUser" component={accountUser}/>
        <Route path="/feedback" component={feedback}/>
        <Route path="/bill" component={billAdmin}/>
      </Switch>
    </div>
  );
}


export default AppAdmin;
