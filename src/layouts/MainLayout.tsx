import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import { Layout as AntdLayout, Menu, MenuProps, Spin } from "antd";
import logo from "../logo-demo.svg";
const { Header, Content } = AntdLayout;

const items1: MenuProps["items"] = [
  {
    key: "logo",
    label: (
      <div
        style={{
          backgroundImage: `url(${logo})`,
          width: "50px",
          height: "100%",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
    ),
  },
  {
    key: "home",
    label: <Link to="/">Home</Link>,
  },
  {
    key: "DemoNoContext",
    label: <Link to="DemoNoContext">DemoNoContext</Link>,
  },
  {
    key: "TodoApp",
    label: "TodoApp",
    children: [
      { key: "Todo", label: <Link to="/TodoApp">TodoApp</Link> },
      {
        key: "TodoAppWithLoader",
        label: <Link to="/TodoAppWithLoader">TodoAppWithLoader</Link>,
      },
    ],
  },
  {
    key: "TodoAppWithReducer",
    label: <Link to="/TodoAppWithReducer">TodoAppWithReducer</Link>,
  },
  {
    key: "redux",
    label: <Link to="/Redux">Redux</Link>,
  },

  {
    key: "TodoReactQuery",
    label: <Link to="/TodoReactQuery">TodoReactQuery</Link>,
  },
];

const MainLayout = ({ children }: React.PropsWithChildren) => {
  const { state } = useNavigation();
  return (
    <AntdLayout style={{}}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Menu theme="dark" mode="horizontal" items={items1} />
      </Header>

      <Content
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {state === "loading" && <Spin size="large" />}
        {state !== "loading" && children}
      </Content>
    </AntdLayout>
  );
};

export default MainLayout;
