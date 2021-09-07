import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Caro from "./Caro";

const TheVan = () => {
  return (
    <StyledVan>
      <h1>Designed with sustainabilty in mind.</h1>
      <hr />
      <Caro />
    </StyledVan>
  );
};

const StyledVan = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  hr {
    width: 60%;
    height: 2px;
  }
  img {
    width: 50%;
  }
`;

export default TheVan;
