import { useRef } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/reduxThunkDemo/todoThunkAppStore";
import { thunkPostTodos } from "../../store/reduxThunkDemo/todoThunkSlice";
import { Button, Col, Space } from "antd";

const AddTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { isAdding } = useAppSelector((state) => state.todos);
  const onAddTodoHandler = () => {
    dispatch(thunkPostTodos(inputRef.current?.value ?? ""));
  };

  return (
    <Space>
      <input type="text" ref={inputRef} />
      <Button onClick={onAddTodoHandler} loading={isAdding}>
        Add
      </Button>
    </Space>
  );
};

export default AddTodo;
