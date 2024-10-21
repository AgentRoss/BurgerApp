import React from 'react'
import Navbar from "../components/Navbar"
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import list from "../../public/list.json"


const Menus = () => {
  console.log(list)
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
