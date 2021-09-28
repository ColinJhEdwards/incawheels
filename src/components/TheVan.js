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
        Our 2007 Ford Econoline Campervan Conversion is a reliable ride built
        for comfort with sustainability in mind. Features include two 100W solar
        panels that power a battery to help charge your electronics on the road
        without compromising the vehicle's battery, as well as an electric
        cooler to keep refreshments and foods cold without the worry of using
        ice. The van was originally built for long-term road trips across the
        United States which results in having plenty of storage, which we use to
        fill with extra blankets and other goodies to make your trips
        comfortable no matter the weather.
      </p>
      <p>
        Sustainable features include the use of Havelock Wool (Sheep's wool!)
        for insulation and FSC certified or repurposed wood for the interior. In
        addition to these features, we also include with your rental the use of
        a Waterport 3.85 Gallon Day Tank that can be used to have access to
        pressurized water anywhere you go!
      </p>

      <p>
        And with all Inca Wheels vehicles, you have access to an array of
        camping gear including sleeping bags, tents, backpacking packs, lawn
        chairs, folding tables, camping stoves/fuels, and more!
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
