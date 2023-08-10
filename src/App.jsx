/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'

import './App.css'

import Home from './pages/Home/home'

import HomeLayout from './layouts/homeLayout'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HomeLayout>
        <Home/>
    
      </HomeLayout>
      
    
    </>
  )
}

export default App