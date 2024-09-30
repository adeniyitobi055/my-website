import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

export const useSwipeNavigation = () => {
  const navigate = useNavigate();

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (window.location.pathname === "/home") navigate("/about");
      else if (window.location.pathname === "/about") navigate("/services");
      else if (window.location.pathname === "/services") navigate("/portfolio");
      else if (window.location.pathname === "/portfolio") navigate("/contact");
    },
    onSwipedRight: () => {
      if (window.location.pathname === "/contact") navigate("/portfolio");
      else if (window.location.pathname === "/portfolio") navigate("/services");
      else if (window.location.pathname === "/services") navigate("/about");
      else if (window.location.pathname === "/about") navigate("/home");
    },
    preventScrollOnSwipe: true,
    delta: 10,
  });

  return swipeHandlers;
};
