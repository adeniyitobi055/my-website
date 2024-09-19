import styled from "styled-components";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import Button from "../../ui/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  margin: 50px auto;
  width: 120rem;
  max-width: 1200px;
  justify-content: flex-start;
  align-items: flex-start;
`;

function ContactForm() {
  return (
    <>
      <Container>
        <Input name="name" type="text" placeholder="Your name" />
        <Input name="email" type="text" placeholder="Your email" />
        <Textarea name="message" placeholder="Your message" />
        <Button type="submit">Submit</Button>
      </Container>
    </>
  );
}

export default ContactForm;
