import { useRef, useState } from "react";

export default function UseRef() {
  const [count, setCount] = useState(0);
  let ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    setCount(count + 1);
  };
  
  return (
    <div>
      <button onClick={handleClick}>click</button>
      <p>{ref.current}</p>
    </div>
  );
}
