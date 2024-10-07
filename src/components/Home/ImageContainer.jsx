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

  @media screen and (max-width: 425px)  {
    gap: 0.7rem;
    font-weight: 400;
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    gap: 1rem;
    font-weight: 400;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    font-size: 2rem;
  }
`;

const Image = styled.img`
  display: block;
  width: 50rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  /* outline: 2px solid var(--color-grey-100); */
  opacity: 0.9;

  @media screen and (max-width: 425px)  {
    width: 20rem;
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    width: 30rem;
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    width: 40rem;
  }
`;

function ImageContainer() {
  return (
    <StyledUserIcon>
      <Image src="/background-copy.png" alt="Home image" />
    </StyledUserIcon>
  );
}

export default ImageContainer;
