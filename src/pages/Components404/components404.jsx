import React from "react";
import error404 from "../../assets/img/error404.png";
import './404.css'
export default function Componente404() {
  return (
    <div className="d-flex justify-content-center">
      <img src={error404} className="error" alt="under construction" />
    </div>
  );
}