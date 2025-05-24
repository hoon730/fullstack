import { useState } from "react";


function InputChild({ textSend, onChildChange }) {
  return (
    <input value={textSend} onChange={(e) => onChildChange(e.target.value)} />
  );
}

export default function StateParent1() {
  //상태변수
  const [text, setText] = useState("");
  return (
    <div>
      <h2>자식컴포넌트에서 입력한 값이 부모가 가진 상태변수 값을 변경</h2>
      <InputChild textSend={text} onChildChange={setText} />
      <input value={text} />
    </div>
  );
}
