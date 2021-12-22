import React from "react";
import { Carousel } from "antd";

function ImageSlider(props) {
  return (
    <div>
      <Carousel autoplay>
        {props.images.map((image, index) => (
          <div key={index}>
            <img
              style={{ width: "100%", maxHeight: "100%" }}
              src={`https://pacific-crag-89307.herokuapp.com/${image}`}
            ></img>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
