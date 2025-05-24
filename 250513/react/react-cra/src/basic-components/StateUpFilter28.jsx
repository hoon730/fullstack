// 데이터를 입력하는 자식 컴포넌트
// 필터해서 보여줄 list 자식 컴포넌트

import { useState } from "react";

function SearchBar() {
  return <input />;
}

function List({ items, inputData }) {
  return (
    <ul>
      {items.filter((item) =>
        item
          .toLowerCase()
          .include(inputData.toLowerCase())
          .map((item) => <li>{item}</li>)
      )}
    </ul>
  );
}

export default function StateUpFilter28() {
  const [query, setQuery] = useState("");
  const items = ["Apple", "Banana", "mrange", "mango"];

  return (
    <div>
      <List items={items} inputData={query} />
    </div>
  );
}
