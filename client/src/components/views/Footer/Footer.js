import React from "react";
import { Icon } from "antd";

function Footer() {
  return (
    <div
      style={{
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
        fontSize: "1rem",
        backgroundColor: "pink",
        padding: "20px",
      }}
    >
      <p>상호명 : Dalcom</p>
    </div>
  );
}

export default Footer;
