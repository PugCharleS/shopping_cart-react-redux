import SubTotal from "./SubTotal/SubTotal";
import Total from "./Total/Total";

const Footer = () => {
  return (
    <footer className="totals">
      <SubTotal />
      <Total />
    </footer>
  );
};

export default Footer;
