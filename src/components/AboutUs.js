import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <StyledUs id="aboutus">
      <h2>About Inca Wheels</h2>
    </StyledUs>
  );
};

const StyledUs = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default AboutUs;
