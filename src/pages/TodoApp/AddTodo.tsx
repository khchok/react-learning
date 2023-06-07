import { useContext, useRef } from "react";
import { TodoContext } from "../../contexts/TodoContext";

const AddTodo = () => {
  const { state, setState } = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const onAddTodoHandler = () => {
    setState({
      todos: [{ task: inputRef.current?.value ?? "" }, ...state.todos],
      isLoading: false,
    });
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onAddTodoHandler}>Add</button>
    </div>
  );
};

export default AddTodo;
