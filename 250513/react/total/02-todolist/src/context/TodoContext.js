import { createContext, useState, useEffect } from "react";
// localstorage에 사용할 키를 선언
const TODO_KEY = "toDos";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // 웹이 처음 렌더링 될 때 localstorage에 저장된 toDos를 가져와서
  // todos에 넣기

  useEffect(() => {
    const saved = localStorage.getItem(TODO_KEY);
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  // todos가 변경될 때 localstorage에 저장
  useEffect(() => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
  }, [todos]);

  // localStorage 전체 삭제
  useEffect(() => {
    localStorage.removeItem(TODO_KEY);
  }, []);

  // 새로운 할일 추가
  const addTodo = (text) => {
    // 기존의 데이터 뒤에 새로 입력한 데이터 추가
    const newTodo = {
      id: Date.now(),
      text,
      check: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  // 할일 삭제
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 할일 완료되면 밑줄
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, check: !todo.check } : todo
      )
    );
  };

  // 전체 할일을 제거할
  const removeAll = () => {
    setTodos([]);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, toggleTodo, removeAll }}
    >
      {children}
    </TodoContext.Provider>
  );
};
