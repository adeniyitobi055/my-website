import styled from "styled-components";
import StyledHeading from "../../ui/StyledHeading";
import ServiceCard from "../../ui/ServiceCard";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";

const Main = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	overflow: hidden;
	height: 100%;
`;

const StyledServicesLayout = styled.div`
	background: var(--color-grey-50);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: auto;
	max-width: 120rem;
	padding: 0 2rem;
	gap: 2rem;
	height: 100%;

	@media screen and (max-width: 425px) {
		flex-direction: column;
	}
`;

const StyledServiceContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
	grid-template-rows: repeat(2, auto);
	grid-gap: 30px;
	margin: 50px auto;
	width: 120rem;
	max-width: 1200px;
	justify-content: center;
	align-items: center;
	height: 100%;

	& > *:nth-child(3) {
		grid-column: 1 / -1;
		justify-content: center;
		width: 50%;
	}

	@media screen and (max-width: 425px) {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin: 20px 0;
	}

	@media screen and (max-width: 768px) and (min-width: 426px) {
		width: 100%;
		display: flex;
		flex-direction: row;
		margin: 25px auto;
	}

	@media screen and (max-width: 1024px) and (min-width: 769px) {
		display: flex;
		flex-direction: row;
		width: 100%;
	}
`;

function ServicesLayout() {
	return (
		<Main>
			<StyledHeading>My Services</StyledHeading>
			<StyledServicesLayout>
				<StyledServiceContainer>
					<ServiceCard
						icon={<FaReact />}
						title="Front-End Development with ReactJS"
						description=" Build highly interactive, dynamic web applications using the React JavaScript library. Implement efficient user interfaces for complex, data-driven experiences while maintaining seamless user interaction."
						link="https://github.com/adeniyitobi055/oasis-library"
						linkText="Learn More"
					/>
					<ServiceCard
						icon={<SiNestjs />}
						title={"Back-End Development with NestJS"}
						description={
							"Develop scalable, high-performance server-side applications using NestJS. Handle asynchronous operations, build APIs, and manage data with minimal overhead, ensuring real-time performance for web applications."
						}
						linkText={"Learn More"}
						link={"https://github.com/adeniyitobi055/school_management"}
					/>
					<ServiceCard
						icon={<FaNodeJs />}
						title="Integrating NodeJS with ReactJS"
						description="Seamlessly integrated Node.js with React.js to build a scalable, high-performance web application focused on delivering an exceptional user experience."
						linkText="Learn More"
						link="https://github.com/adeniyitobi055/the-wild-oasis"
					/>
				</StyledServiceContainer>
			</StyledServicesLayout>
		</Main>
	);
}

export default ServicesLayout;
