import styled, { keyframes } from "styled-components";
import StyledHeading from "../../ui/StyledHeading";
import ContactForm from "./ContactForm";
import MediaContact from "./MediaContact";
import { FaArrowLeftLong } from "react-icons/fa6";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const Main = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6rem;
	overflow: hidden;
	width: 100%;
	height: 100%;
`;

const StyledContactLayout = styled.div`
	background: var(--color-grey-50);
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	margin: auto;
	max-width: 120rem;
	padding: 0 2rem;
	gap: 6rem;
	height: 100%;

	@media screen and (max-width: 768px) and (min-width: 320px) {
		flex-direction: column;
		max-width: 100%;
		width: 100%;
		padding: 0;
		gap: 3rem;
		height: 100%;
	}

	@media screen and (max-width: 1024px) and (min-width: 769px) {
		flex-direction: row;
		max-width: 100%;
		width: 100%;
		/* padding: 0; */
		gap: 6rem;
		height: 100%;
	}
`;

const SwipeArrow = styled.div`
	// position: fixed;
	bottom: 20px; /* Adjust based on your design */
	margin: 0 auto;
	transform: translateX(-50%);
	font-size: 2rem;
	animation: ${bounce} 2s infinite;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	/* Add an icon or custom arrow styles */
	svg {
		font-size: 2rem;
	}

	/* Media query for tablets and phones */
	@media screen and (max-width: 768px) {
		display: flex; /* Ensure the arrow is visible */
	}

	/* Media query for larger screens (desktops) */
	@media screen and (min-width: 1024px) {
		display: none; /* Hide the arrow on desktop screens */
	}
`;

function ContactLayout() {
	return (
		<Main>
			<StyledHeading>Contact Me</StyledHeading>
			<StyledContactLayout>
				<MediaContact />
				<ContactForm />
				<SwipeArrow>
					<FaArrowLeftLong />
					<span style={{ fontSize: "10px" }}>Swipe to the right</span>
				</SwipeArrow>
			</StyledContactLayout>
		</Main>
	);
}

export default ContactLayout;
