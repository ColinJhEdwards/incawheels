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
          <div className="text">
            <h2>
              Explore Washington with <span>Inca Wheels.</span>
            </h2>
            <button>Reserve Now</button>
          </div>
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
  padding-top: 6rem;
  .content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .one {
      text-align: center;
      position: relative;
      img {
        width: 70%;
      }
      .text {
        position: absolute;
        top: 30%;
        right: 28%;
        h2 {
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
    .two {
      display: flex;
      justify-content: center;
      text-align: center;
      img {
        width: 20%;
        margin: 2rem 3rem;
      }
    }
  }
`;

export default Landing;
