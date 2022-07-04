import { useState } from "react";

export const useCounter = (initialState) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    if (counter <= 1) {
      setCounter(1);
    } else {
      setCounter((prev) => prev - 1);
    }
  };

  return {
    counter,
    increment,
    decrement,
  };
};

export default useCounter;
