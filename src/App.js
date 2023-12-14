import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink , Link} from 'react-router-dom';
import Menu from './Pages/Menu';
import './App.css';
import HtmQuotation from './Pages/Quotation';
import HtmInvoice from './Pages/Invoice';
import HtmLr from './Pages/Lr';


class App extends Component {
  render() {
    return (
      <div className="margin-top">
        <Router>
       
            <Routes basename="/Quotationmaker">
              <Route path="/Shiftify" element={<Menu />} />
              <Route path="/" element={<Menu />} />
              <Route exact path="/HtmQoutation" element={<HtmQuotation />} />
              <Route exact path="/HtmInvoice" element={<HtmInvoice />} />
              <Route exact path="/HtmLr" element={<HtmLr />} />
            </Routes>
      
        </Router>
      </div>
    );
  }
}

export default App;
