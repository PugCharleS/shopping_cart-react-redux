import { createContext, useState, useEffect } from "react";

export const Context = createContext([]);

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState();

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((response) => {
        const data = response?.map((product) => {
          return (product = { ...product, numberOfUnits: 1 });
        });

        setCart(data);
      });
  }, []);

  const getTotal = () => {
    let subTotal = getSubTotal();
    let tax = getTax();
    let shippingFee = getShippingFee();
    let total = subTotal + tax + shippingFee;
    return total;
  };

  const addItem = (item) => {
    cart.forEach((product) => {
      product.id === item.id && product.numberOfUnits++;
      setCart([...cart]);
    });
  };

  const removeItem = (item) => {
    cart.forEach((product) => {
      product.id === item.id && product.numberOfUnits--;
      setCart([...cart]);
    });
  };

  const deleteItem = (id) => {
    const filteredCart = cart.filter((product) => product.id !== id);
    setCart([...filteredCart]);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const getSubTotal = () => {
    const subtotal = cart?.reduce(
      (prev, curr) => prev + curr.price_without_tax * curr.numberOfUnits,
      0
    );

    return subtotal;
  };

  const getTax = () => {
    const tax = cart?.reduce((prev, curr) => prev + curr.tax, 0);
    return tax;
  };

  const getShippingFee = () => {
    const shippingFee = cart?.reduce(
      (prev, curr) => prev + curr.shipping_fee,
      0
    );
    return shippingFee;
  };

  return (
    <Context.Provider
      value={{
        cart,
        addItem,
        removeItem,
        deleteItem,
        emptyCart,
        getTotal,
        getSubTotal,
        getTax,
        getShippingFee,
      }}
    >
      {children}
    </Context.Provider>
  );
};
