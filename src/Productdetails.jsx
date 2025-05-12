import React from "react";
import "./productdetails.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useStorenow } from "../Store/Store1";
import { Link } from "react-router-dom";

const Productdetails = () => {
  const data = useStorenow();
  const { cart, addtoCart, removeCart } = data;
  const location = useLocation();
  const product = location.state;
  const [show, setShow] = useState(true);
  const [quantity, setQuantity] = useState(0);

  if (!product) {
    return <h2>No product details available</h2>;
  }

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleminusQuantity = () => {
    setQuantity(quantity - 1);
  };
  const { item } = product;
  // console.log(price);
  const handleAdd = () => {
    setShow(false);
    addtoCart(item);
  };

  console.log(item);

  const handleRemove = () => {
    setShow(true);
    removeCart(item.id);
  };
  return (
    <div className="cover">
      <div className="coverdive2">
        <div className="photodiv">
          <img src={item.image} alt={item.title} className="product_img" />
        </div>
        <div className="cover_div3">
          <h1>{item.title}</h1>
          <h4 className="categoryclas">{item.category}</h4>
          <h2 className="price">${item.price}</h2>
          <h4 className="rate">✨{item.rating.rate}</h4>

          <div className="quantiy_div">
            <label className="quantiy_label" htmlFor="quantity">
              Quantity.
            </label>
            <div className="quantiy_btn_div1">
              <button className="btn_quantiy" onClick={handleminusQuantity}>
                -
              </button>
              <p className="quantity_p">{quantity}</p>
              <button className="btn_quantiy" onClick={handleAddQuantity}>
                +
              </button>
            </div>
          </div>
          <div className="quantiy_div2">
            <label className="quantiy_label1" htmlFor="size">
              Sizes.
            </label>
            <p className="size_p">
              <select className="option_class">
                <option value="" className="option_class">
                  20
                </option>
                <option value="" className="option_class">
                  29
                </option>
                <option value="" className="option_class">
                  30
                </option>
                <option value="" className="option_class">
                  36
                </option>
                <option value="" className="option_class">
                  39
                </option>
                <option value="" className="option_class">
                  40
                </option>
                <option value="" className="option_class">
                  41
                </option>
                <option value="" className="option_class">
                  44
                </option>
              </select>
            </p>
          </div>
<p><span className="policy_span">Policy/warranty:</span> Goods sold on good condition after a week are not refundable our warranty is only for 1 week.</p>
          <div className="quantiy_div_btn">
            <Link to={"/Checkout"}>
            <button className="btn_buy_now">Buy now</button>
            </Link>
            {show ? (
              <button onClick={handleAdd} className="btn_buy_now">
                AddCart
              </button>
            ) : (
              <button onClick={handleRemove} className="btn_buy_now">
                RemoveCart
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="discription_div">
        <p>
          <span>DESCRIPTION: </span>
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default Productdetails;
