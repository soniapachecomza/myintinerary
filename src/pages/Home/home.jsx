import React from 'react';
import CardHome from '../../components/CardHome/cardHome'
import floresHome from '../../assets/floresHome.jpg'
import CarrouselHome from '../../components/CarrouselHome/carrouselHome'
import './home.css'

export default function Home() {
  return (
    
    <main className='home-main'>
      <section>
      <CardHome href={floresHome}/>
      </section>
       <section className='d-flex justify-content-center container w-75'>
      <CarrouselHome/>

       </section>
        
       </main>
  )
}