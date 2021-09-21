import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CaroDest from "./CaroDest";

const Destinations = () => {
  return (
    <StyledUs id="destinations">
      <h2 id="title">Destination Recommendations</h2>
      <div>
        <CaroDest />
      </div>
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
  div {
    margin: 1rem auto 2rem auto;
  }
`;

export default Destinations;
