import React, { useState } from "react";
import "./Form.css";
import jsPDF from "jspdf";

import Logo from "./Images/Logo.png"; // Import your logo image
import SupportLogo from "./support-logo.png";

import resix from "./Images/resix.png";
import Signature from "./Images/signature.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const BocInvoice = () => {
  const [formData, setFormData] = useState({
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
    const pdf = new jsPDF();
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(14);

    pdf.addImage(Logo, "PNG", 15, 5, 80, 20);
    pdf.setFontSize(8);
    pdf.text(
      12,
      30,
      "No. 320,10th cross NGR Layout, Masjid Road,Roopena Agrahara, Bangalore - 560068"
    );
    pdf.text(
      12,
      34,
      "E-Mail :htmpackersandmovers@gmail.com             Web : www.htmmovers.in"
    );
    pdf.setFontSize(10);
    pdf.setFont(undefined, "bold");

    pdf.text(130, 18, "FRIGHT BILL");

    pdf.setFillColor(0,63,171);

    // Add a filled rectangular box to the PDF
    pdf.rect(130, 22, 26, 10, "F"); // 'F' stands for 'Fill'

    // Set text color to white
    pdf.setTextColor(255, 255, 255); // White color
    pdf.text(`CUSTOMER`, 133, 26.5);
    pdf.text(`HELPLINE`, 134.5, 30.5);

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    pdf.setFont(undefined, "none");
    pdf.text(156, 26, " 72042 08209");
    pdf.text(156, 30, " 97412 42669");
    pdf.addImage(SupportLogo, "PNG", 176, 21, 15, 10);

    //input
    pdf.rect(12, 41, 95, 7);
    pdf.text(`NAME: ${formData.name}`, 13, 45, { align: "left" });
    pdf.rect(12, 48, 95, 7);
    pdf.text(`NUMBER: ${formData.mobile}`, 13, 52.5, { align: "left" });
    pdf.rect(12, 55, 95, 14);
    pdf.text(`ADDRESS: ${formData.address}`, 13, 59.5, { align: "left" });

    const currentDate = new Date().toLocaleDateString();
    pdf.rect(107, 41, 83, 7);
    pdf.text(`DATE: ${currentDate}`, 108, 45.4);
    pdf.text(`BILL NO: ${count}`, 108, 52.5, { align: "left" });

    pdf.rect(107, 48, 83, 7);
    pdf.rect(107, 55, 83, 7);
    pdf.text(`FROM: ${formData.from}`, 108, 59.5);

    pdf.rect(107, 62, 83, 7);
    pdf.text(`TO: ${formData.toLocation}`, 108, 65.5);

    //end of first layer

    pdf.setFontSize(16);
    pdf.setFillColor(0,63,171);
    pdf.rect(12, 82, 180, 10, "F");

    pdf.setDrawColor(0, 0, 0);
    pdf.rect(12, 82, 125, 10);
    pdf.rect(137, 82, 55, 10);

    pdf.setFont(undefined, "bold");
    pdf.setTextColor(255, 255, 255);
    pdf.text(`Particulars`, 42, 88);
    pdf.text(`Amount`, 154, 88);

    pdf.setTextColor(0, 0, 0);
    pdf.setFont(undefined, "none");
    //transportation charges
    pdf.rect(12, 92, 125, 10);
    pdf.rect(137, 92, 55, 10);
    pdf.text(`Transportation Charges`, 42, 98);
    pdf.text(`${formData.transportCharges}`, 154, 98);

    pdf.text(`Packing Charges`, 42, 108);
    pdf.text(`Unpacking Charges`, 42, 118);
    pdf.text(`Loading Charges`, 42, 128);
    pdf.text(`Unloading Charges`, 42, 138);
    pdf.text(`Storage Charges`, 42, 148);

    let strCharges = formData.storageCharges;
    pdf.text(`${strCharges}`, 154, 148);
    pdf.text(`Insurance `, 42, 158);
    pdf.text(`${formData.insurance}`, 154, 158);
    pdf.text(`Documentation Charges`, 42, 168);
    let docChr = formData.docCharges;
    pdf.text(`${docChr}`, 154, 168);
    console.log(strCharges, "storage");
    console.log(docChr, "docorage");

    if (isNaN(strCharges) || strCharges === 0) {
      strCharges = "";
    }
    if (isNaN(docChr) || docChr === 0) {
      docChr = "";
    }

    let subTotal =
      (parseInt(formData.transportCharges) || 0) +
      (parseInt(strCharges) || 0) +
      (parseInt(formData.docCharges) || 0) +
      (parseInt(formData.insurance) || 0);
    pdf.setFontSize(14);

    if (isNaN(subTotal) || subTotal === 0) {
      subTotal = "";
    }
   

    pdf.text(`Sub Total`, 112, 177);

    pdf.text(`${subTotal}`, 154, 177);

    pdf.text(`GST ${formData.gst}%`, 112, 187);

    let gstTotal = parseInt(subTotal) * formData.gst;
    let gstAmountTotal = gstTotal / 100;

    if (isNaN(gstAmountTotal) || gstAmountTotal === 0 ) {
      gstAmountTotal = "";
    }
    pdf.text(`${gstAmountTotal}`, 154, 187);

    console.log(gstAmountTotal);

    pdf.setFontSize(16);
    pdf.setFont(undefined, "bold");

    pdf.text(` Total`, 112, 197);
    const grandTotal = (gstAmountTotal || 0) + subTotal;

    if (isNaN(grandTotal) || grandTotal === 0) {
      grandTotal = "";
    }
    pdf.text(`${grandTotal}`, 154, 197);

    pdf.setFont(undefined, "none");

    pdf.rect(12, 102, 125, 10);
    pdf.rect(137, 102, 55, 10);
    pdf.rect(12, 112, 125, 10);
    pdf.rect(137, 112, 55, 10);
    pdf.rect(12, 122, 125, 10);
    pdf.rect(137, 122, 55, 10);
    pdf.rect(12, 132, 125, 10);
    pdf.rect(137, 132, 55, 10);
    pdf.rect(12, 142, 125, 10);
    pdf.rect(137, 142, 55, 10);
    pdf.rect(12, 152, 125, 10);
    pdf.rect(137, 152, 55, 10);
    pdf.rect(12, 162, 125, 10);
    pdf.rect(137, 162, 55, 10);

    pdf.rect(108, 172, 29, 8);
    pdf.rect(137, 172, 55, 8);

    pdf.rect(108, 180, 29, 10);
    pdf.rect(137, 180, 55, 10);

    pdf.rect(108, 190, 29, 10);
    pdf.rect(137, 190, 55, 10);

    pdf.text(`NOTE/DESCRIPTION`, 12, 210);
    pdf.rect(12, 213, 94, 15);
    pdf.setFontSize(14);
    pdf.text(`${formData.description}`, 13, 222);

    pdf.setFontSize(16);
    pdf.setTextColor(0,63,171);

    pdf.text(`For HTM PACKERS AND MOVERS`, 106, 250);

    pdf.setFontSize(14);
    pdf.setTextColor(0, 0, 0);
    pdf.addImage(Signature, "PNG", 128, 264, 28, 10);

    pdf.text(`Accountant/Manager`, 122, 280);



    // Remove spaces and special characters from name and mobile
    const sanitizedName = formData.name.replace(/[^a-zA-Z0-9]/g, "");
    const sanitizedMobile = formData.mobile.replace(/[^0-9]/g, "");

    const pdfName = `Htm_Invoice_${sanitizedName}.pdf`;

    pdf.save(pdfName);
  };

  return (
    <div className="form-container">
      {/* <h4><Link to="/">Go to Home</Link></h4> */}
      <h4>Shiftify Invoice</h4>

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
            <label htmlFor="from">Transportation Charges</label>
            <input
              className="input margin"
              type="text"
              id="transportCharges"
              name="transportCharges"
              value={formData.transportCharges}
              onChange={handleInputChange}
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
        </div>

        <div className="display-inline">
          <div className="form-group">
            <label htmlFor="from">Insurance :</label>
            <input
              type="text"
              className="input margin"
              id="insurance"
              name="insurance"
              value={formData.insurance}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="from">Documentation Charges :</label>
            <input
              type="text"
              className="input margin"
              id="docCharges"
              name="docCharges"
              value={formData.docCharges}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className=" margin">
          <div className="form-group">
            <label htmlFor="from">Description :</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
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

export default BocInvoice;
