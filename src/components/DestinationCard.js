import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
        <img src={img} alt={name} />
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
  .image {
    display: flex;
    iframe {
      margin-right: 2rem;
    }
    img {
      width: 600px;
      margin-left: 2rem;
    }
  }
  p {
    align-self: flex-start;
    width: 50%;
  }
`;

export default DestinationCard;
