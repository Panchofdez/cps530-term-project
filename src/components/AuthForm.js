import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const signupSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Does not match!")
    .required("Confirm password is required"),
});

const loginSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const signupInitVals = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const loginInitVals = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const AuthForm = ({ authenticate, authMode }) => {
  console.log("AUTH MODE", authMode);
  return (
    <Formik
      validationSchema={authMode == "Sign Up" ? signupSchema : loginSchema}
      onSubmit={(values) => {
        authenticate(values);
      }}
      initialValues={authMode == "Sign Up" ? signupInitVals : loginInitVals}
    >
      {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>FirstName</Form.Label>
            <Form.Control name="firstName" onChange={handleChange} onBlur={handleBlur} value={values.firstName} />
            {touched.firstName && errors.firstName && <div style={{ color: "red" }}>{errors.firstName}</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control name="lastName" onChange={handleChange} onBlur={handleBlur} value={values.lastName} />
            {touched.lastName && errors.lastName && <div style={{ color: "red" }}>{errors.lastName}</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
            {touched.email && errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {touched.password && errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
          </Form.Group>
          {authMode == "Sign Up" && (
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="confirmPassword"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <div style={{ color: "red" }}>{errors.confirmPassword}</div>
              )}
            </Form.Group>
          )}
          <Button variant="primary" type="submit">
            Save Job
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
