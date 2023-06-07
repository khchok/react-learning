import { todoActions } from "./todoSlice";
import { apiGetTodos, apiPostTodo } from "../../api/todoApi";

export const fetchTodoData = () => {
  return async (dispatch: any) => {
    const resp = await apiGetTodos();
    dispatch(
      todoActions.refreshTodos({
        todos: resp.data,
      })
    );
  };
};

export const addTodoData = (task: string) => {
  return async (dispatch: any) => {
    const status = await apiPostTodo(task);
    dispatch(todoActions.addTodo({ task }));
  };
};
