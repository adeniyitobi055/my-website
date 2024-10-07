import styled from "styled-components";
import StyledHeading from "../../ui/StyledHeading";
import ContactForm from "./ContactForm";
import MediaContact from "./MediaContact";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const StyledContactLayout = styled.div`
  background: var(--color-grey-50);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin: auto;
  max-width: 120rem;
  padding: 0 2rem;
  gap: 6rem;
  height: 100%;

  @media screen and (max-width: 768px) and (min-width: 320px) {
    flex-direction: column;
    max-width: 100%;
    width: 100%;
    padding: 0;
    gap: 3rem;
    height: 100%;
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    flex-direction: row;
    max-width: 100%;
    width: 100%;
    /* padding: 0; */
    gap: 6rem;
    height: 100%;
  }
`;

function ContactLayout() {
  return (
    <Main>
      <StyledHeading>Contact Me</StyledHeading>
      <StyledContactLayout>
        <MediaContact />
        <ContactForm />
      </StyledContactLayout>
    </Main>
  );
}

export default ContactLayout;
