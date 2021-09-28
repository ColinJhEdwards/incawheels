import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import joao from "../images/joao.jpg";
import khocco from "../images/khocco.jpg";
import coin from "../images/coin.JPG";

const AboutUs = () => {
  return (
    <StyledUs id="aboutus">
      <div className="title">
        <h2>About Inca Wheels</h2>
        <p>
          <strong>
            "Our mission: To bring affordable access to the wonderous outdoors
            the Pacific Northwest has to offer for generatiosn to come."
          </strong>
        </p>
      </div>
      <div className="content">
        <h3>
          Inca Wheels is an indigenous owned outdoor receational vehicle rental
          company based in the Pacific Northwest. Started as a way to help raise
          funds for the nonprofit{" "}
          <a href="https://ruta-verde.org/#/home" target="_blank">
            Ruta Verde
          </a>{" "}
          that focuses on Sustainable Development projects including the
          building of Community Forests in North America and creating
          sustainable food solutions in Peru. The Inca were honorable people
          that valued their surrounding environments at the core of their belief
          systems, and we hope to honor this ideology by creating a business
          that focuses on caring for the planet, not just profits.
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

const StyledUs = styled(motion.section)`
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
      width: 60%;
      text-align: center;
      line-height: 1.5;
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
