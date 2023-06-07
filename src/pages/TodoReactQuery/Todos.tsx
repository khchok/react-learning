import { useContext, useEffect } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import useGetTodosQuery from "./useGetTodosQuery";
import { Spin } from "antd";
import { Link } from "react-router-dom";

const Todos = () => {
  const { data: todos, isLoading } = useGetTodosQuery();

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "50vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }
  return (
    <ul>
      {todos &&
        todos.map(({ task }, index) => (
          <li key={index}>
            <Link to={task}>{task}</Link>
          </li>
        ))}
    </ul>
  );
};

export default Todos;
