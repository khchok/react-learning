import React, { useEffect } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { useDispatch } from "react-redux";
import { fetchTodoData } from "../../store/reduxDemo/todoApiActions";

const TodoContent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchTodoData());
  }, [dispatch]);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Todos</h1>
      <AddTodo />
      <Todos />
    </div>
  );
};

export default TodoContent;
