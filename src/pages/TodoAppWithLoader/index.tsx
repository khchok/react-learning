import { useContext, useEffect } from "react";
import { ITodo, TodoContext } from "../../contexts/TodoContext";

import { Spin } from "antd";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { apiGetTodos } from "../../api/todoApi";

const TodoAppWithLoader = () => {
  const todos = useLoaderData() as ITodo[];

  // enter components
  // Component completely built
  // >>> check is data undefined?
  // useEffect > api Get data
  // state changed
  // Trigger components rebuild
  // components rebuild with data

  // react-router
  // navigating to components
  // execute loader function
  // loader return data
  // enter components
  // component completely built
  // state changed? no

  //   if (isLoading) {
  //     return (
  //       <div
  //         style={{
  //           display: "flex",
  //           flexDirection: "column",
  //           height: "50vh",
  //           alignItems: "center",
  //           justifyContent: "center",
  //         }}
  //       >
  //         <Spin size="large" />
  //       </div>
  //     );
  //   }

  // absolute path
  // /AddTodo > https://domain.com/AddTodo

  // Relative path
  // AddTodo > https://domain.com/TodoApp/AddTodo

  return (
    <>
      <Link to="/AddTodo">Add</Link>
      <ul>
        {todos &&
          todos.map(({ task }, index) => (
            <li key={index}>
              <Link to={task}>{task}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default TodoAppWithLoader;

export const todoLoader = async () => {
  try {
    const response = await apiGetTodos();
    return response.data;
  } catch (error) {
    throw error;
  }
};
