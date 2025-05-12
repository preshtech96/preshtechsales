import React from "react";
import "./Shopcard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Shopcard = ({ price, rating, category, img, add, item, remove }) => {
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  const handleAdd = () => {
    setShow(false);
    add(item);
  };

  const handleRemove = () => {
    setShow(true);
    remove(item.id);
  };

  const handleNavigate = () => {
    navigate("/productdetails", {
      state: { item },
    });
  };

  return (
    <div className="shopcard_div1">
      <img src={img} alt="" className="img" onClick={handleNavigate} />
      <p>${price}</p>
      <h3>{category}</h3>
      <h5>✨{rating}</h5>
      {show ? (
        <button onClick={handleAdd} className="btn_shop">
          AddCart
        </button>
      ) : (
        <button onClick={handleRemove} className="btn_shop">
          RemoveCart
        </button>
      )}
    </div>
  );
};

export default Shopcard;
