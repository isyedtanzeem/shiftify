import React, { useState } from "react";
import "./Form.css";
import jsPDF from "jspdf";

import Logo from "./Images/Logo.png"; // Import your logo image
import SupportLogo from "./support-logo.png";

import resix from "./Images/resix.png";
import Signature from "./Images/signature.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Lr = () => {
  const [formData, setFormData] = useState({
    truckNumber: "",
    from: "",
    toLocation: "",
    descriptionOfGood: "",
    goodsValue: "",
    name: "",
    balanceToPay:"",
    mobile: "",
    address: "",
    email: "",
    dateOfoPacking: "",
    gst: "",
    docCharges: "",
    description: "",
    noOfPackage: "",
  
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  let dateForCount = new Date();

  const handleClear = () => {
    setFormData({
      transportCharges: "",
      from: "",
      toLocation: "",
      storageCharges: "",
      insurance: "",
      name: "",
      mobile: "",
      address: "",
      email: "",
      dateOfoPacking: "",
      gst: "",
      docCharges: "",
      description: "",
      mobOne: "",
      mobTwo: "",

    });
  };

  const day = dateForCount.getDate();

  let count = day + 166;

  const handleSubmit = (event) => {
    count = count + 1;

    console.log(count, "count");
    event.preventDefault();

    generatePDF(count);
  };

  const generatePDF = (count) => {
    const pdf = new jsPDF({
      orientation: 'landscape',
    });
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(14);

    pdf.addImage(Logo, "PNG", 8, 5, 100, 40);
    pdf.setFontSize(18);
    pdf.setFont(undefined, "bold");
    pdf.text(
      135,
      18,
      "Shiftify Packers and Movers"
    );
    pdf.setFontSize(10);
    pdf.setFont(undefined, "none");

    pdf.text(
      135,
      25,
      "No. 170,6th cross,Balaji Nagar, Bangalore - 560029"
    );
    pdf.text(
      135,
      30,
      "E-Mail :info@shiftify.in             Web : www.shiftify.in"
    );
    pdf.text(
      135,
      35,
      "Contact:9845201449"
    );


    pdf.setFontSize(14);

  
    pdf.setFontSize(10);

    pdf.text(
      232,
      173,
      "This Condigment shall not be"
    );
    pdf.text(
      232,
      177,
      "detained  diverted  re-booked "
    );
    pdf.text(
      232,
      181,
      "without    Consignee    bank's  "
    );
    pdf.text(
      232,
      185,
      "written  permission   will  be  "
    );
    pdf.text(
      232,
      189,
      "delivered    at     destination  "
    );


    

    pdf.setFontSize(24);
    pdf.setFont(undefined, "bold");
    pdf.text(13, 58,"CONSIGNEE COPY");
   
    var d = new Date(); 
    var t = new Date().getTime();
    var randomnum = Math.floor(Math.random() * (100 -  50000)) + 100;
    randomnum = d.getFullYear() + (d.getMonth()+1) + (d.getDate()) + randomnum; 
    randomnum = randomnum + t;
    randomnum = randomnum - 1699000090000 ;

    pdf.setFontSize(14);
    pdf.setFont(undefined, "Bold");
    pdf.rect(103, 50, 70, 10);
    pdf.rect(173, 50, 50, 10);
    pdf.rect(223, 50, 58, 10);
    const currentDate = new Date().toLocaleDateString();
    pdf.text(174, 56.5,`DATE: ${currentDate}`);
    pdf.text(106, 56.5,`LR No: SPM${randomnum}`);
    pdf.text(224, 56.5,`Truck No: ${formData.truckNumber}`);
   
    pdf.rect(12, 70, 270, 18);
    pdf.text(14, 77,`Consignor Name    : ${formData.consignorName}`);
    pdf.text(14, 84,`Consignor Address : ${formData.consignorAddress}`);
    pdf.rect(12, 90, 270, 18);
    pdf.text(14, 97,`Consignee Name     : ${formData.consigneeName}`);
    pdf.text(14, 104,`Consignee Address : ${formData.consigneeAddress}`);

    pdf.rect(12, 110, 90, 10);
    pdf.rect(102, 110, 90, 10);
    pdf.rect(192, 110, 90, 10);
    pdf.text(14, 116,`From Location: ${formData.from}`);
    pdf.text(104, 116,`To Location: ${formData.toLocation}`);
    pdf.text(194, 116,`Customer's No: ${formData.mobOne} , ${formData.mobTwo}`);

    pdf.setFontSize(16);
    pdf.setFont(undefined, "bold");
    pdf.rect(12, 126, 35, 10);
    pdf.text(14, 133,`No of Goods`);
    pdf.rect(47, 126, 135, 10);
    pdf.text(70, 133,`Description of Goods (Said to contain)`);
    pdf.rect(182, 126, 42, 10);
    pdf.text(184, 133,`Value of Goods`);
    pdf.rect(224, 126, 58, 10);
    pdf.text(233, 133,`Balance Amount`);
    pdf.setFont(undefined, "none");
    pdf.rect(12, 136, 35, 10);
    pdf.text(27, 143,`${formData.noOfPackage}`);
    pdf.rect(47, 136, 135, 10);
    pdf.text(49, 143,`${formData.descriptionOfGood}`);
    pdf.rect(182, 136, 42, 10);
    pdf.text(210, 143,`${formData.goodsValue}`,'right');
    pdf.rect(224, 136, 58, 10);
    pdf.text(250, 143,`${formData.balanceToPay}`);

    pdf.text(12, 153.5,`Carriers are not responsible for Breakage , Leakage, Fire Accident and any Damage caused`);

    pdf.rect(12, 157, 100, 50)
    pdf.rect(112, 157, 115, 50)
    pdf.rect(227, 157, 54, 50)
    pdf.setFont(undefined, "bold");
    pdf.text(38, 164,`AT OWNER'S RISK`);
    pdf.text(160, 164,`NOTICE`);
    pdf.text(240, 164,`CAUTION`);
   
    
    pdf.setFont(undefined, "none");
    pdf.text(48, 173,`INSURANCE`);
   
    pdf.setFontSize(14);
pdf.text(14, 180,`Company:`);
pdf.text(14, 188,`Policy No:                                Date:`);
pdf.text(14, 196,`Amount:                                   Risk:`);
   
pdf.setFontSize(10);
pdf.text(118, 173,`The Consigment covered by this ser  of special lory receipt  from shall be `);
pdf.text(118, 178,`stored at  the destination under the  control of the Transport operator and `);
pdf.text(118, 183,`shall be delivered to or to the order of the  consignee  bank whose nam is`);
pdf.text(118, 188,`mentioed in the lorry receipt. it will under no circumstances be delivered `);
pdf.text(118, 193,`to anyone without the written  authority from  the  consignee  bank of its `);
pdf.text(118, 198,`order, endorsed on the Consignee copy on  a seprate  letter  of  Authority`);


pdf.rect(12, 157, 100, 50)

    // Remove spaces and special characters from name and mobile
    const sanitizedName = formData.consignorName.replace(/[^a-zA-Z0-9]/g, "");
    const sanitizedMobile = formData.mobile.replace(/[^0-9]/g, "");

    const pdfName = `Shiftify_LR_${sanitizedName}.pdf`;

    pdf.save(pdfName);
  };

  return (
    <div className="form-container">
      {/* <h4><Link to="/">Go to Home</Link></h4> */}
      <h4>Shiftify LR</h4>

      <form onSubmit={handleSubmit}>
        <div className="display-inline">
          <div className="form-group">
   
            <input
              type="text"
              className="input margin"
              id="consigneeName"
              name="consigneeName"
              placeholder="Consignee Name:"

              value={formData.consigneeName}
              onChange={handleInputChange}
              required
              title="Please enter name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="consignorName"
              placeholder="Consignor Name:"

              name="consignorName"
              value={formData.consignorName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="display-inline">
          <div className="form-group">
            
            <input
              type="text"
              className="inputaddress "
              id="consigneeAddress"
              placeholder="Consignee Address:"
              name="consigneeAddress"
              value={formData.consigneeAddress}
              onChange={handleInputChange}
              required
              title="Please enter name"
            />
          </div>
          </div>
          <div className="display-inline">
          <div className="form-group">
           
            <input
            className="inputaddress"
              type="text"
              id="consignorAddress"
              placeholder="Consignor Address:"
              name="consignorAddress"
              value={formData.consignorAddress}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="display-inline">
          <div className="form-group">
           
            <input
              className="input margin"
              type="text"
              id="mobOne"
              name="mobOne"
              placeholder="Mobile 1"
              value={formData.mobOne}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
           
            <input
              className="input"
              type="text"
              id="mobTwo"
              name="mobTwo"
              placeholder="Mobile 2"
              value={formData.mobTwo}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="display-inline">
          <div className="form-group">
            <input
              className="input margin"
              type="text"
              id="from"
              placeholder="From Location"

              name="from"
              value={formData.from}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
           
            <input
              type="text"
              id="toLocation"
              placeholder="To Location"
              name="toLocation"
              value={formData.toLocation}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="display-inline">
          <div className="form-group">
            <input
              type="text"
              className="input margin"
              id="noOfPackage"
              placeholder="No of Package:"
              name="noOfPackage"
              value={formData.noOfPackage}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="input margin"
              id="truckNumber"
              placeholder="Truck No"
              name="truckNumber"
              value={formData.truckNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="display-inline">
          <div className="form-group">
           
            <input
              type="text"
              className="inputaddress "
              id="descriptionOfGood"
              name="descriptionOfGood"
              placeholder="Description of Goods"
              value={formData.descriptionOfGood}
              onChange={handleInputChange}
            />
          </div>
          </div>
          <div className="display-inline">

          <div className="form-group">
            <input
              type="text"
              className="input margin"
              id="balanceToPay"
              name="balanceToPay"
              placeholder="Balance To Pay:"
              value={formData.balanceToPay}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
           
           <input
             type="text"
             id="goodsValue"
             name="goodsValue"
             placeholder="Goods Value :"
             value={formData.goodsValue}
             onChange={handleInputChange}
           />
         </div>
        </div>

      

        <button type="submit" className="submit-button margin">
          Download
        </button>
        <button className="submit-button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default Lr;
