import { useState } from "react";

export default function StateFunCounter21() {
  const [num, setNum] = useState();

  const 더하기 = () => {
    // setNum(num + 1);
    setNum((prev) => prev + 1);
  };

  const 빼기 = () => {
    setNum((prev) => prev - 1);
    // setNumber 함수를 호출하는 시간과 상태가 실제로 업데이트 되는 사이에 지연이 있을 수 있기 때문에
  };

  return (
    <div>
      <h2>useState 값 변경하기</h2>
      <p>값 : {num}</p>
      <button onClick={더하기}>+</button>
      <button onClick={빼기}>-</button>
    </div>
  );
}
