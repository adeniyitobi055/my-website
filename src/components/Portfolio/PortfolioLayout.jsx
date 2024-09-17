import styled from "styled-components";

const StyledPortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-template-rows: repeat(2, auto);
  grid-gap: 30px;
  margin: 50px auto;
  width: 120rem;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
`;
