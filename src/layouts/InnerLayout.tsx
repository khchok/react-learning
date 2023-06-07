import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Layout as AntdLayout, Layout, Menu, MenuProps } from "antd";
import logo from "../../logo-demo.svg";
const { Header, Content, Sider } = AntdLayout;

const items: MenuProps["items"] = [
  {
    key: "redux",
    label: "Redux",
    children: [
      { key: "TodoRedux", label: <Link to="/Redux">TodoRedux</Link> },
      {
        key: "TodoReduxThunk",
        label: <Link to="/Redux/TodoReduxThunk">TodoReduxThunk</Link>,
      },
    ],
  },
];

const InnerLayout = () => {
  return (
    <Layout>
      <Sider>
        <Menu theme="dark" onClick={() => {}} mode="inline" items={items} />
      </Sider>
      <Content style={{ padding: "0 24px", minHeight: 280 }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default InnerLayout;
