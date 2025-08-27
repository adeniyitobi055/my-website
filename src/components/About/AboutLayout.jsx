import styled from "styled-components";
import AboutText from "./AboutText";
import StyledHeading from "../../ui/StyledHeading";

const Main = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	height: 100vh;
	max-width: 170rem;

	@media screen and (max-width: 425px) {
		height: 100vh;
	}

	@media screen and (max-width: 768px) and (min-width: 426px) {
		height: 100vh;
	}
`;

const StyledAboutLayout = styled.div`
	background-color: var(--color-grey-50);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: auto;
	gap: 2rem;
	height: 100%;

	@media screen and (max-width: 425px) {
		flex-direction: column;
		gap: 3rem;
		max-width: 100%;
		height: 100%;
		max-width: 100%;
	}

	@media screen and (max-width: 768px) and (min-width: 426px) {
		flex-direction: column;
		gap: 4rem;
		max-width: 100%;
		height: 100%;
	}
`;

function AboutLayout() {
	return (
		<Main>
			<StyledHeading>About me</StyledHeading>
			<StyledAboutLayout>
				{/* <AboutImage /> */}
				<AboutText />
			</StyledAboutLayout>
		</Main>
	);
}

export default AboutLayout;
