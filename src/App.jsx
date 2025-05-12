import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Productdetails from "./Productdetails";
import Home from "./Home";
import Nav from "./Nav";
import Checkout from "./Checkout";

function App() {

  return (
    <>
      <Router>
        < Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Checkout" element={<Checkout />} /> 
          <Route path="/Productdetails" element={<Productdetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
