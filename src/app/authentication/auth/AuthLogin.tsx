import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";

// Yup validation schema
const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h2" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <Formik
      initialValues={{
        username: "",
        password: "",
        remember: true, // default checked state for 'remember this device'
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        // Handle form submission
        console.log(values);
      }}
    >
      {({ errors, touched, handleChange, values }) => (
        <Form>
          <Stack>
            <Box>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                htmlFor="username"
                mb="5px"
              >
                Username
              </Typography>
              <Field
                as={CustomTextField}
                name="username"
                variant="outlined"
                fullWidth
                value={values.username}
                onChange={handleChange}
                error={touched.username && !!errors.username}
                helperText={touched.username && errors.username}
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
              <FormGroup>
                <FormControlLabel
                  control={
                    <Field
                      type="checkbox"
                      name="remember"
                      as={Checkbox}
                      checked={values.remember}
                    />
                  }
                  label="Remember this Device"
                />
              </FormGroup>
              <Typography
                component={Link}
                href="/"
                fontWeight="500"
                sx={{
                  textDecoration: "none",
                  color: "primary.main",
                }}
              >
                Forgot Password ?
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

export default AuthLogin;
