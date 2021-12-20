import React from "react";

function Footer() {
  return (
    <div
      style={{
        height: "250px",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
        fontSize: "0.8rem",
        backgroundColor: "#E5E8E8",
        padding: "20px",
      }}
    >
      <footer>
        <p>상호: (주)Dalcom | 대표자명 : 000</p>
        <p>
          사업자등록번호: 000-00-00000 | 통신판매업신고번호:
          제0000-서울강남-0000호
        </p>
        <address>
          연락처:00-000-0000 | 팩스 : 000-0000-0000 | 이메일 : abc@gmail.com
        </address>
        <p>Copyright © 2018 tcpschool.co.,Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
