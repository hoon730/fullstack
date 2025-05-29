import React from "react";
import SectionTitle from "../components/SectionTitle";

const TodoList = () => {
  return (
    <div className="main todolist">
      <div className="content-inner">
        <SectionTitle title="todolist" subTitle="제가 해야 할 일은.." />
        <div>todolist 본문</div>
      </div>
    </div>
  );
};

export default TodoList;
