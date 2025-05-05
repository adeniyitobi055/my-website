import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Header from "./Header";

const StyledAppLayout = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: var(--color-grey-50);
`;

const Main = styled.main`
	flex-grow: 1;
	padding: ${({ isMobile }) =>
		isMobile ? "0.7rem 1rem 1.2rem" : "13rem 4.8rem 6.4rem"};
	margin-top: ${({ isMobile }) => (isMobile ? "6rem" : "7rem")};
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
	overflow-y: hidden;
	scroll-behavior: smooth;

	@media screen and (max-width: 1024px) and (min-width: 769px) {
		padding: 11rem 3.5rem 4.2rem;
		margin-top: 6rem;
	}
`;

const Section = styled(motion.section)`
	min-height: ${({ isMobile }) => (isMobile ? "100vh" : "auto")};
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 20px;
	box-sizing: border-box;

	@media screen and (min-width: 769px) {
		padding: 40px;
	}
`;

function AppLayout({ isMobile }) {
	const sectionVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	return (
		<StyledAppLayout>
			<Header />
			<Main isMobile={isMobile}>
				<Section
					id="home"
					isMobile={isMobile}
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}>
					<Home />
				</Section>
				<Section
					id="about"
					isMobile={isMobile}
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}>
					<About />
				</Section>
				<Section
					id="services"
					isMobile={isMobile}
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}>
					<Services />
				</Section>
				<Section
					id="portfolio"
					isMobile={isMobile}
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}>
					<Portfolio />
				</Section>
				<Section
					id="contact"
					isMobile={isMobile}
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}>
					<Contact />
				</Section>
			</Main>
		</StyledAppLayout>
	);
}

export default AppLayout;
