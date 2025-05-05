import { easeInOut, easeOut, motion } from "framer-motion";
import styled from "styled-components";
import Header from "./Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

// Styled Components for Mobile Layout
const StyledMobileLayout = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: var(--color-grey-50);
`;

const MobileContainer = styled.div`
	flex-grow: 1;
	padding: 10.5rem 2.5rem 3.2rem;
	margin-top: 6rem;
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
	overflow-y: auto;
	scroll-behavior: smooth;

	@media screen and (max-width: 425px) {
		padding: 0.5rem 1.5rem 1.2rem;
	}
`;

const Section = styled(motion.div)`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 20px;
	box-sizing: border-box;
`;

export default function MobileLayout() {
	// Animation variants for sections
	const sectionVariant = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: easeInOut },
		},
	};

	return (
		<StyledMobileLayout>
			<Header />
			<MobileContainer>
				<Section
					id="home"
					variants={sectionVariant}
					initial="hidden"
					whileInView={"visible"}
					viewport={{ once: true, amount: 0.3 }}>
					<Home />
				</Section>
				<Section
					id="about"
					variants={sectionVariant}
					initial="hidden"
					whileInView={"visible"}
					viewport={{ once: true, amount: 0.3 }}>
					<About />
				</Section>
				<Section
					id="services"
					variants={sectionVariant}
					initial="hidden"
					whileInView={"visible"}
					viewport={{ once: true, amount: 0.3 }}>
					<Services />
				</Section>
				<Section
					id="portfolio"
					variants={sectionVariant}
					initial="hidden"
					whileInView={"visible"}
					viewport={{ once: true, amount: 0.3 }}>
					<Portfolio />
				</Section>
				<Section
					id="contact"
					variants={sectionVariant}
					initial="hidden"
					whileInView={"visible"}
					viewport={{ once: true, amount: 0.3 }}>
					<Contact />
				</Section>
			</MobileContainer>
		</StyledMobileLayout>
	);
}
