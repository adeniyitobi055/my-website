import styled from "styled-components";
import Tabs from "./Tabs";

const StyledAboutText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	justify-content: center;
	align-items: flex-start;
	color: var(--color-grey-700);
`;

const Text = styled.p`
	text-align: justify;
	max-width: 1200px;
	/* color: var(--color-grey-600); */

	@media screen and (max-width: 425px) {
		width: 100%;
		word-break: break-word;
		white-space: normal;
		font-size: 14px;
		max-width: 100%;
		margin: auto;
	}

	@media screen and (max-width: 768px) and (min-width: 426px) {
		width: 100%;
		word-break: break-word;
		white-space: normal;
		font-size: 15px;
		max-width: 100%;
		margin: auto;
	}

	@media screen and (max-width: 1024px) and (min-width: 769px) {
		width: 100%;
		word-break: break-word;
		white-space: normal;
		font-size: 16px;
		max-width: 850px;
		margin: auto;
	}
`;

function AboutText() {
	return (
		<StyledAboutText>
			<Text>
				With a keen eye for detail and a solid foundation from Holberton School,
				I craft responsive, intuitive software solutions using React.js,
				TypeScript, Nest.js | Node.js, MySQL, and more. My approach combines
				technical precision with a user-focused mindset—refining experiences
				that not only work well but feel right.
				<br />
				<br />
				At Euro Scholars Poland, I empowered students to navigate the tech
				landscape, helping build systems that impact Africa with accuracy and
				relevance. Passionate about continuous learning and collaboration, I
				bring integrity, empathy, and clarity into every team and product I work
				with.
				<br />
				<br />
				Based in Nigeria and open to remote opportunities, I also enjoy
				mentoring young developers and exploring how design and development
				shape human experience.
			</Text>
			<Tabs />
		</StyledAboutText>
	);
}

export default AboutText;
