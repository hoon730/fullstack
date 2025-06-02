import React from "react";
import { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  //상태변수
  const [input, setInput] = useState<string>("");
  //계산기에 표시할 버튼 목록록

  const buttons: string[] = [
    "C",
    "←",
    "/",
    "*",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    ".",
  ];

  const handleClick = (value: string) => {
    if (value === "C") {
      setInput("");
    } else if (value === "←") {
      // 문자열.slice(시작위치, 끝위치)
      // javascript.slice(0, 3)
      //숫자가 음수가 들어가면 뒤에서부터
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        const result = eval(input);
        setInput(String(result));
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div>
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="button">
          {buttons.map((btn, id) => (
            <button onClick={() => handleClick(btn)} key={id}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Calculator;
