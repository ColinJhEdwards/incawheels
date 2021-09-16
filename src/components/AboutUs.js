import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import aboutImg from "../images/about.jpg";

const AboutUs = () => {
  return (
    <StyledUs id="aboutus">
      <div className="title">
        <h2>About Inca Wheels</h2>
      </div>
      <div className="content">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          cumque ipsam aliquid quasi ipsum quisquam neque, ratione blanditiis?
          Id, fugit maxime et quae error pariatur non natus in consequuntur
          alias? Porro ipsa doloremque cupiditate ratione. Suscipit, sapiente
          dolore nihil et dolores sunt omnis accusantium aut! Itaque dignissimos
          voluptas aliquid iste.
        </h3>
        <img src={aboutImg} alt="img-of-leaf" />
      </div>
      <div className="team">
        <div className="title">
          <h2>Our Team</h2>
        </div>
      </div>
    </StyledUs>
  );
};

const StyledUs = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    h3 {
      width: 50%;
    }
  }
`;

export default AboutUs;
