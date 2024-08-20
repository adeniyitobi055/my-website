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
`;

function AboutText() {
  return (
    <StyledAboutText>
      <Text>
        I'm a passionate software engineer with a solid background in
        JavaScript, React, Node, MySQL and other third party libraries such as
        React query, Taillwindcss and even back-end hosting services like
        supabase used to enhance performance. Over the years, I've honed my
        skills in developing scalable and efficient solutions, focusing on both
        front-end and back-end development. I thrive intackling complex
        challenges and delivering high-quality software that meets users needs.
        <br />
        <br />
        My experience spans across various industries, from finance, academics
        and management systems e.g Library Managament Sysytem, Hotel Management
        System where I've contributed to building responsive web applications,
        implementing and consuming APIs.
        <br />
        <br />
        I'm committed to continuous learning and keep up with the latest
        industry trends to ensure that the solutions I develop are not only
        effective but also future-proof. Beyong coding, I enjoy collaborating
        with croos-functional teams, mentoring upcoming developers and driving
        projects from concept to completion.
      </Text>
      <Tabs />
    </StyledAboutText>
  );
}

export default AboutText;
