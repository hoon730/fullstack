//모든 전역 변수를 담는 객체
import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../reducers/counterReducer";
import TodoSlice from "../reducers/TodoSlice";

//configureStore toolkit에서 제공해주는 store를 생성해주는 함수

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    todos: TodoSlice,
  },
});

export default store;
