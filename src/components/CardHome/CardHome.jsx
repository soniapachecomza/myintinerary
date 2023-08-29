import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./cardHome.css";
import { Link as Anchor } from "react-router-dom";

export default function CardHome() {
  return (
    <div className="px-0 d-flex justify-content-center">
      <Row className="m-3 justify-content-center align-items-top">
        <Col md={8} className="p-4 d-flex flex-column align-items-center gap-4">
          <h4 className="titulo display-4 text-center fw-bold text-black">
          Take advantage of our seasonal promotions and travel more for less!
          </h4>
          <Anchor to={"/cities"} className="call-button m-5">
            More info
          </Anchor>
        </Col>
      </Row>
    </div>
  );
}
