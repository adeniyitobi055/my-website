import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
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

		transform: ${({ isOpen }) =>
			isOpen ? "translateX(0)" : "translateX(100%)"};
		opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
		visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
		transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
	}

	@media screen and (max-width: 425px) {
		width: 60%;
	}
`;

const ScrollButton = styled.button`
	display: flex;
	align-items: center;
	gap: 1.2rem;
	color: var(--color-grey-700);
	font-size: 1.6rem;
	padding: 1.2rem 2.4rem;
	background: none;
	border: none;
	cursor: pointer;
	transition: all 0.3s;

	&.active {
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

	&.active svg {
		color: var(--color-brand-600);
	}
`;

function MainNav() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	const toggleSidebar = () => setIsOpen(!isOpen);
	const closeSidebar = () => setIsOpen(false);

	const scrollToSection = (id) => {
		document.getElementById(id).scrollIntoView({ behavior: "smooth" });
		setActiveSection(id);
		if (isMobile) closeSidebar();
	};

	// Highlight active section based on scroll position
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.5 }
		);

		const sections = document.querySelectorAll("section");
		sections.forEach((section) => observer.observe(section));

		return () => sections.forEach((section) => observer.unobserve(section));
	}, []);

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
					<ScrollButton
						onClick={() => scrollToSection("home")}
						className={activeSection === "home" ? "active" : ""}>
						<span>Home</span>
					</ScrollButton>
				</li>
				<li>
					<ScrollButton
						onClick={() => scrollToSection("about")}
						className={activeSection === "about" ? "active" : ""}>
						<span>About</span>
					</ScrollButton>
				</li>
				<li>
					<ScrollButton
						onClick={() => scrollToSection("services")}
						className={activeSection === "services" ? "active" : ""}>
						<span>Services</span>
					</ScrollButton>
				</li>
				<li>
					<ScrollButton
						onClick={() => scrollToSection("portfolio")}
						className={activeSection === "portfolio" ? "active" : ""}>
						<span>Portfolio</span>
					</ScrollButton>
				</li>
				<li>
					<ScrollButton
						onClick={() => scrollToSection("contact")}
						className={activeSection === "contact" ? "active" : ""}>
						<span>Contact</span>
					</ScrollButton>
				</li>
			</NavList>
		</nav>
	);
}

export default MainNav;
