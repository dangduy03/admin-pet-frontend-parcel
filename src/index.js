import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./utils/dataContext";
import AppAdmin from "./app";
 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContextProvider>
        <AppAdmin />
      </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("rootAdmin")
); // này là app ko cần quan tâm
