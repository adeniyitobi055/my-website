import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
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
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
