import { useQuery } from "@tanstack/react-query";
import { apiGetTodos } from "../../api/todoApi";
import { ITodo } from "../../contexts/TodoContext";
import Swal from "sweetalert2";

const useGetTodosQuery = () => {
  const query = useQuery<ITodo[]>(
    ["todos", "get"],
    async () => {
      const data = await apiGetTodos();
      return data;
    },
    {
      // retry: 1,
      // staleTime: 5000,
      refetchOnWindowFocus: false,
      enabled: true,
      onError: () =>
        Swal.fire({
          icon: "error",
          text: "Get todo error",
        }),
    }
  );

  const loading = Boolean(query.isInitialLoading || query.isFetching);

  return { ...query, loading };
};

export default useGetTodosQuery;
