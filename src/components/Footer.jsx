import React from "react";
import { Stack, Typography, TextField, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import footer_img from "./../assets/images/footer_image.webp"; // Import the image
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();

  const pages = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "FAQs", path: "/faq" },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "Destination", path: "/destination" },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${footer_img})`, // Correctly reference the imported image URL
        backgroundSize: "cover", // Make the image cover the entire container
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent repeating the image
        padding: "40px 20px",
      }}
    >
      <Box
        sx={{
          color: "#74787C",
          padding: "40px 20px",
          width: { xs: "90%", sm: "80%" }, // 90% on mobile, 80% on larger screens
          margin: "10px auto", // Center the footer
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }} // Stack vertically on mobile and row on larger screens
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {/* Company Section */}
          <Box
            sx={{
              width: { xs: "100%", sm: "30%" }, // Full width on mobile, 30% on larger screens
              textAlign: "start",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "white" }} // Changed text color to white for contrast
            >
              Company
            </Typography>
            <Typography sx={{ marginTop: { xs: 2, sm: 5 }, color: "white" }}>
              At TechPros Solutions, we are about technology and dedicated to
              providing IT solutions for businesses of all sizes.
            </Typography>
          </Box>

          {/* Page Links Section */}
          <Box
            sx={{
              width: { xs: "100%", sm: "20%" }, // Full width on mobile, 20% on larger screens
              textAlign: "start",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "white" }} // Changed text color to white for contrast
            >
              Page Links
            </Typography>
            <Stack spacing={1} sx={{ marginTop: { xs: 2, sm: 5 } }}>
              {pages.map((page) => (
                <NavLink
                  key={page.id}
                  to={page.path}
                  style={({ isActive }) => ({
                    color: isActive ? "#60E5AD" : "white", // Active color
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "18px",
                    display: "inline-block", // Ensure the link only takes up space as needed
                    position: "relative", // Position relative for the ::after element
                  })}
                >
                  {({ isActive }) => (
                    <Box
                      sx={{
                        "&:hover": {
                          color: "#60E5AD", // Hover color
                        },
                      }}
                    >
                      {page.name}
                    </Box>
                  )}
                </NavLink>
              ))}
            </Stack>
          </Box>

          {/* Contact Us Section */}
          <Box
            sx={{
              width: { xs: "100%", sm: "20%" }, // Full width on mobile, 20% on larger screens
              textAlign: "start",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "white" }} // Changed text color to white for contrast
            >
              Contact Us
            </Typography>
            <Stack spacing={1} sx={{ marginTop: { xs: 2, sm: 5 } }}>
              <Typography color="white">Phone: +1 (234) 567-890</Typography>
              <Typography color="white">Email: contact@techpros.com</Typography>
            </Stack>
          </Box>

          {/* Subscribe Section */}
          <Box
            sx={{
              width: { xs: "100%", sm: "30%" }, // Full width on mobile, 30% on larger screens
              textAlign: "start",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "white" }} // Changed text color to white for contrast
            >
              Subscribe
            </Typography>
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              sx={{ marginTop: { xs: 2, sm: 5 }, backgroundColor: "#fff" }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.thirdonary.main, // Replace with theme.palette.thirdonary.main
                color: "white",
                "&:hover": {
                  backgroundColor: theme.palette.primary.main, //
                  transition: "background-color 0.3s ease",
                },
                padding: "10px 30px",
                borderRadius: "30px",
                marginTop: 2,
                width: "100%",
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
