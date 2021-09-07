import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Caro from "./Caro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faUserFriends,
  faGasPump,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

const TheVan = () => {
  return (
    <StyledVan>
      <h1>Designed with sustainabilty in mind.</h1>
      <hr />
      <div className="carousel">
        <Caro />
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faBed} />
        <FontAwesomeIcon icon={faUserFriends} />
        <FontAwesomeIcon icon={faGasPump} />
        <FontAwesomeIcon icon={faTachometerAlt} />
      </div>
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
    </StyledVan>
  );
};

const StyledVan = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  hr {
    width: 10%;
    height: 4px;
    background: #630a10;
    opacity: 1;
  }
  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
  }
  p {
    text-align: center;
    width: 60%;
  }
`;

export default TheVan;
