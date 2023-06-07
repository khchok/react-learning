import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import TodoApp from "../pages/TodoApp";
import DemoNoContext from "../pages/DemoNoContext";
import TodoAppWithReducer from "../pages/TodoAppWithReducer";
import TodoRedux from "../pages/TodoRedux";
import TodoReduxThunk from "../pages/TodoReduxThunk";
import TodoReactQuery from "../pages/TodoReactQuery";
import InnerLayout from "../layouts/InnerLayout";

const BaseRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/DemoNoContext" element={<DemoNoContext />} />
        <Route path="/TodoApp" element={<TodoApp />} />
        <Route path="/TodoAppWithReducer" element={<TodoAppWithReducer />} />
        {/* <Route path="/TodoRedux" element={<TodoRedux />} /> */}
        <Route path="/Redux" element={<InnerLayout />}>
          <Route index element={<TodoRedux />} />
          <Route path="/Redux/TodoReduxThunk" element={<TodoReduxThunk />} />
        </Route>
        <Route path="/TodoReactQuery" element={<TodoReactQuery />} />
      </Route>
    </Routes>
  );
};

export default BaseRoutes;
