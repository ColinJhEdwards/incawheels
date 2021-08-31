import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import washington from "../images/washington.jpg";

const Landing = () => {
  return (
    <StyledLang>
      <h2>Home</h2>
    </StyledLang>
  );
};

const StyledLang = styled(motion.div)`
  min-height: 100vh;
  background-image: url(${washington});
  position: relative;
`;

export default Landing;
