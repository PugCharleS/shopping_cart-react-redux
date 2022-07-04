import { formatter } from "../../Formatter/Formatter";
import { useContext } from "react";
import { Context } from "../../../../context/context";

const Total = () => {
  const { getTotal } = useContext(Context);

  return (
    <div className="total">
      <p className="total-text">Total (including tax)</p>
      <p className="total-price">{formatter.format(getTotal())}</p>
    </div>
  );
};

export default Total;
