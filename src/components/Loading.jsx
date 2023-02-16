import React from "react";
import "../style/Loading.css";

const Loading = () => {
  return (
    <div className="contenedor_loading vh-100">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
