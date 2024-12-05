import { useState } from "react";

export const useSwipeNavigation = () => {
	const [translateY, setTranslateY] = useState(0);

	const handleSwipe = (deltaY) => {
		setTranslateY((prev) => prev + deltaY);
	};

	const swipeHandlers = {
		onTouchStart: (e) => {
			// Capture initial touch position
			const startY = e.touches[0].clientY;
			e.target.dataset.startY = startY;
		},
		onTouchMove: (e) => {
			// Calculate swipe distance
			const startY = parseFloat(e.target.dataset.startY || 0);
			const deltaY = e.touches[0].clientY - startY;

			if (Math.abs(deltaY) > 50) {
				handleSwipe(deltaY > 0 ? -100 : 100); // Swipe up/down
			}
		},
		onTouchEnd: () => {
			// Optionally snap to the nearest section
		},
	};

	return { swipeHandlers, translateY };
};

/* import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { useSwipeable } from "react-swipeable";
  
  export const useSwipeNavigation = () => {
    const navigate = useNavigate();
    const [scale, setScale] = useState(1);
    const [translateY, setTranslateY] = useState(0);
    const [isNavigating, setIsNavigating] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);
  
    const handleScroll = () => {
      const threshold = 5;
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - threshold;
      setIsAtBottom(isBottom);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const swipeHandlers = useSwipeable({
      onSwipedUp: (e) => {
        e.preventDefault();
        if (!isNavigating && isAtBottom) {
          setScale(0.5);
          setTranslateY(-window.innerHeight);
          setIsNavigating(true);
          setTimeout(() => {
            navigateNext();
            resetScale();
          }, 300);
        }
      },
      onSwipedDown: (e) => {
        e.preventDefault();
        if (!isNavigating && isAtBottom) {
          setScale(0.5);
          setTranslateY(window.innerHeight);
          setIsNavigating(true);
          setTimeout(() => {
            navigatePrevious();
            resetScale();
          }, 300);
        }
      },
      preventScrollOnSwipe: true,
      delta: 10,
    });
  
    const navigateNext = () => {
      const currentScrollY = window.scrollY;
      if (window.location.pathname === "/home") navigate("/about");
      else if (window.location.pathname === "/about") navigate("/services");
      else if (window.location.pathname === "/services") navigate("/portfolio");
      else if (window.location.pathname === "/portfolio") navigate("/contact");
      window.scrollTo(0, currentScrollY);
    };
  
    const navigatePrevious = () => {
      const currentScrollY = window.scrollY;
      if (window.location.pathname === "/contact") navigate("/portfolio");
      else if (window.location.pathname === "/portfolio") navigate("/services");
      else if (window.location.pathname === "/services") navigate("/about");
      else if (window.location.pathname === "/about") navigate("/home");
      window.scrollTo(0, currentScrollY);
    };
  
    const resetScale = () => {
      setScale(1);
      setTranslateY(0);
      setIsNavigating(false);
    };
  
    return { swipeHandlers, scale, translateY };
  }; */
