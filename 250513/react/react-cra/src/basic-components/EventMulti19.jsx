import { useState } from "react";

function EventMulti19() {
  // 상태변수
  const [input, setInput] = useState({
    name: "1",
    nickName: "2",
  });
  // 비구조화 할당
  const { name, nickName } = input;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value, //name키를 가진 value로 설정하기기
    });
  };
  const handleReset = () => {
    setInput({
      name: "",
      nickName: "",
    });
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        type="text"
        value={name}
        onChange={handleChange}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        value={nickName}
        onChange={handleChange}
      />
      <button onCLick={handleReset}>초기화</button>
      <p>이름 : </p>
    </div>
  );
}

export default EventMulti19;
