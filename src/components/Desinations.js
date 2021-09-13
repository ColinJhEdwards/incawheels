import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Destinations = () => {
  return (
    <StyledUs id="destinations">
      <h2>Destinations</h2>
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
