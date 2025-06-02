import TodoCount from "./TodoCount";
import TodoFrom from "./TodoFrom";
import TodoList from "./TodoList";
import { TodoProvider } from "../context/TodoContext";

export default function TodoApp() {
  return (
    <TodoProvider>
        <div className="todoApp">
          <h1>Todo List</h1>
          <TodoFrom />
          <TodoList />
          <TodoCount />
        </div>
   </TodoProvider>
  );
}
