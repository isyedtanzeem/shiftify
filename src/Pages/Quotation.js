import React, { useState } from "react";
import "./Form.css";
import jsPDF from "jspdf";

import WaterMark from "./Images/ShiftifyWaterMark.png"; // Import your logo image
import Head from "./Images/ShiftifyHead.png"; // Import your logo image
import SupportLogo from "./support-logo.png";

import resix from "./Images/htmResix.png";
import seal from "./Images/seal.png";

import Signature from "./Images/signature.png";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


const Quotation = () => {
  const [formData, setFormData] = useState({
    transportChrFull: "",
    transportChrPart: "",
    carChrPart: "",
    carChrFull: "",
    from: "",
    toLocation:"",
    dateOfoPacking:"",
    loadPointFloor:"",
    unloadPointFloor:"",
    unloadPointLift:"",
    loadPointLift:"",
    advanceAmount:"",
    storageCharges: "",
    storageTotal: "",
    storageDays: "",
    name: "",
    mobile: "",
    address: "",
    email: "",
    dateOfoPacking: "",
    gst: "",
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
  setFormData({  transportChrFull: "",
  transportChrPart: "",
  carChrPart: "",
  carChrFull: "",
  from: "",
  toLocation:"",
  dateOfoPacking:"",
  loadPointFloor:"",
  unloadPointFloor:"",
  unloadPointLift:"",
  loadPointLift:"",
  advanceAmount:"",
  storageCharges: "",
  storageTotal: "",
  storageDays: "",
  name: "",
  mobile: "",
  address: "",
  dateOfoPacking: "",
  gst: "",
  email: "",})
}

const day = dateForCount.getDate();
const month = dateForCount.getMonth();

  let count = day + month ;

  const handleSubmit = (event) => {
    count = count + 366;
    event.preventDefault();
   
    
    generatePDF(count);
  };

  const generatePDF = (count) => {
    const pdf = new jsPDF();
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(14);

    pdf.addImage(Head, "PNG", 12, 6, 185, 34);
    pdf.addImage(WaterMark, "PNG", 12, 80, 120, 28);
    pdf.setFontSize(8);
    
   
    //input
    pdf.rect(12, 41, 95, 7);
    pdf.text(`NAME: ${formData.name}`, 13, 45, { align: "left" });
    pdf.rect(12, 48, 95, 7);
    pdf.text(`NUMBER: ${formData.mobile}`, 13, 52.5, { align: "left" });
    pdf.rect(12, 55, 95, 14);
    pdf.text(`ADDRESS: ${formData.address}`, 13, 59.5, { align: "left" });
    pdf.rect(107, 41, 38, 7);
    pdf.text(`QUOTATION NO: ${count}`, 108, 45.4, { align: "left" });

    const currentDate = new Date().toLocaleDateString();
    pdf.rect(145, 41, 52.5, 7);
    pdf.text(`DATE: ${currentDate}`, 150, 45.4);

    pdf.rect(107, 48, 90.5, 7);
    pdf.text(`FROM: ${formData.from}`, 108, 52.5);

    pdf.rect(107, 55, 90.5, 7);
    pdf.text(`TO: ${formData.toLocation}`, 108, 59.5);

    pdf.rect(107, 62, 90.5, 7);
    pdf.text(`DATE OF MOVING: ${formData.dateOfoPacking}`, 108, 66.5);

    //end of first layer

    //second layer
    pdf.setFontSize(8);
    pdf.text(12, 75, "Dear Sir/Madam");
    pdf.text(
      12,
      78,
      "We thank you for your valueable enquiry for Packing & Moving of your Office/House Articles On"
    );
    pdf.text(
      12,
      81,
      "Door to Door basis.We are in pleasure to Quote our reasonable charges as hereunder"
    );

    pdf.setFontSize(12);
    pdf.setFillColor(0, 151, 178);
    pdf.rect(12, 87, 150, 6, "F");

    pdf.setDrawColor(0, 0, 0);
    pdf.rect(12, 87, 12, 6);
    pdf.rect(24, 87, 85, 6);
    pdf.rect(109, 87, 26, 6);
    pdf.rect(135, 87, 27, 6);

    pdf.setTextColor(255, 255, 255);
    pdf.text(`Sl no`, 12.5, 91);
    pdf.text(`Particulars`, 54.5, 91);
    pdf.text(`Part Load`, 112.5, 91);
    pdf.text(`Full Load`, 138.5, 91);

    //line1
    pdf.rect(12, 93, 12, 6);
    pdf.rect(24, 93, 85, 6);
    pdf.rect(109, 93, 26, 6);
    pdf.rect(135, 93, 27, 6);

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    pdf.text(`1`, 17, 97);
    pdf.text(`Transportation charges-(Door to Door /Gdn to Gdn)`, 25, 97);
    pdf.text(`${formData.transportChrPart}`, 116.5, 97);
    pdf.text(`${formData.transportChrFull}`, 142.5, 97);

    console.log(formData.transportChrPart," ",formData.transportChrFull)

    let incFull;
    let incPart;

    if (formData.transportChrPart !== "") {
      incPart = "Included";
    } else {
      incPart = "";
    }
    if (formData.transportChrFull !== "") {
      incFull = "Included";
    } else {
      incFull = "";
    }

    //line2
    pdf.rect(12, 99, 12, 6);
    pdf.rect(24, 99, 85, 6);
    pdf.rect(109, 99, 26, 6);
    pdf.rect(135, 99, 27, 6);

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    pdf.text(`2`, 17, 103);
    pdf.text(`Packing charges - Using Quality packing materials`, 25, 103);
    pdf.text(`${incPart}`, 116.5, 103);
    pdf.text(`${incFull}`, 142.5, 103);

    //line3
    pdf.rect(12, 105, 12, 6);
    pdf.rect(24, 105, 85, 6);
    pdf.rect(109, 105, 26, 6);
    pdf.rect(135, 105, 27, 6);

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    pdf.text(`3`, 17, 109);
    pdf.text(`Unacking charges - Using Quality packing materials`, 25, 109);
    pdf.text(`${incPart}`, 116.5, 109);
    pdf.text(`${incFull}`, 142.5, 109);

    //line4
    pdf.rect(12, 111, 12, 6);
    pdf.rect(24, 111, 85, 6);
    pdf.rect(109, 111, 26, 6);
    pdf.rect(135, 111, 27, 6);

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    pdf.text(`4`, 17, 115);
    pdf.text(`Loading Charges & Unloading Charges`, 25, 115);
    pdf.text(`${incPart}`, 116.5, 115);
    pdf.text(`${incFull}`, 142.5, 115);

    //line5
    pdf.rect(12, 117, 12, 6);
    pdf.rect(24, 117, 85, 6);
    pdf.rect(109, 117, 26, 6);
    pdf.rect(135, 117, 27, 6);

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    pdf.text(`5`, 17, 121);
    pdf.text(`Car/Bike Transportation with Loading & Unloading`, 25, 121);
    pdf.text(`${formData.carChrPart}`, 116.5, 121);
    pdf.text(`${formData.carChrFull}`, 142.5, 121);

    //line6 Storage
    pdf.rect(12, 123, 12, 6);
    pdf.rect(24, 123, 85, 6);
    pdf.rect(109, 123, 53, 6);

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    pdf.text(`6`, 17, 127);
    pdf.text(
      `Storage Chrages ${formData.storageCharges} for ${formData.storageDays} day`,
      25,
      127
    );
   
    
    let storageTotal = parseInt(formData.storageCharges) * parseInt(formData.storageDays);

    if (isNaN(storageTotal)) {
      storageTotal = "";
    }

 console.log(storageTotal)

    pdf.text(`${ storageTotal}`, 116.5, 127);

    //line7
    pdf.rect(12, 129, 12, 6);
    pdf.rect(24, 129, 85, 6);
    pdf.rect(109, 129, 26, 6);
    pdf.rect(135, 129, 27, 6);

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    pdf.text(`7`, 17, 133);
    pdf.text(`Insurance-Carrier Risk @ 3% or Transit Risk @ 1.5% `, 25, 133);
    // pdf.text(`500`, 116.5, 133);
    // pdf.text(`500`, 142.5, 133);

    //line8 GST
    pdf.rect(12, 135, 12, 6);
    pdf.rect(24, 135, 85, 6);
    pdf.rect(109, 135, 26, 6);
    pdf.rect(135, 135, 27, 6);

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    pdf.text(`8`, 17, 139);
    pdf.text(`GST at ${formData.gst} %`, 25, 139);

    let transCarPartTotal =
    (parseInt(formData.transportChrPart) || 0) +
    (parseInt(formData.carChrPart) || 0) ;
    let partTotalMulti = transCarPartTotal * formData.gst;
    let gstAmountPart = partTotalMulti / 100;

    let transCarFullTotal =
      parseInt(formData.transportChrFull || 0) +
      parseInt(formData.carChrFull || 0);
    let fullTotalMulti = transCarFullTotal * formData.gst;
    let gstAmountFull = fullTotalMulti / 100;
    console.log("GST",gstAmountPart)
    if (isNaN(gstAmountPart) || gstAmountPart === 0 ) {
      gstAmountPart = "";
    }
    if (isNaN(gstAmountFull) || gstAmountFull=== 0) {
      gstAmountFull = "";
    }
    pdf.text(`${gstAmountPart}`, 116.5, 139);
    pdf.text(`${gstAmountFull}`, 142.5, 139);
   

    //line9 Grand Total
    pdf.rect(12, 141, 97, 8);
    pdf.rect(109, 141, 26, 8);
    pdf.rect(135, 141, 27, 8);

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(14);
    pdf.text(`Grand Total `, 82, 146.5);



    let partGrandTotal =
    (parseInt(formData.transportChrPart) || 0) +
    (parseInt(formData.carChrPart) || 0) +
    (parseInt(gstAmountPart) || 0) +
    (parseInt(storageTotal) || 0);
  
  console.log(partGrandTotal);
  
  let fullGrandTotal =
    (parseInt(formData.transportChrFull) || 0) +
    (parseInt(formData.carChrFull) || 0) +
    (parseInt(gstAmountFull) || 0);
  
  console.log(fullGrandTotal);
  
    if (isNaN(partGrandTotal) || partGrandTotal=== 0) {
      partGrandTotal = "";
    }
    if (isNaN(fullGrandTotal) || fullGrandTotal === 0) {
      fullGrandTotal = "";
    }
    pdf.text(`${partGrandTotal}`, 116.5, 146.5);
    pdf.text(`${fullGrandTotal}`, 142.5, 146.5);

    if (incFull || incPart !== "included") {
      pdf.rect(12, 150, 75, 8);
      pdf.rect(87, 150, 75, 8);
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(10);
      pdf.text(
        `Loading Point ${formData.loadPointFloor} floor Lift ${formData.loadPointLift} `,
        13,
        155
      );
      pdf.text(
        `Unloading Point ${formData.unloadPointFloor} floor Lift ${formData.unloadPointLift} `,
        88,
        155
      );
    } else {
      // Do nothing or handle the false case as needed
    }

    pdf.rect(12, 158, 75, 8);
    pdf.text(`Advance Paid ${formData.advanceAmount}`, 13, 163);

    //terms and conditions
    pdf.setFillColor(0, 151, 178);
    pdf.rect(12, 170, 155, 6, "F");
    pdf.rect(12, 170, 155, 6);

    pdf.setFontSize(11);
    pdf.setTextColor(255, 255, 255);

    pdf.text(`Terms and Condition`, 73, 174);
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(8);

    pdf.text(`1.We do not undertake responsibility of Flower Pots,Plants,Gas Cylinder,Inflammable items and prohibited liquid items.`, 13, 180);
    pdf.text(
      `2.The carrier or the Agent shall be exempted from any loss or damage through accident, pilferage, fire, rain, collision, any other `,
      13,
      183
    );
    pdf.text(
      ` road hazard. We there recommend that goods be insured. No individual policy/receipt from insurance company will be given.`,
      15,
      185.5
    );
    pdf.text(
      `3.The full payment is due at the loading point. This means that if the total amount is less than 20000 , the customer must pay the entire`,
      13,
      188
    );
    pdf.text(
      ` amount before or during the loading process.`,
      15,
      190.5
    );
    pdf.text(
      `4.All payment in favour of Shitify Packers and Movers. All disputes subject to BANGALORE Jurisdiction only.`,
      13,
      193
    );
    pdf.text(
      `5.All claims will be settled by the Insurance Company. In case of any claims, intimate letter for Insurancecomapny must be given in`,
      13,
      196
    );
    pdf.text(
      ` writing & the same will be intimated to you within 2 working days, in written or by mail.`,
      15,
      198.5
    );
    pdf.text(
      `6.In case of any breakdown of vehicle, the company might tranship the consignment as the need may arise.`,
      13,
      201
    );
    pdf.text(
      `7.We do not under take Electrical,Carpentry & Plumber works,We will provide on the basis of availability and will be charged extra.`,
      13,
      204
    );
    pdf.text(
      `8.GST will be extra as per government rule.`,
      13,
      207
    );
    pdf.text(
      `9.All packing materials must be returned on the same day. There's a Rs. 500.00 charge for materials collected on the following day. `,
      13,
      210
    );
    pdf.text(
      ` If you request our packing team to return the next day for your convenience,you'll be covering all associated expenses.`,
      15,
      212.5
    );
    pdf.text(
      `10.For Kerala state there is no unloading and unpacking Included `,
      13,
      215
    );
    pdf.text(
      `11.An additional documentation charge of Rs.200 will be applied upon successful delivery and must be paid by the customer.`,
      13,
      218
    );
  

    pdf.setFontSize(10);
    pdf.setTextColor(0, 151, 178);

    pdf.text(
      `Please Keep Your Cash/Jewellery, Mobile Phones,Credit Cards and Important Documentsin your Safe Custody/Locker `,
      15,
      230
    );
    pdf.text(`We are not Responsible for any kind of Loss`, 62, 234);
    pdf.line(15, 238, 200, 238); // horizontal line
    pdf.setLineWidth(0.5);
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(12);
    pdf.text(
      `Thanking you and awating for your valued work order to serve you.`,
      46,
      242
    );
    pdf.setFontSize(14);

    pdf.setTextColor(0, 151, 178);
  
    

    pdf.setTextColor(0, 0, 0);
    pdf.text(`For Shiftify Packers and Movers`, 18, 260);
    pdf.setFontSize(8);
    pdf.text(`This s Digitally Generated Quoation`, 78, 278);

    pdf.setFontSize(16);

    pdf.setTextColor(255, 255, 255);
    pdf.setFillColor(0, 151, 178);
    pdf.rect(12, 280, 185, 8, "F");
    pdf.text(`DOOR TO DOOR SERVICE ALL OVER INDIA`, 46, 286);

    //images
    pdf.addImage(resix, "PNG", 163, 80, 32, 135);
    pdf.addImage(seal, "PNG", 143, 240, 42, 42);

    // Remove spaces and special characters from name and mobile
const sanitizedName = formData.name.replace(/[^a-zA-Z0-9]/g, "");
const sanitizedMobile = formData.mobile.replace(/[^0-9]/g, "");

const pdfName = `Shiftify_${sanitizedName}_${sanitizedMobile}.pdf`;

pdf.save(pdfName);

    
  };

  return (
    <div className="form-container">
	{/* <h4><Link to="/">Go to Home</Link></h4> */}
      <h4>Shiftify Packers and Movers </h4>
      
      <form onSubmit={handleSubmit}>
      <div className="display-inline">

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="input margin"

            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required 
            title="Please enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        </div>
        <div className="display-inline">
          <div className="form-group">
            <label htmlFor="mobile">Mobile:</label>
            <input
              className="input margin"
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="from">Date of packing:</label>
            <input
              type="date"
              className="input"
              id="dateOfoPacking"
              name="dateOfoPacking"
              value={formData.dateOfoPacking}
              onChange={handleInputChange}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
        </div>
        <div className="display-inline">
          <div className="form-group">
            <label htmlFor="from">From Location:</label>
            <input
            className="input margin"
              type="text"
              id="from"
              name="from"
              value={formData.from}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="from">To Location:</label>
            <input
              type="text"
              id="toLocation"
              name="toLocation"
              value={formData.toLocation}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="display-inline">
          <div className="form-group">
            <label htmlFor="from">Part Load Amount:</label>
            <input
              className="input margin"
              type="text"
              id="transportChrPart"
              name="transportChrPart"
              value={formData.transportChrPart}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="from">Full Load Amount:</label>
            <input
              type="text"
            
              id="transportChrFull"
              name="transportChrFull"
              value={formData.transportChrFull}
              onChange={handleInputChange}
            />
          </div>
        </div>
{formData.transportChrFull || formData.transportChrPart  != "" ?
  <div>
        <div className="display-inline">
          <div className="form-group">
            <label htmlFor="from">Loading point floor:</label>
            <select
              className="input margin"
              id="loadPointFloor"
              name="loadPointFloor"
              value={formData.loadPointFloor}
              onChange={handleInputChange}
            >
              <option>Any</option>
              <option>Ground</option>
              <option>1st</option>
              <option>2nd</option>
              <option>3rd</option>
              <option>4th</option>
              <option>5th</option>
              <option>6th</option>
              <option>7th</option>
              <option>8th</option>
              <option>9th</option>
              <option>10th</option>
              <option>11th</option>
              <option>12th</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="from">Unloading point floor:</label>
            <select
              className="input"
              id="unloadPointFloor"
              name="unloadPointFloor"
              value={formData.unloadPointFloor}
              onChange={handleInputChange}
            >
              <option>Any</option>
              <option>Ground</option>
              <option>1st</option>
              <option>2nd</option>
              <option>3rd</option>
              <option>4th</option>
              <option>5th</option>
              <option>6th</option>
              <option>7th</option>
              <option>8th</option>
              <option>9th</option>
              <option>10th</option>
              <option>11th</option>
              <option>12th</option>
            </select>
          </div>
        </div>

        <div className="display-inline">
        <div className="form-group">
            <label htmlFor="from">Loading point lift:</label>
            <select
              className="input margin"
              id="loadPointLift"
              name="loadPointLift"
              value={formData.loadPointLift}
              onChange={handleInputChange}
            >
              <option>Available</option>
              <option>Not Available</option>
            
            </select>
          </div>
        <div className="form-group">
            <label htmlFor="from">Unloading point lift:</label>
            <select
              className="input"
              id="unloadPointLift"
              name="unloadPointLift"
              value={formData.unloadPointLift}
              onChange={handleInputChange}
            >
              <option>Available</option>
              <option>Not Available</option>
            
            </select>
          </div>
        
        </div>
        </div>
: ""
        }
        <div className="display-inline">

        <div className="form-group">
          <label htmlFor="from">CAR/BIKE Part Load:</label>
          <input
          
            type="text"
            className="input margin"
            id="carChrPart"
            name="carChrPart"
            value={formData.carChrPart}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="from">CAR/BIKE Full Load:</label>
          <input
            type="text"
            id="carChrFull"
            name="carChrFull"
            value={formData.carChrFull}
            onChange={handleInputChange}
          />
        </div>
        </div>

        <div className="display-inline">

        <div className="form-group">
          <label htmlFor="from">Storage Charges :</label>
          <input
            type="text"
            className="input margin"
            id="storageCharges"
            name="storageCharges"
            value={formData.storageCharges}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="from">Storage Days :</label>
          <input
            type="text"
            id="storageDays"
            name="storageDays"
            value={formData.storageDays}
            onChange={handleInputChange}
          />
        </div>
        </div>

        <div className="display-inline">

        <div className="form-group">
          <label htmlFor="from">GST :</label>
          <input
            type="text"
            className="input margin"
            id="gst"
            name="gst"
            value={formData.gst}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="from">Advance Amount :</label>
          <input
            type="text"
            id="advanceAmount"
            name="advanceAmount"
            value={formData.advanceAmount}
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

export default Quotation;