import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Destination from "./pages/Destination";
import ContactUs from "./pages/ContactUs";
import Faqs from "./pages/Faqs";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
// import 'react-alice-carousel/lib/alice-carousel.css';
import "react-multi-carousel/lib/styles.css";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      {/* <Box sx={{ marginTop: { xs: "15vh", md: "12vh" } }}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/contact_us" element={<ContactUs />} />
      </Routes>
      {/* </Box> */}
      <Box sx={{marginBottom: "2vh" }}>
      <Footer />
      <CopyRight />
      </Box>
      <ScrollToTopButton />
    </Router>
  );
};

export default App;
