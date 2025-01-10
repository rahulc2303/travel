import React from "react";
import { Stack, Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import heroImage from "./../assets/images/Hero-Bg.webp"; // Replace with actual image path
import { useNavigate } from "react-router-dom";
import CompanyListScroll from "../components/CompanyListScroll";


const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const onContactClick = () => {
    navigate("/contact_us");
  };

  return (
    <Stack sx={{ marginTop: { xs: "15vh", md: "12vh" },marginBottom:"20px" }}>
      <Stack
        sx={{
          width: { xs: "90%", md: "90%" }, // 100% on mobile, 80% on desktop
          height: "70vh", // 70vh for the height of the hero section
          margin: "0 auto", // Center on the screen
          position: "relative", // For absolute positioning of text
          justifyContent: "center", // Vertically center content
          alignItems: "center", // Horizontally center content
          borderRadius: { xs: "20px", md: "50px" }, // Border radius 20px on mobile, 50px on larger screens
          overflow: "hidden", // Ensure the image follows the border radius
        }}
      >
        {/* Hero Image */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${heroImage})`, // Hero Image
            backgroundSize: "cover", // Make the image cover the container
            backgroundPosition: "center",
            position: "absolute", // To place content on top of the image
            top: 0,
            left: 0,
            borderRadius: { xs: "20px", md: "50px" }, // Apply border radius to the image itself
          }}
        />

        {/* Title and Description */}
        <Box
          sx={{
            position: "absolute",
            top: { md: "unset", xs: "30px" }, // Position title at the top in mobile view
            bottom: { md: "30px", xs: "30px" }, // Adjust position for mobile view
            left: { md: "120px", xs: "20px" }, // Left alignment
            color: "white", // Text color for visibility on image
            maxWidth: "500px", // Optional: Restrict width of text
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "30px", sm: "40px" },
              color: "white",
            }}
          >
            Your Hero Title
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "14px", sm: "18px" },
              color: "white",
              marginTop: "10px",
            }}
          >
            A short description about the content or service. Explain what your
            business or website is about here.
          </Typography>
        </Box>

        {/* Contact Button */}
        <Box
          sx={{
            position: "absolute",
            top: { md: "unset", xs: "unset" }, // Position title at the top in mobile view
            bottom: { md: "30px", xs: "30px" }, // Adjust position for mobile view
            right: { md: "120px", xs: "20px" },
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white", // Initial background color
              color: "black", // Initial text color
              padding: "10px 20px",
              fontWeight: "600",
              borderRadius: "30px",
              "&:hover": {
                backgroundColor: theme.palette.primary.main, // Hover background color
                color: "white", // Hover text color
              },
            }}
            onClick={onContactClick}
          >
            Contact Us
          </Button>
        </Box>
      </Stack>

      <Stack>
        <CompanyListScroll/>
      </Stack>

      <Stack>
        <Stack
          spacing={3}
          sx={{
            marginTop: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: { md: "60%", sm: "90%" },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
          >
            Most Popular Tours
          </Typography>
          <Typography sx={{ color: "grey" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            sollicitudin, tellus vitae condimentum egestas, libero dolor auctor
            tellus, eu consectetur neque elit quis nunc. Cras elementum pretium.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
