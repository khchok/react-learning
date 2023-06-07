import TodoReduxThunkProvider from "../../store/reduxThunkDemo/TodoReduxThunkProvider";
import TodoContent from "./TodoContent";

const TodoReduxThunk = () => {
  return (
    <TodoReduxThunkProvider>
      <TodoContent />
    </TodoReduxThunkProvider>
  );
};

export default TodoReduxThunk;
