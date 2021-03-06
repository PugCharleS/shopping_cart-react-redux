import { useContext } from "react";
import { Context } from "../../../../context/context";
import useCounter from "../../useCount/useCounter";

const Item = ({ product }) => {
  const { id, item_name, short_description, price_without_tax } = product;
  const { deleteItem } = useContext(Context);

  const onDelete = (id) => {
    deleteItem(id);
  };

  return (
    <div className="item-container">
      <div className="container-product">
        <div className="item-icon"></div>
        <div className="item-texts">
          <div className="item-name">{item_name}</div>
          <div className="item-short_description">{short_description}</div>
        </div>
      </div>
      <div className="container-price">
        <Quantity product={product} />
        <div className="item-price">${price_without_tax}</div>
        <Trashcan id={id} onDelete={onDelete} />
      </div>
    </div>
  );
};

const Quantity = ({ product }) => {
  const { counter, increment, decrement } = useCounter(1);
  const { addItem, removeItem } = useContext(Context);

  const onIncrement = () => {
    if (product.numberOfUnits < product.quantity) {
      increment();
      addItem({ ...product, numberOfUnits: counter });
    }
  };

  const onDecrement = () => {
    if (product.numberOfUnits > 1) {
      decrement();
      removeItem({ ...product, numberOfUnits: counter });
    }
  };

  return (
    <div className="item-quantity">
      <button className="buttonIncDec" onClick={onDecrement}>
        -
      </button>
      <p className="counter">{counter}</p>
      <button className="buttonIncDec" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

const Trashcan = ({ id, onDelete }) => {
  return (
    <div>
      <button className="trash-btn" onClick={() => onDelete(id)}>
        <svg
          id="Group_15"
          data-name="Group 15"
          xmlns="http://www.w3.org/2000/svg"
          width="12.606"
          height="14.407"
          viewBox="0 0 12.606 14.407"
        >
          <path
            id="Path_6"
            data-name="Path 6"
            d="M32,96v10.355a1.351,1.351,0,0,0,1.351,1.351h8.1a1.351,1.351,0,0,0,1.351-1.351V96Zm3.152,9a.45.45,0,1,1-.9,0V98.7a.45.45,0,1,1,.9,0Zm2.7,0a.45.45,0,1,1-.9,0V98.7a.45.45,0,1,1,.9,0Zm2.7,0a.45.45,0,1,1-.9,0V98.7a.45.45,0,1,1,.9,0Z"
            transform="translate(-31.1 -93.299)"
            fill="#3f4c58"
            opacity="0.4"
          />
          <path
            id="Path_7"
            data-name="Path 7"
            d="M12.156.9H9L8.679.25A.45.45,0,0,0,8.276,0H4.33a.45.45,0,0,0-.4.249L3.6.9H.45a.45.45,0,0,0-.45.45v.9a.45.45,0,0,0,.45.45H12.156a.45.45,0,0,0,.45-.45v-.9A.45.45,0,0,0,12.156.9Z"
            transform="translate(0 -0.001)"
            fill="#3f4c58"
          />
        </svg>
      </button>
    </div>
  );
};

export default Item;
