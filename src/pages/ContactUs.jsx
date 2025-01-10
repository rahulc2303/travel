import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactUs = () => {
  return (
    <Box
      sx={{
        padding: "20px 0 0px",
        marginTop: { xs: "15vh", md: "12vh" }, marginBottom: "20px"
      }}
    >
      <Box
        sx={{
          width: { md: "60%", sm: "90%" },
          margin: "0 auto", // Center the content
          backgroundColor: "#f0f0f0",
          padding: "40px 20px",
          borderRadius: "8px", // Rounded corners
        }}
      >
        {/* Title Section */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Contact Us
        </Typography>

        {/* Form Section */}
        <Stack spacing={3} style={{ marginTop: "50px" }}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
          </Stack>
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={6}
            sx={{ marginBottom: 2 }}
          />
          <Stack
            sx={{
              width: "100%",
              display: "block",
              textAlign: "center",
            }}
          >
            <Button variant="contained" color="primary" sx={{ width: "50%" }}>
              Send Message
            </Button>
          </Stack>
        </Stack>

        {/* Divider */}
        <Divider sx={{ margin: "20px 0" }} />

        {/* Contact Details Section */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          justifyContent="space-between"
        >
          {/* Contact Information Section */}
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Contact Information
            </Typography>
            <Stack spacing={2} sx={{ marginTop: 5 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <PhoneIcon sx={{ color: "#60E5AD" }} />
                <Typography>+1 (234) 567-890</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <EmailIcon sx={{ color: "#60E5AD" }} />
                <Typography>contact@techpros.com</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <LocationOnIcon sx={{ color: "#60E5AD" }} />
                <Typography>123 Tech Street, Silicon Valley, CA</Typography>
              </Stack>
            </Stack>
          </Box>

          {/* OpenStreetMap Section (without API key) */}
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              height: "400px",
              overflow: "hidden",
              borderRadius: "8px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.597144367396!2d-122.0842497846815!3d37.42199977982347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb1e3fbd941b%3A0x91be421a433eea4b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1622730512841!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ContactUs;
