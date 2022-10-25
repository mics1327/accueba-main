import {Routes, Route} from "react-router-dom";
import React, {useState} from "react";
import NavBarHome from "../Components/NavBars/NavBarHome";
import LoginBtn from "../Components/Buttons/LoginBtn";

export function Homepage(){
    return(<>
        <NavBarHome />
        <LoginBtn />
    </>)
}