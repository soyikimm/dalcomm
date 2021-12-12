import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="outer">
        <a href="/outer">Outer</a>
      </Menu.Item>
      <Menu.Item key="top">
        <a href="/top">Top</a>
      </Menu.Item>
      <Menu.Item key="pants">
        <a href="/">Pants</a>
      </Menu.Item>
      <Menu.Item key="Skirt">
        <a href="/">Skirt</a>
      </Menu.Item>
      <Menu.Item key="Bag">
        <a href="/">Dress</a>
      </Menu.Item>
      <Menu.Item key="etc">
        <a href="/">E.T.C</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
