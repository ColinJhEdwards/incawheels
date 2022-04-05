import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import joao from "../images/joao.jpg";
import thomas from "../images/thomas.jpg";
import coin from "../images/coin.JPG";
import road from "../images/road.jpg";
import incaIcon from "../images/revicon.png";

const AboutUs = () => {
  return (
    <StyledUs id="aboutus">
      <div className="wrap">
        <div className="image">
          <img src={road} alt="open road in Port Ang, WA" />
        </div>
        <div className="text">
          <div className="title">
            <h1>About Inca Wheels</h1>
            <h2>
              Our mission: To bring affordable access to the wonderous outdoors
              the pacific Northwest has to offer for generations to come.
            </h2>
          </div>
          <div className="icon">
            <img src={incaIcon} alt="inca icon" />
          </div>
          <div className="content">
            <p>
              Inca Wheels is an indigenous owned outdoor recreational vehicle
              rental company based in the Pacific Northwest. Started as a way to
              help raise funds for the nonprofit{" "}
              <a
                href="https://ruta-verde.org/#/home"
                target="_blank"
                rel="noreferrer"
              >
                Ruta Verde
              </a>{" "}
              that focuses on Sustainable Development projects including the
              building of Community Forests in North America and creating
              sustainable food solutions in Peru.
            </p>
            <p>
              The Inca were honorable people that valued their surrounding
              environments at the core of their belief systems, and we hope to
              honor this ideology by creating a business that focuses on caring
              for the planet, not just profits.
            </p>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="title">
          <h2>Our Team</h2>
        </div>
        <div className="list">
          <div className="person">
            <img src={joao} alt="joao" />
            <h2>Joao Vilca Soto</h2>
            <p>
              Joao, founder of Inca Wheels and Ruta Verde, is of Inca decent and
              holds a bachelors degree in sustainable practices. He has been
              apart of environmental projects located in the Amazon Rain Forest
              and Iceland.
            </p>
          </div>
          <div className="person">
            <img src={thomas} alt="thomas" />
            <h2>Thomas Diener</h2>
            <p>
              Thomas assists in designing and constructing the vehicles we
              offer. He has cultural experience from living in South Africa for
              more than two years.
            </p>
          </div>
          <div className="person">
            <img src={coin} alt="colin" />
            <h2>Colin Edwards</h2>
            <p>
              Volunteer Front End Developer, assists in designing and
              maintaining our website Inca Wheels. He was born in the Pacific
              Northwest, is an advocate for sustainability, and has worked with
              non-profits such as Climate Solutions.
            </p>
          </div>
        </div>
      </div>
    </StyledUs>
  );
};

const StyledUs = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .wrap {
    display: flex;
    flex-wrap: wrap;
    .image {
      flex: 3 1 40rem;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    .text {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex: 1 1 40rem;
    }
  }

  .title {
    text-align: center;
    h1 {
      font-size: 3rem;
    }
    h2 {
      color: #911f27;
    }
  }
  .icon {
    display: flex;
    justify-content: center;
    img {
      width: 20%;
    }
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    p {
      width: 90%;
      text-align: center;
      line-height: 1.5;
      font-size: 1.5rem;
    }
  }
  .team {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 90vh;
    background: #313131;
    color: white;
    h2 {
      color: white;
    }
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
      margin: 2rem 0rem;

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
  @media (max-width: 1278px) {
    .wrap {
      .image {
        display: none;
      }
    }
  }
  @media (max-width: 415px) {
    .icon {
      margin: 4rem 0rem;
    }
    .title {
      h2 {
        width: 90%;
        margin: auto;
        text-align: center;
      }
    }
    .content {
      p {
        width: 90%;
        font-size: 1rem;
      }
    }
  }
`;

export default AboutUs;
