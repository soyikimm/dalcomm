import React from "react";
import "./UserCardBlock.css";
function UserCardBlock(props) {
  const renderCartImage = (images) => {
    if (images.length > 0) {
      let image = images[0];
      return `http://localhost:5000/${image}`;
    }
  };

  const renderItems = () =>
    props.products &&
    props.products.map((product, index) => (
      <tr key={index}>
        <td>
          <img
            style={{ width: "100px" }}
            alt="product"
            src={renderCartImage(product.images)}
          />
        </td>
        <td>{product.title}</td>
        <td>{product.quantity} 개</td>
        <td>{product.price} 원</td>
        <td>
          <button onClick={() => props.removeItem(product._id)}>X</button>
        </td>
      </tr>
    ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>상품정보</th>
            <th>수량</th>
            <th>상품금액</th>
            <th></th>
          </tr>
        </thead>

        <tbody>{renderItems()}</tbody>
      </table>
    </div>
  );
}

export default UserCardBlock;
