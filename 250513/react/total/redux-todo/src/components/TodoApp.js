import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../reducers/TodoSlice";

const TodoApp = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefalut();
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <div>
      <h2>TodoList</h2>
      <form onSubmit={handleAdd}>
        <input type="text" onChange={(e) => e.target.value} />
        <button onClick={handleAdd}>추가</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>
            <span
              onClick={() => dispatch(toggleTodo.apply(todo.id))}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
