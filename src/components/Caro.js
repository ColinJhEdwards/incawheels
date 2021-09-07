import React from "react";
import { Carousel } from "react-bootstrap";
import van1 from "../images/5.jpg";
import van2 from "../images/6.jpg";
import van3 from "../images/1.jpg";

const Caro = () => {
  return (
    <Carousel fade nextLabel={null} prevLabel={null}>
      <Carousel.Item>
        <img className="d-block w-100" src={van1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={van2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={van3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Caro;
