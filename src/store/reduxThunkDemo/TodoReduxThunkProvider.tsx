import React from "react";
import { Provider } from "react-redux";
import store from "./todoThunkAppStore";

const TodoReduxThunkProvider = ({ children }: React.PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default TodoReduxThunkProvider;
