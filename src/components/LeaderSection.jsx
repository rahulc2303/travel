import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import user1 from "../assets/images/user_1.jpg";
import user2 from "../assets/images/user_2.jpg";

const leadershipData = [
  {
    name: "John Doe",
    position: "CEO",
    profilePic: user1,
  },
  {
    name: "Jane Smith",
    position: "CTO",
    profilePic: user2,
  },
  {
    name: "Robert Brown",
    position: "CFO",
    profilePic: user1,
  },
  {
    name: "Emily Johnson",
    position: "COO",
    profilePic: user2,
  },
];

const LeadershipSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: "20px 0", backgroundColor: "#f9f9f9" }}>
      {/* Title Section */}
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: "10px",
            color: theme.palette.primary.main,
          }}
        >
          The Routematic Leadership
        </Typography>
        <Typography variant="body1">
          A perfect mix of experience and motivation
        </Typography>
      </Box>

      {/* Leadership Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          gap: "20px",
          width: { xs: "90%", sm: "80%" },
          margin: "0 auto",
        }}
      >
        {leadershipData.map((leader, index) => (
          <Card
            key={index}
            sx={{
              textAlign: "center",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: 3,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-10px)", // Slight lift effect on hover
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                marginBottom: "20px",
                display: "inline-block",
              }}
            >
              <Avatar
                src={leader.profilePic}
                alt={leader.name}
                sx={{
                  width: "100px",
                  height: "100px",
                  margin: "0 auto",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)", // Scale up on hover
                  },
                }}
              />
            </Box>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {leader.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                {leader.position}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default LeadershipSection;
