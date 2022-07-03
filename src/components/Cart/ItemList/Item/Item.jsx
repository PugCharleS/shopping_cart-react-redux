import React from "react";

const Item = ({ product }) => {
  const { item_name, short_description, price_without_tax } = product;

  return (
    <div class="item-container">
      <div className="container-product">
        <div class="item-icon"></div>
        <div className="item-texts">
          <div class="item-name">{item_name}</div>
          <div class="item-short_description">{short_description}</div>
        </div>
      </div>
      <div className="container-price">
        <Quantity />
        <div class="item-price">${price_without_tax}</div>
        <Trashcan />
      </div>
    </div>
  );
};

const Quantity = () => {
  return (
    <div class="item-quantity">
      <button className="buttonIncDec">-</button>
      <p className="counter">1</p>
      <button className="buttonIncDec">+</button>
    </div>
  );
};

const Trashcan = () => {
  return (
    <div>
      <button className="trash-btn">
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
