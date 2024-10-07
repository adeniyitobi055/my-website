import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Button from "../../ui/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4rem;
  width: 60%;
  margin: 50px auto;
  /* width: 120rem; */
  max-width: 1200px;

  @media screen and (max-width: 425px) {
    max-width: 100%;
    margin: 11px auto;
    width: 100%;
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    max-width: 100%;
    margin: 0;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    font-size: 1.45rem;
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    font-size: 1.7rem;
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  color: var(--color-grey-600);
  margin-top: 0.5rem;

  @media screen and (max-width: 425px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    font-size: 2.4rem;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  height: 3.6rem;
  /* justify-content: center; */
  /* align-items: center; */

  @media screen and (max-width: 425px) {
    height: 1.2rem;
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    height: 1.5rem;
  }
`;

const Icons = styled.div`
  display: inline-block;
  color: var(--color-grey-600);
  font-size: 3.2rem;
  transition: color 0.5s, transform 0.5s;

  &:hover {
    color: var(--color-red-700);
    transform: translateY(-5px);
  }

  @media screen and (max-width: 425px) {
    font-size: 2.7rem;
  }
`;

function MediaContact() {
  return (
    <Container>
      <Row>
        <Icon>
          <MdEmail />
        </Icon>
        adedejiadeniyi055@gmail.com
      </Row>
      <Row>
        <Icon>
          <FaPhoneSquareAlt />
        </Icon>{" "}
        (+234) 813 708 4862
      </Row>
      <IconsContainer>
        <Icons>
          <a
            href="https://web.facebook.com/oluwatobi.adeniyi.967"
            target="_blank"
            rel="noopner noreferrer"
          >
            <FaFacebook />
          </a>
        </Icons>
        <Icons>
          <a
            href="https://twitter.com/tobi_deji99"
            target="_blank"
            rel="noopner noreferrer"
          >
            <BsTwitterX />
          </a>
        </Icons>
        <Icons>
          <a
            href="https://www.linkedin.com/in/oluwatobi-adedeji-adeniyi"
            target="_blank"
            rel="noopner noreferrer"
          >
            <FaLinkedin />
          </a>
        </Icons>
        <Icons>
          <a
            href="https://github.com/adeniyitobi055"
            target="_blank"
            rel="noopner noreferrer"
          >
            <FaGithub />
          </a>
        </Icons>
      </IconsContainer>
      <a href="/oluwatobi-Adeniyi-new.pdf" download="oluwatobi-Adeniyi-new.pdf">
        <Button type="submit" isActive>
          Download CV
        </Button>
      </a>
    </Container>
  );
}

export default MediaContact;
