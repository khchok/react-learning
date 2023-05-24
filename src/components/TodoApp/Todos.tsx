import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

const Todos = () => {
  const { state } = useContext(TodoContext);
  return (
    <ul>
      {state.todos.map(({ task }, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

export default Todos;
