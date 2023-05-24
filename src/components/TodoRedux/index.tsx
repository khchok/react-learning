import TodoReducerProvider from "../../store/reducerDemo/TodoReducerProvider";
import TodoReduxProvider from "../../store/reduxDemo/TodoReduxProvider";
import TodoContent from "./TodoContent";

const TodoRedux = () => {
  return (
    <TodoReduxProvider>
      <TodoContent />
    </TodoReduxProvider>
  );
};

export default TodoRedux;
