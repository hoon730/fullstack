import React from "react";
import { useCounter } from "./CounterContext";

const CounterState = () => {
  const { countState, setCountState } = useCounter();
  return (
    <div>
      <p>{countState}</p>
      <button onClick={() => setCountState(countState + 1)}>+</button>
      <button onClick={() => setCountState(countState - 1)}>-</button>
    </div>
  );
};

export default CounterState;
