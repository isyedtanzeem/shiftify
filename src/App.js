import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink , Link} from 'react-router-dom';
import Menu from './Pages/Menu';
import './App.css';
import Quotation from './Pages/Quotation';
import Invoice from './Pages/Invoice';
import Lr from './Pages/Lr';


class App extends Component {
  render() {
    return (
      <div className="margin-top">
        <Router>
       
            <Routes basename="/Quotationmaker">
              <Route path="/Shiftify" element={<Menu />} />
            
              <Route path="/" element={<Menu />} />
              <Route exact path="/Qoutation" element={<Quotation />} />
              <Route exact path="/Invoice" element={<Invoice />} />
              <Route exact path="/Lr" element={<Lr />} />
            </Routes>
      
        </Router>
      </div>
    );
  }
}

export default App;
