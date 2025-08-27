import styled from "styled-components";

const StyledDescription = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	/* margin-top: 2rem; */

	@media screen and (max-width: 425px) {
		gap: 2.5px;
	}
`;

const P = styled.p`
	font-size: 20px;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: var(--color-grey-700);
	padding-bottom: 20px;
	font-weight: 500;

	@media screen and (max-width: 425px) {
		font-size: 18px;
		padding-bottom: 10px;
		font-weight: 400;
		text-align: left;
	}
`;

const HeadingText = styled.p`
	font-size: 17px;
	letter-spacing: 0.5px;
	text-align: left;
	max-width: 700px;
	color: var(--color-grey-700);
	padding: 20px 0;
	font-weight: 500;

	@media screen and (max-width: 425px) {
		font-size: 14px;
		max-width: 500px;
		padding: 15px 0;
		text-align: justify;
		letter-spacing: normal;
	}

	@media screen and (max-width: 768px) and (min-width: 426px) {
		font-size: 14px;
	}

	@media screen and (max-width: 1024px) and (min-width: 769px) {
		font-size: 15px;
	}
`;

const Text = styled.p`
	font-size: 40px;
	color: var(--color-grey-800);
	font-weight: 500;
	letter-spacing: 0.8px;
	/* max-width: 600px; */
	text-align: left;
	/* text-transform: uppercase; */

	& span {
		color: var(--color-brand-600);
		font-weight: 600;
	}

	@media screen and (max-width: 425px) {
		font-size: 22px;
		font-weight: 500;
		text-align: left;
	}

	@media screen and (max-width: 768px) and (min-width: 426px) {
		font-size: 28px;
	}

	@media screen and (max-width: 1024px) and (min-width: 769px) {
		font-size: 32px;
	}
`;

function Description() {
	return (
		<StyledDescription>
			<P>Explore my space</P>
			<Text as={"h1"}>
				Hi, I'm <span>Oluwatobi Adeniyi</span>
			</Text>
			<Text>a Software Engineer</Text>
			<HeadingText>
				Driven by excellence and efficiency, I develop applications that fulfill
				user requirements and endure the challenges of time.
			</HeadingText>
		</StyledDescription>
	);
}

export default Description;
