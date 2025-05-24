import { useRef } from "react";

export default function UseEffect34() {
  //useRef는 Dom요소를 참조
  //인스턴스에 대한 참고를 생성할때 사용한다.
  const inputRef = useRef("");
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      {/* ref 속성을 사용하여 inputRef를 input요소소 */}
      <input type="text" placeholder="글자를 입력하세요" ref={inputRef} />
      <button onClick={handleFocus}>포커스 이동</button>
    </div>
  );
}
