import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Caro from "./Caro";
import van from "../images/nobg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faUserFriends,
  faGasPump,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

const TheVan = () => {
  return (
    <StyledVan id="thevan">
      <h1>Designed with sustainabilty in mind.</h1>
      <hr />
      <div className="vanLogo">
        <figure>
          <img src={van} alt="van-with-no-background" />
          <figcaption>2007 Ford Econoline 150 Camper Van</figcaption>
        </figure>
      </div>
      <div className="icons">
        <div>
          <FontAwesomeIcon className="icon" icon={faBed} />
          Sleeps Two
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faUserFriends} />
          Two Seatbelts
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faGasPump} />
          Fuel: Gas
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faTachometerAlt} />
          <span id="transmission">Transmission:</span> Automatic
        </div>
      </div>
      <hr />
      <p>
        A 2007 Ford Econoline 150 equipped with solar panels, remodeled with
        sustainable material, and added storage made from cedar wood which
        creates a lovely smell that deters bugs. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Maiores fuga eos at nihil. Illo quos, et
        quasi ducimus maxime commodi perferendis laborum, veritatis quia fugiat
        aperiam voluptate odio molestias. Incidunt repellat facilis voluptas sed
        placeat ratione, eligendi obcaecati quam reprehenderit aliquid
        dignissimos iure animi porro odit quia provident earum rerum!
      </p>
      <div className="carousel">
        <Caro />
      </div>
    </StyledVan>
  );
};

const StyledVan = styled(motion.section)`
  min-height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  h1 {
    text-align: center;
  }
  hr {
    width: 10%;
    height: 4px;
    background: #911f27;
    opacity: 1;
  }
  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin-bottom: 1rem;
  }
  .icons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 60%;
    div {
      border: 1px solid rgba(151, 151, 151, 0.5);
      border-radius: 5px;
      width: 200px;
      padding: 1rem 0rem;
      margin: 0.5rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      .icon {
        font-size: 2rem;
      }
    }
  }
  p {
    text-align: center;
    width: 60%;
  }
  @media (max-width: 415px) {
    .vanLogo {
      img {
        width: 300px;
      }
    }
    .icons {
      width: 100%;
      #transmission {
        display: none;
      }
      div {
        width: 150px;
        .icon {
          font-size: 1rem;
        }
      }
    }
    .carousel {
      width: 90%;
    }
    p {
      width: 90%;
    }
  }
`;

export default TheVan;
