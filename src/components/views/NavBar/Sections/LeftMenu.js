import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      {/* <Menu.Item key="notice">
        <a href="/notice">Notice</a>
      </Menu.Item> */}
    </Menu>
  );
}

export default LeftMenu;
