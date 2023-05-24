import { Dispatch, SetStateAction, createContext } from "react";

export interface ITodo {
  task: string;
}

export interface ITodoState {
  todos: ITodo[];
  isLoading: boolean;
  isAdding?: boolean;
}

export interface ITodoContext {
  state: ITodoState;
  setState: Dispatch<SetStateAction<ITodoState>>;
}

export const defaultState: ITodoState = {
  todos: [],
  isLoading: false,
  isAdding: false,
};

export const TodoContext = createContext<ITodoContext>({
  state: defaultState,
  setState: () => {},
});
