import React, { useEffect, useState } from "react";

import Cards from "./Cards";
import {Link} from "react-router-dom";
import axios from 'axios';

const Menu = () => {

  const [burger, setBurger] = useState([])
  useEffect(() => {
    const getBurger = async()=> {
      try {
        const res = await axios.get("http://localhost:4001/burger")
        console.log(res.data);
        setBurger(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBurger();
  },[])

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here ! :)</span>
          </h1>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md Hover:bg-700 duration-300 mt-3">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {burger.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
