import React from "react";
import { useCounterStore } from "./store";

const ConterZu = () => {
  const { count, setCount } = useCounterStore();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default ConterZu;
