import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useStorenow } from "../Store/Store1";
import cartt from "./assets/cartt.png";
import { useNavigate } from "react-router-dom";
import hamburger from "./assets/hamburger.png"
import close from "./assets/close.png"
import preshtech from "./assets/preshtech.png"


const Nav = () => {
  const data = useStorenow();
  const { cart } = data;

  const navigate = useNavigate();


  const handleNavigateCheckout = () => {
    navigate("/Checkout", {
      state: { cart },
    });
  };
  return (
    <div className="nav_cover_div">
      <div>
        <Link to={"/"}>
          <h2 className="nav_logo">
            Pres<span>HT</span>ech
            <img src={preshtech} alt="" className="img_nav"/>
          </h2>
        </Link>
      </div>
      <div className="nav_links">
        <Link to={"/"} className="inner_link">
          Home
        </Link>
        <Link className="inner_link">About</Link>
        <Link className="inner_link">News</Link>
        <Link className="inner_link">Contact</Link>
        <Link to={"/"} className="inner_link">
          Sells
        </Link>
        <div className="buger_div">
        <img className="hmbger" src={hamburger} alt="" />
        <img className="hmbger" src={close} alt="" />
        </div>
      </div>
      <div className="cart_div">
        
        <img src={cartt} alt="" className="img_nav" onClick={handleNavigateCheckout} />
        {cart.length <= 0 ? null : (
          <h1 className="count_class">{cart.length}</h1>
        )}
      </div>
    </div>
  );
};

export default Nav;
