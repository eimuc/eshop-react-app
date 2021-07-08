import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(1);

  function onIncrement() {
    count === "" ? setCount(1) : setCount((prev) => prev + 1);
  }

  function onDecrement() {
    count === 1 || count === "" ? setCount(1) : setCount((prev) => prev - 1);
  }

  function onInputChange(e) {
    !e.target.value ? setCount("") : setCount(parseInt(e.target.value));
  }

  return {
    count,
    onIncrement,
    onDecrement,
    onInputChange,
  };
}

export default useCounter;
