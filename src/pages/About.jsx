import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import AboutHeroImage from "./../assets/images/about_us.jpg"; // Replace with actual image path
import LeadershipSection from "../components/LeaderSection";
import { useTheme } from "@mui/material/styles";

const AboutUs = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: "20px 0", marginTop: { xs: "15vh", md: "12vh" },marginBottom:"20px" }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: "90%",
          height: "70vh",
          margin: "0 auto",
          position: "relative",
          overflow: "hidden", // Ensures the content doesn't overflow
          borderRadius: "8px", // Rounded corners for the image
          boxShadow: 3, // Optional: gives some shadow effect to the image
        }}
      >
        <img
          src={AboutHeroImage} // Replace with your image URL
          alt="Hero Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the image covers the full area
            borderRadius: "8px", // Rounded corners on the image itself
          }}
        />

        {/* Text Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white", // White text on top of the image
            width: "70%",
            padding: "0 20px", // Prevents text from touching the sides
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            About Us
          </Typography>
          <Typography variant="body1">
            We are a team of passionate individuals committed to providing
            excellent service and creating lasting value for our clients. Our
            mission is to innovate, inspire, and deliver exceptional results.
          </Typography>
        </Box>
      </Box>

      {/* Other Content */}
      <Stack
        spacing={3}
        sx={{
          marginTop: 5,
          marginLeft: "auto",
          marginRight: "auto",
          width: { md: "60%", sm: "90%" },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
        >
          Our Journey
        </Typography>
        <Typography>
          Routematic was founded in 2013 with a vision to revolutionize employee
          transportation. Our mission is to provide the most efficient and
          sustainable commute solutions for companies around the world. Our
          journey is going strong, serving in 21 cities for 200+ corporations
          with innovative technology and a comprehensive transport management
          system. We ensure a hassle-free travel experience for employees,
          enhancing productivity and work-life balance.
        </Typography>
        <Typography style={{ marginTop: "10px" }}>
          As a part of Nivaata Systems Pvt. Ltd., Routematic is committed to
          pioneering advancements in corporate commutes. COCO Rides, an
          initiative of Routematic, further exemplifies our dedication to
          offering reliable and convenient transportation solutions tailored to
          meet the evolving needs of today’s workforce.
        </Typography>
      </Stack>

      <Stack style={{ marginTop: "30px" }}>
        <LeadershipSection />
      </Stack>

      <Stack
        spacing={3}
        sx={{
          marginTop: 5,
          marginLeft: "auto",
          marginRight: "auto",
          width: { md: "60%", sm: "90%" },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
        >
          Awards & Recognition
        </Typography>
        <Typography>
          Our expertise in these domains gives us an edge to redesign the
          complete transport function of an organization by improving the
          quality of service and reducing the cost at the same time.
          Routematic’s strong focus on continuous innovation is reflected in the
          6 technology patents and 1 design patent which are part of Routematic.
        </Typography>
      </Stack>
    </Box>
  );
};

export default AboutUs;
