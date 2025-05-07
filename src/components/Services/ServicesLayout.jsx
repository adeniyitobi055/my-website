import styled from "styled-components";
import StyledHeading from "../../ui/StyledHeading";
import ServiceCard from "../../ui/ServiceCard";
import { FaDatabase, FaReact } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";

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

	@media screen and (min-width: 1440px) {
		max-width: 100rem;
	}
`;

const StyledServiceContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
	grid-template-rows: repeat(2, auto);
	grid-gap: 30px;
	margin: 50px auto;
	width: 110rem;
	max-width: 1200px;
	justify-content: center;
	align-items: center;
	height: 100%;

	/* & > *:nth-child(3) {
		grid-column: 1 / -1;
		justify-content: center;
		width: 50%;
	} */

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
						title="Front-End Development with React"
						description=" Build highly interactive, dynamic web applications using the React JavaScript library. Implement efficient user interfaces for complex, data-driven experiences while maintaining seamless user interaction."
						link="https://github.com/adeniyitobi055/oasis-library"
						linkText="Learn More"
					/>
					<ServiceCard
						icon={<SiNestjs />}
						title={"Back-End Development with Nest"}
						description={
							"Develop scalable, high-performance server-side applications using Nest.js. Handle asynchronous operations, build APIs, and manage data with minimal overhead, ensuring real-time performance for web applications."
						}
						linkText={"Learn More"}
						link={"https://github.com/adeniyitobi055/school_management"}
					/>
					<ServiceCard
						icon={<MdOutlineSecurity />}
						title={"Authentication & Authorization Systems"}
						description={
							"Implement secure user authentication and role-based access control (RBAC) using JWT, or session-based strategies in full-stack applications. Ensure data protection and secure user management."
						}
						linkText={"Learn More"}
						link={"https://github.com/adeniyitobi055/school_management"}
					/>
					<ServiceCard
						icon={<FaDatabase />}
						title={"Database Design & Optimization with MySQL"}
						description={
							"Design efficient relational database schemas using MySQL. Implement query optimization, indexing, and migration strategies to ensure fast, reliable, and scalable data operations."
						}
						linkText={"Learn More"}
						link={"https://github.com/adeniyitobi055/school_management"}
					/>
				</StyledServiceContainer>
			</StyledServicesLayout>
		</Main>
	);
}

export default ServicesLayout;
