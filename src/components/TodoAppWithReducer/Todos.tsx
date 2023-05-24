import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoReducerContext from "../../contexts/TodoReducerContext";

const Todos = () => {
  const { todos } = useContext(TodoReducerContext);
  return (
    <ul>
      {todos.map(({ task }, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

export default Todos;
