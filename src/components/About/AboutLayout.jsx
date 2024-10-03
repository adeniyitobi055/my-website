import styled from "styled-components";
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";
import StyledHeading from "../../ui/StyledHeading";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  overflow: hidden;

  @media screen and (max-width: 425px) and (min-width: 320px) {
    height: 100vh;
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    height: 100vh;
  }
`;

const StyledAboutLayout = styled.div`
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 170rem;
  gap: 6rem;

  @media screen and (max-width: 425px) and (min-width: 320px) {
    flex-direction: column;
    gap: 3rem;
    max-width: 100%;
    height: 100vh;
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    flex-direction: column;
    gap: 4rem;
    max-width: 100%;
    height: 100vh;
  }
`;

function AboutLayout() {
  return (
    <Main>
      <StyledHeading>About me</StyledHeading>
      <StyledAboutLayout>
        <AboutImage />
        <AboutText />
      </StyledAboutLayout>
    </Main>
  );
}

export default AboutLayout;
