import styled from "styled-components";

const StyledUserIcon = styled.div`
  display: flex;
  gap: 1.2rem;
  font-weight: 500;
  align-items: center;
  font-size: 1.4rem;
  color: var(--color-grey-600);
  margin-right: auto;
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  return (
    <StyledUserIcon>
      <Avatar src="/avatar-image.jpg" alt="Avatar image" />
      <span>Oluwatobi Adeniyi</span>
    </StyledUserIcon>
  );
}

export default UserAvatar;
