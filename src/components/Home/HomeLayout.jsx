import styled, { keyframes } from "styled-components";
import ImageContainer from "./ImageContainer";
import Description from "./Description";
import { FaArrowRightLong } from "react-icons/fa6";

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

const StyledHomeLayout = styled.div`
	background-color: var(--color-grey-50);
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	justify-content: center;
	margin: auto;
	max-width: 170rem;
	gap: 6rem;
	height: 100%;

	@media screen and (max-width: 425px) {
		flex-direction: column;
		justify-content: flex-start;
		gap: 3rem;
		padding: 0.5rem;
		max-width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 768px) and (min-width: 426px) {
		flex-direction: column;
		gap: 4rem;
		padding: 1rem;
		max-width: 100%;
		height: 100%;
	}
`;

const SwipeArrow = styled.div`
	position: fixed;
	bottom: 20px; /* Adjust based on your design */
	left: 40%;
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
`;

function HomeLayout() {
	return (
		<StyledHomeLayout>
			<ImageContainer />
			<Description />
			<SwipeArrow>
				<FaArrowRightLong />
				<span style={{ fontSize: "10px" }}>Swipe to the left</span>
			</SwipeArrow>
		</StyledHomeLayout>
	);
}

export default HomeLayout;
