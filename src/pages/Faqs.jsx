import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";

const Faqs = () => {
  const theme = useTheme(); // To access the theme colors
  const questions = [
    {
      question: "What is TechPros Solutions?",
      answer:
        "TechPros Solutions is a leading IT solutions provider offering various services.",
    },
    {
      question: "How can I contact TechPros Solutions?",
      answer:
        "You can contact us via email at contact@techpros.com or call us at +1 (234) 567-890.",
    },
    {
      question: "What services does TechPros Solutions offer?",
      answer:
        "We offer IT consulting, software development, cloud solutions, and more.",
    },
    {
      question: "Where is TechPros Solutions located?",
      answer: "We are located at 123 Tech Street, Silicon Valley, CA.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve industries such as finance, healthcare, retail, and more.",
    },
    {
      question: "Do you provide custom software development?",
      answer:
        "Yes, we provide custom software solutions tailored to your business needs.",
    },
    {
      question: "Is your software secure?",
      answer:
        "Yes, we prioritize security and follow industry standards to ensure your data is protected.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes, we offer ongoing maintenance and support for all our solutions.",
    },
    {
      question: "Can you help with IT strategy?",
      answer:
        "Yes, we provide IT consulting to help you develop a robust IT strategy for your business.",
    },
    {
      question: "How do I get started?",
      answer:
        "You can get started by reaching out to us for a consultation or more information.",
    },
  ];

  return (
    <Box sx={{ marginTop: { xs: "15vh", md: "12vh" },marginBottom:"20px" }}>
      <Box
        sx={{
          width: { xs: "90%", sm: "80%" }, // 90% on mobile, 80% on larger screens
          margin: "0 auto", // Center the box
          padding: "50px 20px",
          backgroundColor: "#f0f0f0", // Light grey background for inner content
          borderRadius: "8px", // Rounded corners for inner box
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}
        >
          Frequently Asked Questions
        </Typography>

        <Stack spacing={2} style={{ marginTop: "50px" }}>
          {questions.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                borderRadius: "8px", // Add border-radius to accordion
                "&:hover": {
                  boxShadow: `0 2px 5px grey`, // Add hover shadow effect
                },
                "&::before": {
                  display: "none", // Hide the default line in Accordion
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent", // No background change on hover
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    "&:hover": {
                      color: theme.palette.primary.main, // Change text color on hover
                    },
                    transition: "color 0.3s ease", // Smooth transition for color change
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Faqs;
