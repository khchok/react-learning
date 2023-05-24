import { useContext } from "react";
import { ITodoState, TodoContext } from "../../contexts/TodoContext";
import { useSelector } from "react-redux";
import todoSlice from "../../store/reduxDemo/todoSlice";

const Todos = () => {
  const state = useSelector<any>((state) => state.todoStore) as ITodoState;
  return (
    <ul>
      {state.todos &&
        state.todos.map(({ task }, index) => <li key={index}>{task}</li>)}
    </ul>
  );
};

export default Todos;
