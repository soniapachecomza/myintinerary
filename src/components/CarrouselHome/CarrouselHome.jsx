import Carrousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Slide from "./Slide.jsx";

function CarrouselHome() {
  const [data, setDatos] = useState([]);
  const [slide, setSlide] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/api/cities/?name")
      .then((response) => response.json())
      .then((data) => {
        setDatos(data.response);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    const armadoSlide = [];
    if (data && Array.isArray(data.response) && data.response.length >= 4) {
      for (let i = 0; i < Math.floor(data.response.length / 4); i++) {
        armadoSlide.push(data.response.slice(i * 4, i * 4 + 4));
      }
      setSlide(armadoSlide);
    }
  }, [data]);

  return (
    <>
      {slide.length > 0 ? (
        <Carrousel
          data-bs-theme="ligth"
          className="d-flex justify-content-center py-5 w-100 "
        >
          {slide.map((slider, index) => {
            return (
              <Carrousel.Item key={index}>
                <div className="d-flex justify-content-center">
                  <Slide images={slider} />
                </div>
              </Carrousel.Item>
            );
          })}
        </Carrousel>
      ) : (
        <>
          <Spinner animation="grow" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </>
      )}
    </>
  );
  }
export default CarrouselHome;
