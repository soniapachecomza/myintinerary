import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { BiDollarCircle } from "react-icons/bi";
import underConstructionImage from '../../assets/img/under.jpg';
import './itineraryCard.css';

const ItineraryCard = (itineraries) => {

    let array=[]
    for(let i = 0; i <= itineraries.price; i++){
        array.push(<BiDollarCircle key={i}/> )
    }

    return (
        <div className="card mb-3" key={`${itineraries._id}`}>
            <div className="row g-0">
                <div className="col-md-4">
                    <div className="card-img-container d-flex flex-column align-items-center p-3">
                        <img
                            src={itineraries.photo}
                            alt={itineraries.title}
                            className="card-img rounded-circle"
                        />
                        <h5>{itineraries.name}</h5>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title m-2">{itineraries.title}</h4>
                        <p className="card-text">
                            <strong>Duration:</strong> {itineraries.duration} horas
                        </p>
                        <p className="card-text m-2">
                            <strong>Hashtags:</strong> {itineraries.hashtags}
                        </p>
                        <p className="card-text p-2">
                            <strong>Value:</strong> {Array}
                        </p>
                        
                        <div>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <p className='btn btn-primary'>View More</p>
                                        </Accordion.Header>
                                    <Accordion.Body>

                                        <h2>Under Construction</h2>
                                        <img src={underConstructionImage} alt="Under Construction" className='w-100'/>
                                    </Accordion.Body>

                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItineraryCard