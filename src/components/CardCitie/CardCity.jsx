import React from "react";
import Card from "react-bootstrap/Card";
import { Link as Anchor } from "react-router-dom";
import "./cardcity.css";
export default function CardCity({ city }) {
  return (
    <Anchor to={"/details/" + `${city._id}`} className="text-decoration-none">
      <Card
        className="my-2 "
        style={{
          width: "18rem",
          backgroundColor: "rgb(255, 165, 0)",
        }}
      >
        <Card.Title className="text-center text-white bg-dark border border-rounded">
          {city.title}
        </Card.Title>
        <Card.Img
          variant="top"
          src={city.src}
          className="mh-75 img-city"
          alt={city.title + " city"}
        />
        <Card.Body className="px-2">
          <div className="d-flex gap-2">
            <Card.Title className="text-black">Country: </Card.Title>
            <Card.Text className="text-black">{city.country}</Card.Text>
          </div>
          <div className="d-flex gap-2">
            <Card.Title className="text-black">Currency: </Card.Title>
            <Card.Text className="text-black">{city.currency}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Anchor>
  );
}
