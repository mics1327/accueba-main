import {Routes, Route} from "react-router-dom";
import React, {useState} from "react";
import NavBarAdm from "../Components/NavBars/NavBarAdm";

export function AdminPage(){
    return (<>
    <div className="page-container">
        <div className="content-wrap">
        <NavBarAdm />
        <Routes></Routes>
        </div></div>
    </>)
}