import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TheVan = () => {
  return (
    <StyledVan>
      <h1>Designed with sustainabilty in mind.</h1>
    </StyledVan>
  );
};

const StyledVan = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default TheVan;
