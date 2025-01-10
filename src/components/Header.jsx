import React, { useState } from "react";
import {
  Stack,
  Toolbar,
  Container,
  Box,
  AppBar,
  Button,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, useNavigate } from "react-router-dom";
import companyLogo from "./../assets/images/company_logo.png";
import { useTheme } from "@mui/material/styles";

const pages = [
  { name: "Home", id: "home", path: "/" },
  { name: "FAQ", id: "faq", path: "/faq" },
  { name: "About", id: "about", path: "/about" },
  { name: "Destination", id: "destination", path: "/destination" },
];

const NavList = ({ vertical = false, onClose }) => {
  return (
    <Stack
      direction={vertical ? "column" : "row"}
      spacing={vertical ? 2 : 3}
      gap={1}
      sx={{
        justifyContent: vertical ? "flex-start" : "center",
        alignItems: vertical ? "flex-start" : "center",
        marginTop: vertical ? "20px" : "0",
      }}
    >
      {pages.map((page) => (
        <NavLink
          key={page.id}
          to={page.path}
          style={({ isActive }) => ({
            color: isActive ? "#60E5AD" : "black", // Active color
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "16px",
            position: "relative",
          })}
          onClick={onClose}
        >
          {({ isActive }) => (
            <Box
              sx={{
                "&:hover": {
                  color: "#60E5AD", // Hover color
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-5px",
                  left: 0,
                  width: isActive ? "100%" : "0%",
                  height: "2px",
                  backgroundColor: "#60E5AD", // Underline color
                  transition: "width 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%", // Expand underline on hover
                },
              }}
            >
              {page.name}
            </Box>
          )}
        </NavLink>
      ))}
    </Stack>
  );
};

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();

  const navigate = useNavigate();

  const onContactClick = () => {
    navigate("/contact_us");
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      sx={{
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid #e0e0e0",
        padding: { xs: "0", md: "0 20px" }, // No padding on mobile
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: { xs: "0", md: "0 20px" },
            width: { md: "90%", xs: "100%" }, // Adjust width for larger screens
            margin: { md: "0px auto", xs: "0" }, // Center only for large screens
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "60px",
            }}
          >
            <img
              src={companyLogo}
              alt="Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Hamburger Menu for Mobile */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              onClick={toggleDrawer(true)}
              edge="end"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Nav Links for Larger Screens */}
          <Stack
            direction="row"
            spacing={3}
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            <NavList />
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.thirdonary.main,
                color: "white",
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  transition: "background-color 0.3s ease",
                },
                padding: "10px 30px",
                fontWeight: 600,
                borderRadius: "30px",
              }}
              onClick={onContactClick}
            >
              Contact Us
            </Button>
          </Stack>

          {/* Drawer for Mobile */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              "& .MuiDrawer-paper": {
                width: "70%",
                padding: 2,
                display: "flex",
                flexDirection: "column",
              },
            }}
          >
            <Box>
              {/* Close Icon */}
              <IconButton
                onClick={toggleDrawer(false)}
                sx={{ alignSelf: "flex-end" }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Nav Links */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: 2,
              }}
            >
              <NavList vertical onClose={toggleDrawer(false)} />
            </Box>

            {/* Contact Us Button */}
            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1467B0", // Replace with theme.palette.thirdonary.main
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#60E5AD", // Replace with theme.palette.primary.main
                    transition: "background-color 0.3s ease",
                  },
                  padding: "10px 30px",
                  fontWeight: 600,
                  borderRadius: "30px",
                }}
                onClick={onContactClick}
              >
                Contact Us
              </Button>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
