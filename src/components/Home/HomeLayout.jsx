import styled from "styled-components";
import ImageContainer from "./ImageContainer";
import Description from "./Description";

const StyledHomeLayout = styled.div`
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 170rem;
  gap: 6rem;
  height: 100vh;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 3rem;
    padding: 0.5rem;
    max-width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    flex-direction: column;
    gap: 4rem;
    padding: 1rem;
    max-width: 100%;
    height: 100%;
  }
`;

function HomeLayout() {
  return (
    <StyledHomeLayout>
      <ImageContainer />
      <Description />
    </StyledHomeLayout>
  );
}

export default HomeLayout;
