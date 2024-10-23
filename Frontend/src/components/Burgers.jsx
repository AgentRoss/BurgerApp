import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const Burgers = () => {

  const [burger, setBurger] = useState([])
  useEffect(() => {
    const getBurger = async()=> {
      try {
        const res = await axios.get("http://localhost:4001/burger")
        console.log(res.data);
        const data = (res.data.filter((data) => data.Category));
        setBurger(data)
      } catch (error) {
        console.log(error)
      }
    }
    getBurger();
  },[])

  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-12 md:mt-12'>
        <div>
          <h1 className='font-semibold text-xl pb-2'>Check Out Our Menu</h1>
          <p>Our burger menu offers a variety of mouth-watering options, from classic cheeseburgers to gourmet specialties.</p>
        </div>
     
        <div>
          <Slider {...settings}>
            {burger.map((item) => (
              <Cards item={item} key={item.id} />  
            ))}
          </Slider>
        </div>
      </div> 
    </>
  );
};

export default Burgers;
