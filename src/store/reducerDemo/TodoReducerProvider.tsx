import { Reducer, useContext, useReducer } from "react";
import { ITodoState } from "../../contexts/TodoContext";
import React from "react";
import TodoReducerContext from "../../contexts/TodoReducerContext";

const defaultState: ITodoState = {
  todos: [],
  isLoading: false,
};

// interface ITodoReducer: React.ReducerWithoutAction

interface ITodoReducerAction {
  type: "ADD" | "CLEAR";
  todo: string;
}

const todoReducer: Reducer<ITodoState, ITodoReducerAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "ADD":
      return { ...state, todos: [{ task: action.todo }, ...state.todos] };
    default:
      return { ...defaultState };
  }
};

const TodoReducerProvider = ({ children }: React.PropsWithChildren) => {
  const [todoState, dispatch] = useReducer(todoReducer, defaultState);

  const addItemHandler = (todo: string) => {
    dispatch({ type: "ADD", todo });
  };

  return (
    <TodoReducerContext.Provider
      value={{
        todos: todoState?.todos ?? [],
        addItem: addItemHandler,
      }}
    >
      {children}
    </TodoReducerContext.Provider>
  );
};

export default TodoReducerProvider;
