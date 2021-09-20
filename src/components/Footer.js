import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFoot>
      <h2> &copy; IncaWheels 2021</h2>
    </StyledFoot>
  );
};

const StyledFoot = styled.div`
  min-height: 5vh;
  background: #630a10;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 0;
  }
`;

export default Footer;
