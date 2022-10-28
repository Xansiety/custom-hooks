import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setcounter] = useState(initialValue);

  const incrementar = (value = 1) => {
    // console.log(value)
    setcounter( current => current + value);
  };

  const decrementar = (value = 1) => { 
    // if (counter == 0) return;
    setcounter(current => current - value);
  };

  const reset = () => {
    setcounter(initialValue);
  };

  return {
    counter,
    incrementar,
    decrementar,
    reset,
  };
};
