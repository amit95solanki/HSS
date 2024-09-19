import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Stack } from "@mui/system";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";

// Yup validation schema for registration form
const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

interface RegisterType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthRegister = ({ title, subtitle, subtext }: RegisterType) => (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h2" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values) => {
        // Handle form submission
        console.log(values);
      }}
    >
      {({ errors, touched, handleChange, values }) => (
        <Form>
          <Box>
            <Stack mb={3}>
              {/* Name Field */}
              <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                htmlFor="name"
                mb="5px"
              >
                Name
              </Typography>
              <Field
                as={CustomTextField}
                id="name"
                name="name"
                variant="outlined"
                fullWidth
                value={values.name}
                onChange={handleChange}
                error={touched.name && !!errors.name}
                helperText={touched.name && errors.name}
              />

              {/* Email Field */}
              <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                htmlFor="email"
                mb="5px"
                mt="25px"
              >
                Email Address
              </Typography>
              <Field
                as={CustomTextField}
                id="email"
                name="email"
                variant="outlined"
                fullWidth
                value={values.email}
                onChange={handleChange}
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />

              {/* Password Field */}
              <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                htmlFor="password"
                mb="5px"
                mt="25px"
              >
                Password
              </Typography>
              <Field
                as={CustomTextField}
                id="password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                value={values.password}
                onChange={handleChange}
                error={touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />
            </Stack>

            {/* Submit Button */}
            <Button
              color="primary"
              variant="contained"
              size="large"
              fullWidth
              type="submit"
            >
              Sign Up
            </Button>
          </Box>
        </Form>
      )}
    </Formik>

    {subtitle}
  </>
);

export default AuthRegister;
