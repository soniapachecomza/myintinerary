import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './cardHome.css';

export default function CardHome() {
  return (
    <div className='px-0 d-flex justify-content-center'>
      <Row className='m-3 justify-content-center align-items-top' >
        <Col md={8} className='p-4 d-flex flex-column align-items-center gap-4'>

          <h4 className='display-4 text-center text-black text'>Take advantage of our seasonal promotions and travel more for less!</h4>

          <button className='call-button'>More info</button>

        </Col>
      </Row>
    </div>
  )
}