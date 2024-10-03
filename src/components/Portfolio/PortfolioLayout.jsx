import styled from "styled-components";
import StyledHeading from "../../ui/StyledHeading";
import PortfolioCard from "../../ui/PortfolioCard";
import {
  FastReactPizza,
  OasisLibrary,
  TheWildOasis,
  TravelList,
} from "./PortfolioImages";

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

const StyledPortfolioLayout = styled.div`
  background: var(--color-grey-50);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 120rem;
  padding: 0 2rem;
  gap: 6rem;

  @media screen and (max-width: 425px) and (min-width: 320px) {
    flex-direction: column;
    max-width: 100%;
    padding: 0 0.5rem;
    gap: 1.5rem;
    padding: 0;
    width: 100%;
    height: 100vh;
  }
`;

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

  @media screen and (max-width: 425px) and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 100%;
    width: 98%;
    height: 100vh;
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 100%;
    height: 100vh;
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 100%;
  }
`;

function PortfolioLayout() {
  return (
    <Main>
      <StyledHeading>My Work</StyledHeading>
      <StyledPortfolioLayout>
        <StyledPortfolioContainer>
          <PortfolioCard
            images={OasisLibrary}
            title="The Oasis Library"
            description="A library management system designed to automate activities in a library"
            link="https://oasis-library-ten.vercel.app/"
          />
          <PortfolioCard
            images={FastReactPizza}
            title="Fast React Pizza"
            description="Allows users to order the pizza of their choice from a restaurant and get it delivered to them."
            link="https://fast-react-pizza-nu.vercel.app/"
          />
          <PortfolioCard
            images={TravelList}
            title="Travel List"
            description="keeps track of travel items needed for a trip, with statistics to ensure that nothing is forgotten while packing."
            link="https://travel-list-chi-lilac.vercel.app/"
          />
          <PortfolioCard
            images={TheWildOasis}
            title="The Wild Oasis Hotel"
            description="Designed for internal use only checks in/out clients amongst other activities to simplify and enhance customer service."
            link="https://the-wild-oasis-alpha-eight.vercel.app/"
          />
        </StyledPortfolioContainer>
      </StyledPortfolioLayout>
    </Main>
  );
}

export default PortfolioLayout;
