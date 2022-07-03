import { useEffect, useState } from "react";
import Item from "./Item/Item";

const ItemList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="item-list-container">
      {data.map((product, i) => (
        <Item key={i} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
