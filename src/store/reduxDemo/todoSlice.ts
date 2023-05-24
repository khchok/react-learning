import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "../../contexts/TodoContext";

const todoSlice = createSlice({
  name: "todo-slice",
  initialState: defaultState,
  reducers: {
    refreshTodos: (state, action) => {
      state.todos = action.payload.todos ?? [];
    },
    addTodo: (state, action) => {
      console.log(state.todos);
      state.todos = [{ task: action.payload.task }, ...state.todos];
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
