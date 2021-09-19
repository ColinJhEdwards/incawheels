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
      <h2>Destination Recommendations</h2>
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
  background: #313131;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  h2 {
    margin: 2rem 0rem;
  }
`;

export default Destinations;
