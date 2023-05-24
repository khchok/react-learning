import React from "react";
import { ITodo } from "./TodoContext";

interface ITodoReducerContext {
  todos: ITodo[];
  addItem: (todo: string) => void;
}

const TodoReducerContext = React.createContext<ITodoReducerContext>({
  todos: [],
  addItem: () => {},
});

export default TodoReducerContext;
