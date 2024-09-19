import styled from "styled-components";
import StyledHeading from "../../ui/StyledHeading";
import ContactForm from "./ContactForm";
import MediaContact from "./MediaContact";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  overflow: hidden;
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
