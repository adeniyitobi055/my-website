import styled from "styled-components";

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* margin-top: 2rem; */

  @media screen and (max-width: 425px) and (min-width: 320px) {
    gap: 2.5px;
  }
`;

const P = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-grey-500);
  padding-bottom: 20px;
  font-weight: 500;

  @media screen and (max-width: 425px) and (min-width: 320px) {
    font-size: 18px;
    padding-bottom: 10px;
    font-weight: 400;
    text-align: left;
  }
`;

const HeadingText = styled.p`
  font-size: 17px;
  letter-spacing: 1px;
  text-align: left;
  max-width: 700px;
  color: var(--color-grey-600);
  padding: 20px 0;

  @media screen and (max-width: 425px) and (min-width: 320px) {
    font-size: 13px;
    max-width: 500px;
    padding: 15px 0;
    text-align: justify;
    letter-spacing: normal;
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    font-size: 14px;
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    font-size: 15px;
  }
`;

const Text = styled.p`
  font-size: 40px;
  color: var(--color-grey-600);
  font-weight: 500;
  letter-spacing: 0.8px;
  /* max-width: 600px; */
  text-align: left;
  /* text-transform: uppercase; */

  & span {
    color: var(--color-red-700);
  }

  @media screen and (max-width: 425px) and (min-width: 320px) {
    font-size: 19px;
    font-weight: 500;
    text-align: left;
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    font-size: 28px;
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    font-size: 32px;
  }
`;

function Description() {
  return (
    <StyledDescription>
      <P>welcome to my world</P>
      <Text>
        Hi, I'm <span>Oluwatobi Adeniyi</span>
      </Text>
      <Text>a Developer</Text>
      <HeadingText>
        With a committment to quality and performance, I design and build
        applications that not only meet the needs of the user but stands the
        test of time.
      </HeadingText>
    </StyledDescription>
  );
}

export default Description;
