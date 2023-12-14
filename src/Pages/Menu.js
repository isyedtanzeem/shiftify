import React, { useState } from "react";
import "./Form.css";
import jsPDF from "jspdf";

import logo from "./Images/Logo.png";

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


const Menu = () => {

  return (
    <div className="form-container">
	{/* <h4><Link to="/">Go to Home</Link></h4> */}
      <img src={logo} className="imgWidth"></img>
      <div className="button-container">  
        <Link to='/Qoutation' className="htm-button"> Quotation</Link>
       </div>
      <div className="button-container">  
   <Link to='/Invoice' className="htm-button">Invoice</Link>
       </div>
      <div className="button-container">  
       
   <Link to='/Lr' className="htm-button"> LR</Link>
       </div>
       
      
      
    </div>
  );
};

export default Menu;
