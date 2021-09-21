import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { destinations } from "../data";
import DestinationCard from "./DestinationCard";

const CaroDest = () => {
  const [data, setData] = useState(destinations);
  return (
    <Carousel fade nextLabel={null} prevLabel={null} pause={"hover"}>
      {data.map((d) => (
        <Carousel.Item>
          <DestinationCard
            key={d.id}
            name={d.name}
            url={d.url}
            desc={d.desc}
            img={d.img}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CaroDest;
