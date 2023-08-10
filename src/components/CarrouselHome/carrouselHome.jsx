import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Slide from "./slide";

function CarrouselHome() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch("/src/data/imagenCarrusel.json")
      .then((response) => response.json())
      .then((data) => {
        setDatos(data.slides);
      });
  }, []);

  return (
    <>
      {datos.length > 0 ? (
        <Carousel
          data-bs-theme="ligth"
          className="d-flex justify-content-center py-5 w-100 "
        >
          {datos.map((slide, index) => {
            return (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-center">
                  <Slide images={slide.image} />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      ) : (
        <>
          <Spinner animation="grow" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
        </>
      )}
    </>
  );
}

export default CarrouselHome;