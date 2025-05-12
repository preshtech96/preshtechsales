import { useStorenow } from "../Store/Store1";
import "./Checkout.css";

const Checkout = () => {
  const { cart } = useStorenow();
  console.log(cart);

  const total = cart.reduce((acc, item) => acc + item.price, 10 + 5);

  return (
    <div className="map_order">
      {cart.map((item) => {
        return (
          <div key={item.id} className="order_card">
            <h3 className="order_text">Order Summary</h3>
            <div className="order_details">
              <img src={item.image} alt={item.title} className="item_image" />
              <div>
                <h3 className="category_name">{item.category.toUpperCase()}</h3>
                <p className="item_title">{item.title.slice(0, 20)}</p>
                <div className="pricing_details">
                  <div className="pricing_row">
                    <p>Subtotal</p>
                    <p>${item.price}</p>
                  </div>
                  <div className="pricing_row">
                    <p>Shipping</p>
                    <p>$10</p>
                  </div>
                  <div className="pricing_row">
                    <p>Tax</p>
                    <p>$5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="total_result">
        <p>Total</p>
        <p>${total}</p>
      </div>
      <button className="place_order_btn">Place Order</button>
    </div>
  );
};

export default Checkout;
