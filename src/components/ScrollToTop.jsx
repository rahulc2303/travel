import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  console.log("location =--->", location);
  useEffect(() => {
    // Scroll to the top of the page with smooth behavior every time the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    console.log("YES");
  }, [location]);

  return null;
};

export default ScrollToTop;
