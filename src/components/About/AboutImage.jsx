import styled from "styled-components";

const StyledUserIcon = styled.div`
  display: flex;
  gap: 1.2rem;
  font-weight: 500;
  align-items: center;
  font-size: 1.4rem;
  color: var(--color-grey-600);
  justify-content: flex-end;
  /* padding-top: 5rem; */
`;

const Image = styled.img`
  display: block;
  width: 35rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  /* outline: 2px solid var(--color-grey-100); */
  opacity: 0.9;
`;

function AboutImage() {
  return (
    <StyledUserIcon>
      <Image src="/profile-image-2.jpg" alt="Home image" />
    </StyledUserIcon>
  );
}

export default AboutImage;
