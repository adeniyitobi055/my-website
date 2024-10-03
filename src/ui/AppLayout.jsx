import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import { useSwipeNavigation } from "../hooks/useSwipeNavigation";
import { useState } from "react";

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
  overflow: auto;

  @media screen and (max-width: 425px) and (min-width: 320px) {
    padding: 10.5rem 2.5rem 3.2rem;
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    padding: 11rem 3.5rem 4.2rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  gap: 3.2rem;

  transition: transform 0.3s ease-in-out;
  transform: ${({ position }) => `translateX(${position}px)`};
`;

function AppLayout() {
  const swipeHandlers = useSwipeNavigation();
  const [position, setPosition] = useState(0);

  swipeHandlers.onSwipedLeft = () =>
    setPosition((prev) => prev - window.innerWidth);
  swipeHandlers.onSwipedRight = () =>
    setPosition((prev) => prev + window.innerWidth);

  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Container {...swipeHandlers} position={position}>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
