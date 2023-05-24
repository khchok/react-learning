import { useContext, useRef } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { useDispatch } from "react-redux";
import { addTodoData } from "../../store/reduxDemo/todoApiActions";

const AddTodo = () => {
  const { state, setState } = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const onAddTodoHandler = () => {
    // @ts-ignore
    dispatch(addTodoData(inputRef.current?.value ?? ""));
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onAddTodoHandler}>Add</button>
    </div>
  );
};

export default AddTodo;
