import { useState } from "react";
import {
  ITodoState,
  TodoContext,
  defaultState,
} from "../../contexts/TodoContext";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

const TodoApp = () => {
  const [state, setState] = useState<ITodoState>(defaultState);

  return (
    <TodoContext.Provider value={{ state, setState }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Todos</h1>
        <AddTodo />
        <Todos />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;
