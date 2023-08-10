import React from 'react';
import Col from 'react-bootstrap/Col';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import whatsapp from '../../assets/whatsapp.png';
import logo from '../../assets/logo.png';
import Nav from 'react-bootstrap/Nav';

import './footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='d-flex '>
        <Col md={3} className='d-flex flex-column justify-content-center align-items-center'>
          <a href="#" className=' display-5 link-underline link-light link-underline-opacity-0'>
            <img src={logo} className='logos' alt='logo' />
          </a>

        </Col>
        <Col md={9}>
          <div className='d-flex justify-content-between pt-2 flex-row'>

            <div className='d-flex flex-row justify-content-end gap-3 align-items-top'>
              <p className='text-bottom fs-6 fw-light text-white'>Contact us on our networks:</p>
              <a href='#'><img src={facebook} className="logo" alt="Login" /></a>
              <a href='#'><img src={instagram} className="logo" alt="Login" /></a>
              <a href='#'><img src={whatsapp} className="logo" alt="Login" /></a>
            </div>

            <Nav
              className=" my-2 my-lg-0 d-flex flex-row justify-content-end align-items-top pe-2 gap-3"
              navbarScroll
              variant="underline"
              defaultActiveKey="/home">

              <a href="/home" className='text-warning text-decoration-none '>Home</a>
              <a href="#action2" className='text-black text-decoration-none'>Cities</a>

            </Nav>

          </div>


        </Col>

      </div>
      <div className='d-flex justify-content-between bg-black'>
            <p className='fs-5 fw-bold text-white m-2'>Create by SoniaPacheco - 2023 </p>
            <p className='fs-6 fw-bolder text-white m-3'>MindHub</p>
          </div>

    </footer>
  )
}