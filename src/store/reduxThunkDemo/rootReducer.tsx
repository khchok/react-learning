import { combineReducers } from "@reduxjs/toolkit";
import todoThunkSlice from "./todoThunkSlice";
const appReducer = combineReducers({
  todos: todoThunkSlice.reducer,
});
const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
