import { Spin } from "antd";
import { useAppSelector } from "../../store/reduxThunkDemo/todoThunkAppStore";

const Todos = () => {
  const { todos, isLoading } = useAppSelector((state) => state.todos);
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "50vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }
  return (
    <ul>
      {todos && todos.map(({ task }, index) => <li key={index}>{task}</li>)}
    </ul>
  );
};

export default Todos;
