import { useContext, useRef } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoReducerContext from "../../contexts/TodoReducerContext";

const AddTodo = () => {
  const { addItem } = useContext(TodoReducerContext);

  const inputRef = useRef<HTMLInputElement>(null);
  
  const onAddTodoHandler = () => {
    addItem(inputRef.current?.value ?? "");
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onAddTodoHandler}>Add</button>
    </div>
  );
};

export default AddTodo;
