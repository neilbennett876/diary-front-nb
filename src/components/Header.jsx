import React from "react";
import { Menu } from "antd";
import { HomeOutlined, BookOutlined, FileAddOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function HeaderNavBar() {
  let navigate = useNavigate();
  return (
    <>
      <Menu theme="light" mode="horizontal" className="navbar">
        <Menu.Item
          key="home"
          onClick={() => {
            navigate("/");
          }}
          icon={<HomeOutlined style={{ fontSize: "1.8em" }} />}
        ></Menu.Item>
        <Menu.Item
          key="home"
          onClick={() => {
            navigate("/login");
          }}
          icon={<FileAddOutlined style={{ fontSize: "1.8em" }} />}
        ></Menu.Item>
        <Menu.Item
          key="diary"
          onClick={() => {
            navigate("/diary");
          }}
          icon={<BookOutlined style={{ fontSize: "1.8em" }} />}
        ></Menu.Item>
      </Menu>
    </>
  );
}

export default HeaderNavBar;
