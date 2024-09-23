import styled from "styled-components";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import Button from "../../ui/Button";
import toast from "react-hot-toast";
import axios from "axios";
import { useRef, useState } from "react";

const Form = styled.form`
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
  const [disabled, setDisabled] = useState(false);
  const formRef = useRef(null);
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxLJ4sL5gqkjpHajB1pRwYj5k9GthfuEPs_oYRaKIcZlui5WHoOsabHfMPqXT1-7Slt/exec";

  const handleSubmit = (e) => {
    setDisabled(true);
    const form = formRef.current;
    // const form = document.querySelector("Form");
    const formData = new FormData(form);
    e.preventDefault();
    try {
      const response = axios.post(scriptURL, formData);
      toast.success("Message sent successfully", response.data);
      form.reset();
    } catch (error) {
      console.log("Error sending message: ", error);
      toast.error("Error sending message. Please try again.");
    } finally {
      setDisabled(false);
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)} ref={formRef} name="Form">
      <Input name="Name" type="text" placeholder="Your name" required />
      <Input name="Email" type="email" placeholder="Your email" required />
      <Textarea
        name="Message"
        placeholder="Your message"
        required
        type="text"
      />
      <Button type="submit" disabled={disabled} isActive>
        {disabled ? "Sending..." : "Send Message"}
      </Button>
    </Form>
  );
}

export default ContactForm;
