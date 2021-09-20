import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import DestinationCard from "./DestinationCard";
import { destinations } from "../data";

const Destinations = () => {
  const [data, setData] = useState(destinations);
  console.log(data);

  return (
    <StyledUs id="destinations">
      <h2 id="title">Destination Recommendations</h2>
      {data.map((d) => (
        <DestinationCard
          key={d.id}
          name={d.name}
          url={d.url}
          desc={d.desc}
          img={d.img}
        />
      ))}
    </StyledUs>
  );
};

const StyledUs = styled(motion.section)`
  min-height: 100vh;
  background: #313131;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  #title {
    font-size: 3rem;
    text-align: center;
  }
  h2 {
    margin: 2rem 0rem;
  }
`;

export default Destinations;
