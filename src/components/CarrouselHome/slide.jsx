import React from "react";
import "./slide.css";
export default function slide({ image }) {
  return (
    <>
      <div className="d-flex gap-3 flex-wrap justify-content-center align-items-center w-75 ">
        {image.map((image, index) => {
          return (
            <div key={index} className=" contenedor mx-4">
              {
                <img
                  className="d-block  img-city "
                  key={index}
                  src={image.href}
                  alt={image.title}
                />
              }
              <div className="centrado">
                <h3 className="text-white text-nowrap text-center">
                  {image.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}