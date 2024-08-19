import styled from "styled-components";
import MainNav from "./MainNav";
import DarkModeToggle from "./DarkModeToggle";
import UserAvatar from "./UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.5rem 5rem;
  border-radius: 1px solid var(--color-grey-100);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  /* grid-row: 1 / -1; */
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <MainNav />
      <DarkModeToggle />
    </StyledHeader>
  );
}

export default Header;
