import React from "react";

const SubTotal = ({ text }) => {
  return (
    <div className="subtotal">
      <p className="subtotal-text">{text}</p>
      <p className="subtotal-price">$134.21</p>
    </div>
  );
};

export default SubTotal;
