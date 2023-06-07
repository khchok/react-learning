import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoApp from "./pages/TodoApp";
import DemoNoContext from "./pages/DemoNoContext";
import TodoAppWithReducer from "./pages/TodoAppWithReducer";
import TodoRedux from "./pages/TodoRedux";
import TodoReduxThunk from "./pages/TodoReduxThunk";
import TodoReactQuery from "./pages/TodoReactQuery";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BaseRoutes from "./services/BaseRoutes";
import Home from "./pages/home/Home";
import InnerLayout from "./layouts/InnerLayout";
import ErrorPage from "./pages/Error";
import Root from "./components/Root";
import TaskDetails, { taskDetailsLoader } from "./pages/TaskDetails";
import TodoAppWithLoader, { todoLoader } from "./pages/TodoAppWithLoader";
import { apiGetTodos } from "./api/todoApi";
import TaskDetailsEdit from "./pages/TaskDetails/TaskDetailsEdit";
import AddTodoForm, { addTodoAction } from "./pages/AddTodoForm";

// Routes as component
// const router = createBrowserRouter([{ path: "*", element: <BaseRoutes /> }]);

// Routes as object
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "/DemoNoContext", element: <DemoNoContext /> },
      { path: "/TodoApp", element: <TodoApp /> },
      { path: "/TodoAppWithReducer", element: <TodoAppWithReducer /> },
      {
        path: "/Redux",
        element: <InnerLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/Redux",
            element: <TodoRedux />,
          },
          { path: "/Redux/TodoReduxThunk", element: <TodoReduxThunk /> },
        ],
      },
      { path: "/TodoReactQuery", element: <TodoReactQuery /> },
      {
        path: "/TodoAppWithLoader",
        element: <TodoAppWithLoader />,
        loader: todoLoader,
      },
      {
        path: "/TodoAppWithLoader/:task",
        id: "todo-task-details",
        loader: taskDetailsLoader,
        children: [
          {
            path: "",
            index: true,
            element: <TaskDetails />,
            loader: taskDetailsLoader,
          },
          {
            path: "edit",
            element: <TaskDetailsEdit />,
            loader: taskDetailsLoader,
          },
        ],
      },
      {
        path: "AddTodo",
        element: <AddTodoForm />,
        action: addTodoAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;

  // return (
  //   <div
  //     style={{
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "center",
  //     }}
  //   >
  //     <TodoReactQuery />
  //   </div>
  // );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
