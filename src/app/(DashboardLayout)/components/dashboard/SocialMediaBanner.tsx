import React from "react";
import { Box, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialMediaBanner = () => {
  return (
    <Box sx={styles.banner}>
      <IconButton
        component="a"
        href="https://wa.me/919770519653"
        target="_blank"
        sx={styles.icon}
      >
        <WhatsAppIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.facebook.com/profile.php?id=61558007285880"
        target="_blank"
        sx={styles.icon}
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://twitter.com/yourprofile"
        target="_blank"
        sx={styles.icon}
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        sx={styles.icon}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.instagram.com/hindustancctvsupport?igsh=NTc4MTIwNjQ2YQ%3D%3D"
        target="_blank"
        sx={styles.icon}
      >
        <InstagramIcon />
      </IconButton>
    </Box>
  );
};

const styles = {
  banner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    color: "#E35A00",
    fontSize: "24px",
    margin: "0 10px",
    "&:hover": {
      color: "#023E8A",
    },
  },
};

export default SocialMediaBanner;
