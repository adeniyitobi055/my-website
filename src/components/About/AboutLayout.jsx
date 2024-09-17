import styled from "styled-components";
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";
import StyledHeading from "../../ui/StyledHeading";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  overflow: hidden;
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
