import styled from "styled-components";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import Button from "../../ui/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

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
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  //   const [status, setStatus] = useState("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycby5TvivWYQ0S29_KKFJxFyArYAJJgSqTdAoD-46b7s/dev";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(scriptURL, formData, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Message sent successfully", response.data);
    } catch (error) {
      console.log("Error sending message: ", error);
      toast.error("Error sending message. Please try again.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="Name"
        type="text"
        placeholder="Your name"
        required
        value={formData.Name}
        onChange={handleChange}
      />
      <Input
        name="Email"
        type="email"
        placeholder="Your email"
        required
        value={formData.Email}
        onChange={handleChange}
      />
      <Textarea
        name="Message"
        placeholder="Your message"
        required
        value={formData.Message}
        onChange={handleChange}
      />
      <Button type="submit">Send Message</Button>
    </Form>
  );
}

export default ContactForm;
