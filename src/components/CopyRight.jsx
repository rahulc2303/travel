import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CopyRight = () => {
  const theme = useTheme();

  return (
    <div style={{ paddingBottom: "10px" }}>
      <Box
        sx={{
          backgroundColor: "#efeeeede",
          width: { xs: "90%", sm: "80%" }, // 90% on mobile, 80% on larger screens
          margin: "10px auto 10px", // Center the footer
          borderRadius: "10px",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          style={{ padding: "20px 20px" }}
        >
          <Typography variant="body2" className="copy_right_text">
            © Copyright 2021 Restly All Rights Reserved Company
          </Typography>

          <Stack
            direction={"row"}
            justifyContent={"start"}
            alignItems={"center"}
            gap={{ xs: 2, sm: 4 }}
            rowGap={0}
            className="copy_right_links"
            flexWrap={"wrap"}
          >
            {["Facebook", "Twitter", "Linkedin", "Pinterest"].map((platform) => (
              <Link
                key={platform}
                href="#"
                sx={{
                  color: "inherit", // Inherit color from parent text
                  textDecoration: "none", // Remove default underline
                  fontWeight: 500,
                  fontSize: "14px",
                  "&:hover": {
                    color: theme.palette.primary.main, // Change to primary color on hover
                  },
                }}
              >
                {platform}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Box>
    </div>

  );
};

export default CopyRight;
