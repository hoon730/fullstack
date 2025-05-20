function UseStateArrayUpdate23() {
  let [글제목, 글제목변경] = useState(["남자코드", "하의", "상의"]);
  function 제목변경() {
    let newArray = [...글제목];
    newArray[0] = "남자코드 추천";
    글제목변경(newArray);
  }
  return (
    <div>
      <button onClick={제목변경}>클릭</button>
      <div>{글제목[0]}</div>
    </div>
  );
}
