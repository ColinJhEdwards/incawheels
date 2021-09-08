import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <StyledUs>
      <h2>About Inca Wheels</h2>
    </StyledUs>
  );
};

const StyledUs = styled(motion.div)`
  min-height: 100vh;
  background: #3a3a3a;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default AboutUs;
