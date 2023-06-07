import { useContext, useRef, useState } from "react";
import { ITodo, TodoContext } from "../../contexts/TodoContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiPostTodo } from "../../api/todoApi";
import { Button, Space } from "antd";
import AdditionalTodos from "./AdditionalTodos";
import Swal from "sweetalert2";

const AddTodo = () => {
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: apiPostTodo,
    onSuccess: (_, params) => {
      // Invalidate query so react-query will refetch the data
      queryClient.invalidateQueries({ queryKey: ["todos", "get"] });

      // Skip API request, manually update query data
      // queryClient.setQueryData<Array<ITodo>>(["todos", "get"], (prevData) => {
      //   return [{ task: params }, ...(prevData ?? [])];
      // });
    },
    onError: () => {
      Swal.fire({
        icon: "error",
        text: "Add Todo error",
      });
    },
  });

  const [show, setShow] = useState(true);

  const onAddTodoHandler = () => {
    mutate(inputRef.current?.value ?? "");
    setShow(true);
  };

  return (
    <Space>
      <input type="text" ref={inputRef} />
      <Button onClick={onAddTodoHandler} loading={isLoading}>
        Add
      </Button>
      {/* {show && <AdditionalTodos />} */}
    </Space>
  );
};

export default AddTodo;
