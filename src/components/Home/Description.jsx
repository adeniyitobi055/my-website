import styled from "styled-components";

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* margin-top: 2rem; */
`;

const P = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-grey-500);
  padding-bottom: 20px;
  font-weight: 500;
`;

const HeadingText = styled.p`
  font-size: 17px;
  letter-spacing: 1px;
  text-align: left;
  max-width: 700px;
  color: var(--color-grey-600);
  padding: 20px 0;
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
