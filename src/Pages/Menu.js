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
      <h2> -----Quotation,Invoice and LR-----</h2>
      <div className="button-container">  
        <Link to='/HtmQoutation' className="htm-button"> Quotation</Link>
       </div>
      <div className="button-container">  
   <Link to='/HtmInvoice' className="htm-button">Invoice</Link>
       </div>
      <div className="button-container">  
       
   <Link to='/HtmLr' className="htm-button"> LR</Link>
       </div>
       
      
      
    </div>
  );
};

export default Menu;
