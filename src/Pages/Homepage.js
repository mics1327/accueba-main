import {Routes, Route} from "react-router-dom";
import React, {useState} from "react";
import NavBarHome from "../Components/NavBars/NavBarHome";
import LoginBtn from "../Components/Buttons/LoginBtn";
import About from "./HomePage_Pages/About";
import Contact from "./HomePage_Pages/Contact";


export function Homepage(){
    return(<>
    <div className="page-container">
        <div className="content-wrap">
        <NavBarHome />
        <Routes>
          <Route path="/"/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <LoginBtn />
        </div>
        </div>
    </>)
}