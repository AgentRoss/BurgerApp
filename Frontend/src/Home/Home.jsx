import React from 'react'
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Burgers from "../components/Burgers";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Burgers />
      <Footer />
    </div>
  )
}

export default Home
