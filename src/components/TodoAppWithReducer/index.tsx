import { useState } from "react";
import {
  ITodoState,
  TodoContext,
  defaultState,
} from "../../contexts/TodoContext";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import TodoReducerProvider from "../../store/reducerDemo/TodoReducerProvider";

const TodoAppWithReducer = () => {
  return (
    <TodoReducerProvider>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Todos</h1>
        <AddTodo />
        <Todos />
      </div>
    </TodoReducerProvider>
  );
};

export default TodoAppWithReducer;
