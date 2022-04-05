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
  faSolarPanel,
  faBox,
  faLeaf,
  faCampground,
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
      <h2 id="why">Why Choose Inca Wheels?</h2>
      <div className="details">
        <div className="detailContainer">
          <div className="title">
            <FontAwesomeIcon
              icon={faSolarPanel}
              className="titleIcon"
              id="solar"
            />
            <h3>Solar</h3>
          </div>
          <div className="line"></div>
          <p>
            Our van includes two 100W solar panels that power a seperate battery
            to help charge your electronics on the road, as well as an electric
            cooler to keep refreshments and foods cold.
          </p>
        </div>
        <div className="detailContainer">
          <div className="title">
            <FontAwesomeIcon icon={faBox} className="titleIcon" id="box" />
            <h3>Storage</h3>
          </div>
          <div className="line"></div>
          <p>
            The van was originally built for long-term road trips across the
            United States which resulted in extra storage space. We fill this
            space with extra blankets and other goodies to make your trips
            comfortable no matter the weather.
          </p>
        </div>
        <div className="detailContainer">
          <div className="title">
            <FontAwesomeIcon icon={faLeaf} className="titleIcon" id="leaf" />
            <h3>Sustainable</h3>
          </div>
          <div className="line"></div>
          <p>
            Sustainable features include the use of Havelock Wool (Sheep's
            wool!) for insulation and FSC certified or repurposed wood for the
            interior. We also include the use of a Waterport 3.85 Gallon Day
            Tank that can be used to have access to pressurized water anywhere
            you go!
          </p>
        </div>
        <div className="detailContainer">
          <div className="title">
            <FontAwesomeIcon
              icon={faCampground}
              className="titleIcon"
              id="camp"
            />
            <h3>Camping Gear</h3>
          </div>
          <div className="line"></div>
          <p>
            All Inca Wheels vehicles include access to an array of camping gear
            including sleeping bags, tents, backpacking packs, lawn chairs,
            folding tables, camping stoves/fuels, and more!
          </p>
        </div>
      </div>
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
    margin-top: 2rem;
  }
  hr {
    width: 30%;
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
  #why {
    margin-top: 2rem;
  }
  .details {
    margin: auto;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .detailContainer {
      box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5);
      margin: 2rem 1rem;
      padding: 2rem;
      border-radius: 15px;
      width: 40%;
      min-height: 270px;
      .line {
        height: 0.2rem;
        background: #414141;
        width: 100%;
        margin-bottom: 1rem;
      }
      .title {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        .titleIcon {
          font-size: 2rem;
          margin-right: 1rem;
        }
      }
      #solar {
        color: #ecd71b;
      }
      #box {
        color: #88511e;
      }
      #leaf {
        color: green;
      }
      #camp {
        color: #911f27;
      }
    }
  }

  @media (max-width: 1282px) {
    .details {
      width: 100%;
      .detailContainer {
        width: 60%;
      }
    }
  }

  @media (max-width: 625px) {
    .details {
      .detailContainer {
        width: 90%;
      }
    }
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
