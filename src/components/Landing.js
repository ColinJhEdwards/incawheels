import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import washington from "../images/washington.jpg";
import van from "../images/1.jpg";
import { ySlide } from "../animations";

const Landing = () => {
  return (
    <StyledLang>
      <div className="content">
        <div className="one">
          <img src={washington} alt="washington-photo" />
        </div>
        <div className="two">
          <img src={van} alt="the-van" />
          <img src={van} alt="the-van" />
          <img src={van} alt="the-van" />
        </div>
      </div>
    </StyledLang>
  );
};

const StyledLang = styled(motion.div)`
  min-height: 100vh;
  .content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .one {
      text-align: center;
      img {
        width: 70%;
      }
    }
    .two {
      display: flex;
      justify-content: center;
      text-align: center;
      img {
        width: 20%;
        margin: 2rem 3rem;
      }
    }
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
