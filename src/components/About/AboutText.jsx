import styled from "styled-components";
import Tabs from "./Tabs";

const StyledAboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: flex-start;
`;

const Text = styled.p`
  text-align: justify;
  max-width: 900px;
  color: var(--color-grey-600);

  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 100%;
    word-break: break-word;
    white-space: normal;
    font-size: 14px;
    max-width: 100%;
    margin: auto;
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    width: 100%;
    word-break: break-word;
    white-space: normal;
    font-size: 15px;
    max-width: 100%;
    margin: auto;
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    width: 100%;
    word-break: break-word;
    white-space: normal;
    font-size: 16px;
    max-width: 850px;
    margin: auto;
  }
`;

function AboutText() {
  return (
    <StyledAboutText>
      <Text>
        I'm a passionate software engineer with a solid background in
        JavaScript, React, Node, MySQL and other third party libraries such as
        React query, Taillwindcss and even back-end hosting services like
        supabase used to enhance performance.
        <br />
        <br />
        My experience spans across various industries, from finance, academics
        and management systems e.g Library Managament Sysytem, Hotel Management
        System. I'm committed to continuous learning and keep up with the latest
        industry trends to ensure that the solutions I develop are not only
        effective but also future-proof.
      </Text>
      <Tabs />
    </StyledAboutText>
  );
}

export default AboutText;
