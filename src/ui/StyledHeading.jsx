import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: 40px;
  text-align: center;
  margin: auto;
  text-transform: capitalize;
  font-weight: 400;
  padding: 0;

  @media screen and (max-width: 425px) {
    font-size: 30px;
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    font-size: 35px;
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    font-size: 38px;
  }
`;

export default StyledHeading;
