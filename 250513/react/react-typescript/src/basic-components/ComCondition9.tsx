import { useState } from "react";

function ComCondition9() {
  // 상태변수 저장
  const [isToggle, setIsToggle] = useState(false);
  // 메서드
  const handleToggle = () => {
    setIsToggle((prev) => !prev);
  };
  // 화면에 보여질 부분
  return (
    <div>
      <button onClick={handleToggle}>{isToggle ? "ON" : "OFF"}</button>
    </div>
  );
}
