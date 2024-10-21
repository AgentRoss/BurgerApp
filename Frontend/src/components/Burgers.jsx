import React from 'react';
import list from '../../public/list.json';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const Burgers = () => {
  // Assuming 'Category' is a valid field in your list data
  const filterData = list.filter((data) => data.Category);
  console.log(filterData);

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
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />  
            ))}
          </Slider>
        </div>
      </div> 
    </>
  );
};

export default Burgers;
