import React, { useState } from "react";
import "./Form.css";
import jsPDF from "jspdf";

import SupportLogo from "./support-logo.png";

import resix from "./Images/resix.png";
import Signature from "./Images/signature.png";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


const Menu = () => {

  return (
    <div className="form-container">
	{/* <h4><Link to="/">Go to Home</Link></h4> */}
      <h2> Shiftify Packers and Movers</h2>
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
