import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import washington from "../images/washington.jpg";
import { fade, pageAnimation } from "../animations";

const Landing = () => {
  return (
    <StyledLang
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="content">
        <motion.h2 variants={fade}>
          Explore Washington with <span>Inca Wheels</span>
        </motion.h2>
      </div>
    </StyledLang>
  );
};

const StyledLang = styled(motion.div)`
  min-height: 100vh;
  background-image: url(${washington});
  position: relative;
  .content {
    min-height: 60vh;
    padding-top: 6rem;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      color: black;
      font-size: 4rem;
      text-shadow: 1px 1px 3px gray;
      span {
        color: #911f27;
      }
    }
  }
`;

export default Landing;
