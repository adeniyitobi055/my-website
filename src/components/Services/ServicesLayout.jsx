import styled from "styled-components";
import StyledHeading from "../../ui/StyledHeading";
import ServiceCard from "../../ui/ServiceCard";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  overflow: hidden;
`;

const StyledServicesLayout = styled.div`
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
  }
`;

const StyledServiceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-template-rows: repeat(2, auto);
  grid-gap: 30px;
  margin: 50px auto;
  width: 120rem;
  max-width: 1200px;
  justify-content: center;
  align-items: center;

  /*  & > *:nth-child(3) {
    grid-column: 1 / -1;
    justify-content: center;
    width: 50%;
  } */

  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 25px auto;
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

function ServicesLayout() {
  return (
    <Main>
      <StyledHeading>My Services</StyledHeading>
      <StyledServicesLayout>
        <StyledServiceContainer>
          <ServiceCard
            icon={<FaReact />}
            title="Front-End Development with React.js"
            description=" Build highly interactive, dynamic web applications using the React JavaScript library. Implement efficient user interfaces for complex, data-driven experiences while maintaining seamless user interaction."
            link="https://www.hotjar.com/web-app-design/"
            linkText="Learn more"
          />
          <ServiceCard
            icon={<FaNodeJs />}
            title="Back-End Development with Node.js"
            description="Develop scalable, high-performance server-side applications using Node.js. Handle asynchronous operations, build APIs, and manage data with minimal overhead, ensuring real-time performance for web applications."
            linkText="Learn more"
            link="https://www.hotjar.com/web-app-design/"
          />
        </StyledServiceContainer>
      </StyledServicesLayout>
    </Main>
  );
}

export default ServicesLayout;
