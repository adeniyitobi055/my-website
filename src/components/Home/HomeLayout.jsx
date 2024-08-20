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
