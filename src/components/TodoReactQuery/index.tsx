import { useState } from "react";
import {
  ITodoState,
  TodoContext,
  defaultState,
} from "../../contexts/TodoContext";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

const TodoApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Todos</h1>
        <AddTodo />
        <Todos />
      </div>
    </QueryClientProvider>
  );
};

export default TodoApp;
