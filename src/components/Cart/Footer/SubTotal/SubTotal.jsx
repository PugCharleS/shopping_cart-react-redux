import { formatter } from "../../Formatter/Formatter";
import { useContext } from "react";
import { Context } from "../../../../context/context";

const SubTotal = () => {
  const { getSubTotal, getTax, getShippingFee } = useContext(Context);

  return (
    <div className="subtotal">
      <div className="subtotal-container">
        <p className="subtotal-text">SubTotal</p>
        <p className="subtotal-price">{formatter.format(getSubTotal())}</p>
      </div>
      <div className="subtotal-container">
        <p className="subtotal-text">Shipping Fee</p>
        <p className="subtotal-price">{formatter.format(getShippingFee())}</p>
      </div>
      <div className="subtotal-container">
        <p className="subtotal-text">Tax</p>
        <p className="subtotal-price">{formatter.format(getTax())}</p>
      </div>
    </div>
  );
};

export default SubTotal;
