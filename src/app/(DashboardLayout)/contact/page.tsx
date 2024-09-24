"use client";
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import "../../global.css";
import SocialMediaBanner from "../components/dashboard/SocialMediaBanner";
import Footer from "../components/dashboard/Footer";

interface FormValues {
  name: string;
  mobile: string;
  email: string;
  query: string;
}

const Contact = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    mobile: "",
    email: "",
    query: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted", formValues);
    // You can send form data to the server or handle it as needed
  };

  return (
    <>
      <h1 className="mt-5"></h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="section-header text-center pb-5">
              <h2 className="gradient-text mt-5 mb-5">Contact Us</h2>
              <p>
                🏠 - Rangmahal Square, North TT Nagar, TT Nagar, Bhopal, Madhya
                Pradesh 462003
              </p>
              <p>
                📧 -
                <a
                  href="mailto:hindustansurveillancebhopal@gmail.com "
                  className="contact-link"
                >
                  hindustansurveillancebhopal@gmail.com
                </a>
              </p>
              <p>
                📱 -
                <a href="tel:+919770519653" className="contact-link">
                  (+91) 9770519653
                </a>
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              className="responsive-iframe-container"
              sx={{
                marginLeft: {
                  xs: 0, // padding for extra small screens
                  sm: 0, // padding for small screens
                  md: 1, // padding for medium screens
                  lg: 8, // padding for large screens
                  xl: 8, // padding for extra large screens
                },
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3666.202969510932!2d77.398!3d23.2357!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42bdcdd4fcd3%3A0x2bb9c2120eb2328f!2sRangmahal%20Square%2C%20North%20TT%20Nagar%2C%20TT%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462003!5e0!3m2!1sen!2sin!4v1726773902769!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Himalaya Carpets"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              component="form"
              sx={{
                maxWidth: 500,
                mx: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
              onSubmit={handleSubmit}
            >
              <TextField
                label="Name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Mobile No"
                name="mobile"
                value={formValues.mobile}
                onChange={handleChange}
                required
                fullWidth
                type="tel"
                inputProps={{ pattern: "[0-9]{10}" }}
                helperText="Enter a 10-digit mobile number"
              />
              <TextField
                label="Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
                fullWidth
                type="email"
              />
              <TextField
                label="Query"
                name="query"
                value={formValues.query}
                onChange={handleChange}
                required
                fullWidth
                multiline
                rows={4}
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <SocialMediaBanner />
      <Footer />
    </>
  );
};

export default Contact;
