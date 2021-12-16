import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="notice">
        <a href="/notice">Notice</a>
      </Menu.Item>
      <SubMenu title={<span>Blogs</span>}></SubMenu>
    </Menu>
  );
}

export default LeftMenu;
