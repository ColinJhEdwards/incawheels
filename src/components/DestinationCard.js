import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Image } from "react-bootstrap";

const DestinationCard = ({ img, name, url, desc }) => {
  return (
    <StyledCard>
      <Image src={img} alt={name} fluid />
      <h2>{name}</h2>
      <iframe
        width="400"
        height="350"
        loading="lazy"
        allowfullscreen
        src={url}
        title={`map-of-${name}`}
      ></iframe>
      <p>{desc}</p>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  width: 90%;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #4d4d4d;
  border-radius: 15px;
  margin: 1rem 0rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: -1;
  }
  h2 {
    margin: 4rem 0rem;
    align-self: center;
    text-shadow: 0px 1px 2px black;
    font-size: 3rem;
    text-align: center;
  }
  iframe {
    position: absolute;
    top: 0;
    right: 0;
  }
  p {
    align-self: center;
    margin-top: 2rem;
    width: 50%;
    text-align: center;
    backdrop-filter: blur(4px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    text-shadow: 0px 1px 2px black;
  }
  @media (max-width: 1550px) {
    iframe {
      width: 300px;
      height: 200px;
    }
  }
  @media (max-width: 1150px) {
    iframe {
      position: static;
      width: 400px;
      height: 300px;
    }
    p {
      width: 90%;
    }
  }
  @media (max-width: 480px) {
    iframe {
      width: 300px;
      height: 300px;
      opacity: 0.8;
    }
  }
`;

export default DestinationCard;
