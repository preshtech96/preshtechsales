import React, { useEffect, useState } from "react";
import { useStorenow } from "../Store/Store1";
import Shopcard from "./components/Shopcard";
import "./index.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Animation from "./assets/Animation.json";



const Home = () => {
  const data = useStorenow();
  const { action, product, addtoCart, cart, removeCart} = data;
  const [timer, setTimer] = useState(true);
  console.log(cart);
  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
      action();
    }, 2000);
  }, []);
  return (
    <div>
      {timer ? (
        <Player
          autoplay
          loop
          src={Animation}
          style={{
            height: "300px",
            width: "300px",
        
          }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      ) : (
        <div className="home_div1">
          {product.map((item, index) => {
            return (
              <Shopcard
                key={index}
                price={item.price}
                rating={item.rating.rate}
                category={item.category}
                img={item.image}
                add={addtoCart}
                remove={removeCart}
                item={item}

              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
