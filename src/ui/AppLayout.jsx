import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import { useSwipeNavigation } from "../hooks/useSwipeNavigation";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 13rem 4.8rem 6.4rem;
  overflow: auto;
  height: 100%;

  @media screen and (max-width: 425px) and (min-width: 320px) {
    padding: 10.5rem 2.5rem 3.2rem;
    height: 100vh;
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    padding: 11rem 3.5rem 4.2rem;
    height: 100vh;
  }
`;

const Container = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  overflow-x: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  & > * {
    scroll-snap-align: start;
    /* flex: 0 0 100%; */
  }

  transition: transform 0.3s ease-in-out, scale 0.3s ease-in-out;
  transform: translateY(${({ translateY }) => translateY}px);
  /* scale(${({ scale }) => scale}); */
`;

function AppLayout() {
  const { swipeHandlers, translateY } = useSwipeNavigation();

  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Container {...swipeHandlers} translateY={translateY}>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
