import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Image } from "react-bootstrap";

const DestinationCard = ({ img, name, url, desc }) => {
  return (
    <StyledCard>
      <h2>{name}</h2>
      <div className="image">
        <iframe
          width="600"
          height="450"
          loading="lazy"
          allowfullscreen
          src={url}
        ></iframe>
        <Image src={img} alt={name} fluid />
      </div>
      <p>{desc}</p>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #4d4d4d;
  border-radius: 15px;
  margin: 1rem 0rem;
  h2 {
    margin: 4rem 0rem;
  }
  .image {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    iframe {
    }
    img {
      width: 600px;
    }
  }
  p {
    margin-top: 2rem;
    width: 50%;
    text-align: center;
  }
`;

export default DestinationCard;
