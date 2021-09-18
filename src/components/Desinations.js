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
      <h2>Destinations</h2>
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

const StyledUs = styled(motion.div)`
  min-height: 100vh;
  background: #4e4e4e;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default Destinations;
