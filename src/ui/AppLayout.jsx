import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import { useSwipeable } from "react-swipeable";
import { useEffect, useRef } from "react";
// import { useSwipeNavigation } from "../hooks/useSwipeNavigation";

const StyledAppLayout = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	height: 100%;
	background-color: var(--color-grey-50);
`;

const Main = styled.main`
	background-color: var(--color-grey-50);
	padding: 13rem 4.8rem 6.4rem;
	overflow: auto;
	flex-grow: 1;
	margin-top: 7rem;

	@media screen and (max-width: 425px) {
		padding: 10.5rem 2.5rem 3.2rem;
		margin-top: 6rem;
	}

	@media screen and (max-width: 1024px) and (min-width: 769px) {
		padding: 11rem 3.5rem 4.2rem;
		margin-top: 6rem;
	}
`;

const Container = styled.div`
	max-width: 100%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
	overflow-y: auto;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;

	& > * {
		scroll-snap-align: start;
		flex: 0 0 100%;
	}

	// @media screen and (min-width: 1025px) {
	// 	flex-direction: row; /* Horizontal layout for larger screens */
	// 	overflow-y: hidden;
	// 	overflow-x: auto; /* Enable horizontal scrolling */
	// 	scroll-snap-type: x mandatory; /* Snap horizontally */
	// }

	transition: transform 0.3s ease-in-out, scale 0.3s ease-in-out;
	// transform: translateY(${({ translateY }) => translateY}px);
`;

const pages = ["home", "about", "services", "portfolio", "contact"]; // Define page order for navigation

function AppLayout() {
	const navigate = useNavigate();
	const location = useLocation();
	const containerRef = useRef(null);

	const currentIndex = pages.indexOf(location.pathname.replace("/", ""));

	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => {
			const container = containerRef.current;
			/* if (container) {
				console.log("OnSwipedUp:", {
					scrollTop: container.scrollTop,
					clientHeight: container.clientHeight,
					scrollHeight: container.scrollHeight,
				});
			} */
			if (
				container &&
				container.scrollTop + container.clientHeight >= container.scrollHeight
			) {
				// At the bottom of the page, navigate to the next page
				if (currentIndex < pages.length - 1) {
					navigate(`/${pages[currentIndex + 1]}`);
				}
			}
		},
		onSwipedRight: () => {
			const container = containerRef.current;
			/* if (container) {
				console.log("OnSwipedDown:", {
					scrollTop: container.scrollTop,
					clientHeight: container.clientHeight,
					scrollHeight: container.scrollHeight,
				});
			} */
			if (container && container.scrollTop <= 0) {
				// At the top of the page, navigate to the previous page
				if (currentIndex > 0) {
					navigate(`/${pages[currentIndex - 1]}`);
				}
			}
		},
		preventScrollOnSwipe: true,
		delta: 50, //Minimum swipe distance
	});

	useEffect(() => {
		const container = containerRef.current;
		if (container) {
			container.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [location.pathname]);

	return (
		<StyledAppLayout {...swipeHandlers}>
			<Header />
			<Main>
				<Container ref={containerRef}>
					<Outlet />
				</Container>
			</Main>
		</StyledAppLayout>
	);
}

export default AppLayout;
