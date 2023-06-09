import axios from "axios";
import { ITodo } from "../contexts/TodoContext";

export const apiGetTodos = async () => {
  const response = await axios.get<ITodo[]>(
    "https://react-http-bbe1c-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json"
  );
  return response;
};

export const apiPostTodo = async (task: string) => {
  const allTodos = await apiGetTodos();
  const response = await axios.put(
    "https://react-http-bbe1c-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json",
    [{ task }, ...(allTodos.data ?? [])]
  );
  return response.data;
};
