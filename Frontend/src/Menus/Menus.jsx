import React from 'react'
import Navbar from "../components/Navbar"
import Menu from '../components/Menu'
import Footer from '../components/Footer'



const Menus = () => {
  return (
    <div>
      <Navbar />
     <div className='min-h-screen'>
     <Menu />
     </div>
      <Footer />
      
    </div>
  )
}

export default Menus
