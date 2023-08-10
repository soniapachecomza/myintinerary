import React from 'react'
import './headerHome.css'
import NavBar from '../../components/NavBar/navBar'

export default function HeaderHome() {
  return (
    <>
      <header className='home-header sticky-top'>
        <NavBar />
      </header>
    </>
  )
}