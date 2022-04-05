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
          <img src={washington} alt="washington" />
          <div className="text">
            <motion.h2 variants={ySlide} initial="hidden" animate="show">
              Explore Washington with <span>Inca Wheels.</span>
            </motion.h2>
            <a
              href="https://www.outdoorsy.com/rv-rental/bellevue_wa/2007_ford_econoline-150_239213-listing?fbclid=IwAR1fr22rHz3sl1bOihi5d99JvGcMnBEdKhx-kHALbl_rAKYYR15d8dloHcQ"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <motion.button variants={ySlide} initial="hidden" animate="show">
                Reserve Now
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </StyledLang>
  );
};

const StyledLang = styled(motion.section)`
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
          font-size: 6rem;
          font-family: "Anton", sans-serif;
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
  @media (max-width: 415px) {
    .content {
      .one {
        .text {
          h2 {
            font-size: 3rem;
          }
        }
      }
    }
  }
`;

export default Landing;
