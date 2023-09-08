import React from 'react'
import NavBar from '../components/navBar/NavBar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'




const MainLayout = () => {
  return (
    <div className='appLayout'>
        <NavBar/>
        <main className='flex-grow-1'>
        <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout