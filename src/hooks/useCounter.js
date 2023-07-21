import { useState } from "react";

export const useCounter = (initalValue = 10) => {
  const [counter, setCounter] = useState(initalValue);
  const increment = (value = 1) => {
    setCounter((prev) => prev + value);
  };
  const decrement = (value = 1) => {
    setCounter(prev => Math.max(0, prev - value));
  };
  const reset = () => {
    setCounter(initalValue);
  };
  return { counter, increment, decrement, reset };
};

export default useCounter;
