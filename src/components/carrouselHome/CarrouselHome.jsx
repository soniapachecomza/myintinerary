import React from 'react';
import './carrouselHome.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { v4 } from 'uuid'



const CarrouselHome = () => {
    const photoCities = [
        [
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2015/09/ruta-de-los-7-lagos-1.jpg',
                name: 'Neuquen'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2015/07/ushuaia-6.jpg',
                name: 'Ushuaia'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/12/Qu%C3%A9-ver-en-Mendoza-Parque-Central.jpg',
                name: 'Mendoza'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2015/10/Iguazu.jpg',
                name: 'Iguazu'
            }

        ],
        [
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2023/05/cosas-interesantes-que-hacer-esta-primavera-en-barcelona-1.jpg',
                name: 'Barcelona'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/05/Londres-3.jpg',
                name: 'London'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2020/12/venice-picture-id121009706.jpg',
                name: 'Venice'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2018/06/jardines-de-luxemburgo.jpg',
                name: 'Paris'
            }

        ],
        [
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2019/10/qatar1-min.jpg',
                name: 'Doha'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2020/04/Haedong-Yonggungsa.jpg',
                name: 'Seul'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2022/11/consejos-al-viajar-a-la-india.jpg',
                name: 'Taj Mahal'
            },
            {
                image: 'https://elviajerofeliz.com/wp-content/uploads/2015/10/china.jpg',
                name: 'Shangai'
            }

        ]
    ]

    let [slide, setSlide] = useState(0)
    const prev = () => {
        if (slide == 0) {
            setSlide(photoCities.length - 1)
        } else {
            setSlide(slide - 1)
        }

    }
    
    useEffect(() => {        
       const interval = setInterval(() => { 
            next() 
        }, 3000)
        return ()=> {clearInterval(interval) }
    }, )

    const next = () => {
        if (slide == photoCities.length - 1) {
            setSlide(0)
        } else {
            setSlide(slide + 1)
        }
    }
    
    return (
        <div className='carousel' >
            <button className='button' onClick={prev} > <FcPrevious /> </button>
            <div className='carouselSlide container-fluid ' >
                <div className='carouselTitle' >
                    <h2>Popular MyTineraries</h2>
                </div>
                <div className='d-flex align-content-center flex-wrap justify-content-evenly'>
                    {
                        photoCities[slide].map(card => 
                            <div key={v4()} className="card bg-dark text-black align-self-center ">
                                <img src={card.image} className="card-img" 
                                    style={{width: '500px', height:'300px'}} 
                                    alt={card.name}/>
                                    <div className="card-img-overlay">
                                        <h5 className="card-title p-3">{card.name}</h5>
                                    </div>
                            </div>
                        )
                    }                   
                </div>
            </div>


            <button className='button' onClick={next} > <FcNext /> </button>
        </div>

    )
}

export default CarrouselHome