import React, { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scroll position is more than 100px, show the button
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <Zoom in={visible}>
      <Fab
        onClick={scrollToTop}
        color="primary"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        <ArrowUpwardIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopButton;
