"use client"; // Add this line at the top

import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import apiservice from "../../../service/apiservice";
import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import { useRouter } from "next/navigation";
// Yup validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

interface AuthLoginProps {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin: React.FC<AuthLoginProps> = ({ title, subtitle, subtext }) => {
  const router = useRouter();

  const handleLoginSubmit = async (values: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await apiservice.login(values);
      console.log("Login success", response);
      const success = response.data.success;

      if (success) {
        const { accessToken } = response.data;

        localStorage.setItem("accessToken", accessToken);
        router.push("/");
      } else {
        console.log("Login error");
        localStorage.removeItem("accessToken");
        window.location.reload();
      }
    } catch (error) {
      console.log("Login error", error);
      localStorage.removeItem("accessToken");
      window.location.reload();
    }
  };

  return (
    <>
      {title && (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      )}

      {subtext}

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleLoginSubmit}
      >
        {({ errors, touched, handleChange, values }) => (
          <Form>
            <Stack>
              <Box>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="email"
                  mb="5px"
                >
                  Email
                </Typography>
                <Field
                  as={CustomTextField}
                  name="email"
                  variant="outlined"
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </Box>

              <Box mt="25px">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="password"
                  mb="5px"
                >
                  Password
                </Typography>
                <Field
                  as={CustomTextField}
                  type="password"
                  name="password"
                  variant="outlined"
                  fullWidth
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
              </Box>

              <Stack
                justifyContent="space-between"
                direction="row"
                alignItems="center"
                my={2}
              >
                <Typography
                  component={Link}
                  href="/"
                  fontWeight="500"
                  sx={{ textDecoration: "none", color: "primary.main" }}
                >
                  Forgot Password?
                </Typography>
              </Stack>
            </Stack>

            <Box>
              <Button
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                type="submit"
              >
                Sign In
              </Button>
            </Box>
          </Form>
        )}
      </Formik>

      {subtitle}
    </>
  );
};

export default AuthLogin;
