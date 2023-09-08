import React from 'react'
import './heroMain.css'
import { Link as Anchor, NavLink } from 'react-router-dom';


const HeroMain = () => {
  return (
    <div className='bannerHero'>
      <div className='boxHeroContenedor'>
      <div className='boxHero'>
          <h4 className="titulo display-4 text-center fw-bold text-black">
            Take advantage of our seasonal promotions and travel more for less!
          </h4>
          <Anchor to={"/cities"} className="call-button m-5">
            More info
          </Anchor>
      </div>
      </div>
    </div>
  )
}

export default HeroMain