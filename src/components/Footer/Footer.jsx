import React from "react";
import Col from "react-bootstrap/Col";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import Nav from "react-bootstrap/Nav";
import Logo from "../Logo/Logo.jsx";
import "./footer.css";
import LinksPage from "../LinksPage/LinksPage";
import Navbar from "react-bootstrap/Navbar";

export default function Footer() {
  return (
    <footer className="footer d-flex flex-lg-row flex-column h-75">
      <Col
        lg={4}
        className="d-flex flex-column gap-3 justify-content-center align-items-center "
      >
        <Navbar variant="dark" className="d-lg-none">
          <Nav
            className="  my-lg-0 d-flex flex-row justify-content-end align-items-top pe-2 gap-3"
            navbarScroll
            variant="underline dark"
            defaultValue={"/"}
          >
            <LinksPage />
          </Nav>
        </Navbar>
        <Logo />
      </Col>
      <Col lg={8} className="p-2">
        <div className="d-flex justify-content-lg-between justify-content-center pt-2 flex-row">
          <Navbar variant="dark" className="d-none d-lg-block align-items-top">
            <Nav
              className="  my-lg-0 d-flex flex-row justify-content-end align-items-top pe-2 gap-3"
              navbarScroll
              variant="underline dark"
              defaultValue={"/"}
            >
              <LinksPage />
            </Nav>
          </Navbar>

          <div className="d-flex flex-row justify-content-end gap-3 pe-4 align-items-bottom ">
            <p className="text-bottom fs-6 fw-light text-white">Contact us:</p>
            <a href="#">
              <img src={facebook} className="logo" alt="Login" />
            </a>
            <a href="#">
              <img src={instagram} className="logo" alt="Login" />
            </a>
            <a href="#">
              <img src={whatsapp} className="logo" alt="Login" />
            </a>

          </div>

        </div>
        <p className="fs-6 text-white m-0">
              My Tinerary S.A. - Mendoza - Argentina
          </p>
          <p className="fs-6 text-white m-0">
            Curso MindHub  ©Sonia Pacheco 2023 - All rights reserved.
          </p>
      </Col>
   
    </footer>
  );
}
