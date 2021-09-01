import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import washington from "../images/washington.jpg";
import { ySlide } from "../animations";

const Landing = () => {
  return (
    <StyledLang>
      <div className="content">
        <div className="one">
          <img src={washington} alt="washington-photo" />
          <div className="text">
            <motion.h2 variants={ySlide} initial="hidden" animate="show">
              Explore Washington with <span>Inca Wheels.</span>
            </motion.h2>
            <motion.button variants={ySlide} initial="hidden" animate="show">
              Reserve Now
            </motion.button>
          </div>
        </div>
      </div>
    </StyledLang>
  );
};

const StyledLang = styled(motion.div)`
  min-height: 100vh;
  position: relative;
  .content {
    min-height: 100vh;
    .one {
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .text {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        h2 {
          text-align: center;
          color: black;
          text-shadow: 1px 1px 3px gray;
          font-size: 3rem;
          span {
            color: #911f27;
          }
        }
        button {
          padding: 1rem 2rem;
          border: 3px solid white;
          background: none;
          backdrop-filter: blur(4px);
          color: white;
          font-weight: bold;
          text-shadow: 1px 1px 3px black;
          margin-top: 1rem;
          cursor: pointer;
          transition: all ease 0.5s;
          &:hover {
            background: white;
            color: #911f27;
            text-shadow: none;
          }
        }
      }
    }
  }
`;

export default Landing;
