import Item from "./Item/Item";
import { useContext } from "react";
import { Context } from "../../../context/context";

const ItemList = () => {
  const { cart } = useContext(Context);

  return (
    <div className="item-list-container">
      {cart?.length > 0 ? (
        cart.map((product) => <Item key={product.id} product={product} />)
      ) : (
        <h1>Empty Cart</h1>
      )}
    </div>
  );
};

export default ItemList;
