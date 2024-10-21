import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom"
import Menus from "./Menus/Menus";
import Signup from "./components/Signup";
import Contact from "./components/Contact";


const App = () => {
  return (
    <>
      {/* <Home /> */}
      <Routes>
       <Route path="/" element={<Home />} />
       <Route  path="/menu" element={<Menus />}/>
       <Route  path="/signup" element={<Signup />}/>
       <Route  path="/contact" element={<Contact />}/>
       
      </Routes>

    </>
  );
};

export default App;
