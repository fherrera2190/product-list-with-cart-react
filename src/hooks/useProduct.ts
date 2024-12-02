import { useState } from "react";

export const useProduct = (value = 0) => {
  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number) => {
    const newValue = Math.max(0, counter + value);
    setCounter(newValue);
  };

  return { counter, increaseBy };
};
