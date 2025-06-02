import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { toggleTodo, removeTodo } = useContext(TodoContext);

  return (
    <li>
      <span
        className={todo.check === true ? "line" : ""}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
