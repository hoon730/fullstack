const peoples = [
  "홍길동",
  "임꺽정",
  "장길산",
  "일지매",
  "임꺽정",
  "장길산",
  "일지매",
];

export default function List13() {
  // 상태변수
  const listItems = peoples.map((item) => <li>{item}</li>);
  return <ul>{listItems}</ul>;
}
