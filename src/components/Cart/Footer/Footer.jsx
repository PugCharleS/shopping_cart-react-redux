import React from "react";
import SubTotal from "./SubTotal/SubTotal";
import Total from "./Total/Total";

const Footer = () => {
  return (
    <footer className="totals">
      <SubTotal text={"Subtotal"} />
      <SubTotal text={"Shipping fees"} />
      <SubTotal text={"Taxes"} />
      <Total />
    </footer>
  );
};

export default Footer;
