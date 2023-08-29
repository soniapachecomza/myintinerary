import React from "react";
import "./slide.css";
export default function Slide({ images }) {
  return (
    <>
      <div className="d-flex gap-3 flex-wrap justify-content-center align-items-center w-75 ">
        {images.map((images) => {
          return (
            <div key={images._id} className=" contenedor mx-4">
              {
                <img
                  className="d-block  img-city "
                  key={images._id}
                  src={images.href}
                  alt={images.title}
                />
              }
              <div className="centrado">
                <h3 className="text-white text-nowrap text-center">
                  {images.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
