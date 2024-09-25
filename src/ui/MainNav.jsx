import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiBars3, HiXMark } from "react-icons/hi2";

const HamburgerButton = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    font-size: 2rem;
    position: absolute;
    top: 2.2rem;
    right: 1rem;
    cursor: pointer;
  }
`;

const CloseButton = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    font-size: 2rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
    cursor: pointer;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;

  @media screen and (max-width: 768px) {
    /* display: ${({ isOpen }) => (isOpen ? "block" : "none")}; */
    position: fixed;
    top: 0;
    right: 0;
    width: 30%;
    height: 100vh;
    background-color: var(--color-grey-50);
    flex-direction: column;
    padding: 5rem 2.5rem;
    gap: 1.5rem;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;

    /* transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: transform 0.3s ease, opacity 0.3s ease; */

    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
  }

  @media screen and (max-width: 425px) and (min-width: 320px) {
    /* display: ${({ isOpen }) => (isOpen ? "block" : "none")}; */
    position: fixed;
    top: 0;
    right: 0;
    width: 60%;
    height: 100vh;
    background-color: var(--color-grey-50);
    flex-direction: column;
    padding: 5rem 2.5rem;
    gap: 1.5rem;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;

    /* transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: transform 0.3s ease, opacity 0.3s ease; */

    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <nav>
      <HamburgerButton onClick={toggleSidebar}>
        <HiBars3
          style={{ fontSize: "26px", color: "var(--color-brand-500)" }}
        />
      </HamburgerButton>

      <NavList isOpen={isOpen}>
        <CloseButton onClick={closeSidebar}>
          <HiXMark
            style={{ fontSize: "26px", color: "var(--color-brand-500)" }}
          />
        </CloseButton>
        <li>
          <StyledNavLink to="/home" onClick={() => setIsOpen(false)}>
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about" onClick={() => setIsOpen(false)}>
            <span>About</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/services" onClick={() => setIsOpen(false)}>
            <span>Services</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/portfolio" onClick={() => setIsOpen(false)}>
            <span>Portfolio</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact" onClick={() => setIsOpen(false)}>
            <span>Contact</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
