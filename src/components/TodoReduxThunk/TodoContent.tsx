import { useCallback, useEffect } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { thunkGetTodos } from "../../store/reduxThunkDemo/todoThunkSlice";
import {
  useAppDispatch,
} from "../../store/reduxThunkDemo/todoThunkAppStore";

const TodoContent = () => {
  const dispatch = useAppDispatch();

  const getTodos = useCallback(async () => {
    await dispatch(thunkGetTodos()).unwrap();
  }, [dispatch]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Todos</h1>
      <AddTodo />
      <Todos />
    </div>
  );
};

export default TodoContent;
