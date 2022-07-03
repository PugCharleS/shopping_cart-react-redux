import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ItemList from "./ItemList/ItemList";

const Cart = () => {
  return (
    <div className="container">
      <div className="cart">
        <Header />
        <ItemList />
        <br />
        <div className="division">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="511"
            height="1"
            viewBox="0 0 511 1"
          >
            <line
              id="Separator"
              x2="511"
              transform="translate(0 0.5)"
              fill="none"
              stroke="#a8b9cc"
              stroke-width="1"
              opacity="0.3"
            />
          </svg>
        </div>
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
