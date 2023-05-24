import React from "react";
import { Provider } from "react-redux";
import store from "./todoAppStore";

const TodoReduxProvider = ({ children }: React.PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default TodoReduxProvider;
