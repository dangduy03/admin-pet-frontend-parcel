// Loading.js
import React from "react";
import LoadingIcon from "../assets/icons/loading.svg";

function Loading() {
  return (
    <div className="container-fluid ">
      <img src={LoadingIcon} alt="loading" />
    </div>
  );
}

export default Loading;
