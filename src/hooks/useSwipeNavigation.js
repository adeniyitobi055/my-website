import { useEffect, useState } from "react";
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
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 5;
    setIsAtBottom(isBottom);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => {
      if (!isNavigating) {
        setScale(0.5);
        setTranslateY(-window.innerHeight);
        setIsNavigating(true);
        setTimeout(() => {
          navigateNext();
          resetScale();
        }, 300);
      }
    },
    onSwipedDown: () => {
      if (!isNavigating) {
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
    if (window.location.pathname === "/home") navigate("/about");
    else if (window.location.pathname === "/about") navigate("/services");
    else if (window.location.pathname === "/services") navigate("/portfolio");
    else if (window.location.pathname === "/portfolio") navigate("/contact");
  };

  const navigatePrevious = () => {
    if (window.location.pathname === "/contact") navigate("/portfolio");
    else if (window.location.pathname === "/portfolio") navigate("/services");
    else if (window.location.pathname === "/services") navigate("/about");
    else if (window.location.pathname === "/about") navigate("/home");
  };

  const resetScale = () => {
    setScale(1);
    setTranslateY(0);
    setIsNavigating(false);
  };

  return { swipeHandlers, scale, translateY };
};
