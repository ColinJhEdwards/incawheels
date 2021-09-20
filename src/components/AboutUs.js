import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import aboutImg from "../images/about.jpg";
import joao from "../images/joao.jpg";
import khocco from "../images/khocco.jpg";
import coin from "../images/coin.JPG";

const AboutUs = () => {
  return (
    <StyledUs id="aboutus">
      <div className="title">
        <h2>About Inca Wheels</h2>
        <p>
          "Our mission is Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsum, mollitia."
        </p>
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
      </div>
      <div className="team">
        <div className="title">
          <h2>Our Team</h2>
        </div>
        <div className="list">
          <div className="person">
            <img src={joao} alt="joao" />
            <h2>Joao Vilva Soto</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
              itaque. Distinctio sapiente perspiciatis voluptatibus cum enim
              nesciunt consequatur itaque quasi.
            </p>
          </div>
          <div className="person">
            <img src={khocco} alt="khocoo" />
            <h2>Khocco Exendine</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
              itaque. Distinctio sapiente perspiciatis voluptatibus cum enim
              nesciunt consequatur itaque quasi.
            </p>
          </div>
          <div className="person">
            <img src={coin} alt="colin" />
            <h2>Colin Edwards</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
              itaque. Distinctio sapiente perspiciatis voluptatibus cum enim
              nesciunt consequatur itaque quasi.
            </p>
          </div>
        </div>
      </div>
    </StyledUs>
  );
};

const StyledUs = styled(motion.div)`
  min-height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .title {
    text-align: center;
    h2 {
      font-size: 3rem;
    }
    p {
      color: #911f27;
    }
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    h3 {
      width: 50%;
      text-align: center;
    }
  }
  .team {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .title {
      margin: 2rem 0rem;
      h2 {
        font-size: 3rem;
      }
    }
  }
  .list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    .person {
      width: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      img {
        width: 200px;
        border-radius: 50rem;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      }
      h2 {
        margin: 1rem 0rem;
        width: 300px;
      }
    }
  }
  @media (max-width: 415px) {
    .title {
      p {
        width: 90%;
        margin: 2rem auto;
        text-align: center;
      }
    }
    .content {
      h3 {
        width: 90%;
      }
    }
  }
`;

export default AboutUs;
