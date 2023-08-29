import React from "react";
import Card from "react-bootstrap/Card";
import "./carddetails.css";

export default function CardDetails({ city }) {
  return (
    <Card
      className="my-2 flex-md-row flex-column align-items-md-center"
      style={{
        width: "80%",
        height: "80%",
        backgroundColor: "rgba(255,255,255,0.6)",
      }}
    >
      <Card.Img
        src={city.src}
        className="vh-75 vw-50 img-city"
        alt={city.title + " city"}
      />
      <Card.ImgOverlay>
        <Card.Title className="text-black text-bold fs-1 back-text  text-center ">
          {city.title}
        </Card.Title>
      </Card.ImgOverlay>
      <Card.Body className="w-100">
        <div className="d-flex gap-2 flex-column gap-1">
          <Card.Title className="text-center bg-dark text-white">
            Country
          </Card.Title>
          <Card.Text className="text-center text-black">
            {city.country}
          </Card.Text>
        </div>
        <div className="d-flex gap-2 flex-column gap-1">
          <Card.Title className="text-center bg-dark text-white">
            Currency
          </Card.Title>
          <Card.Text className="text-center text-black">
            {city.currency}
          </Card.Text>
        </div>
        <div className="d-flex gap-2 flex-column gap-1">
          <Card.Title className="text-center bg-dark text-white">
            Description
          </Card.Title>
          <Card.Text className="text-center text-black">
            {city.description}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}
